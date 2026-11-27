#!/usr/bin/env node
// Starts Storybook, asking before it moves to another port.
//
// Storybook checks whether its port is free on `localhost` and `0.0.0.0`, but on macOS
// `localhost` resolves to `::1`, so a server holding `127.0.0.1:6006` (such as another
// Storybook) isn't seen. Storybook then skips its "use another port?" question and fails with
// EADDRINUSE. This checks every address, asks, and starts Storybook on the chosen port.
//
// Extra arguments go to `storybook dev`: `npm run storybook -- --no-open`. Pass `-p <port>`
// to start the search somewhere other than 6006.

import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { createServer } from 'node:net';
import { createInterface } from 'node:readline/promises';

const DEFAULT_PORT = 6006;
const HOSTS = ['127.0.0.1', '0.0.0.0', '::1', '::'];

// Resolves true if nothing is listening on `port` at `host`. An address the machine doesn't
// have (such as `::1` without IPv6) counts as free.
const isFreeOn = (port, host) =>
  new Promise(resolve => {
    const server = createServer();
    server.once('error', error => {
      resolve(error.code === 'EADDRNOTAVAIL' || error.code === 'EAFNOSUPPORT');
    });
    server.listen({ port, host, exclusive: true }, () => {
      server.close(() => resolve(true));
    });
  });

const isFree = async port => {
  for (const host of HOSTS) {
    if (!(await isFreeOn(port, host))) return false;
  }
  return true;
};

const findFreePort = async start => {
  for (let port = start + 1; port < start + 100; port++) {
    if (await isFree(port)) return port;
  }
  throw new Error(`No free port found between ${start + 1} and ${start + 99}.`);
};

// Splits `-p 6006`, `-p=6006`, `--port 6006` and `--port=6006` out of the arguments.
const parseArgs = args => {
  const rest = [];
  let port = DEFAULT_PORT;
  for (let i = 0; i < args.length; i++) {
    const match = args[i].match(/^(-p|--port)(?:=(.+))?$/);
    if (match) {
      port = Number(match[2] ?? args[++i]);
    } else {
      rest.push(args[i]);
    }
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error('The port must be a number from 1 to 65535.');
    process.exit(1);
  }
  return { port, rest };
};

// Resolves true for Enter, "y" or "yes". Ctrl+C or Ctrl+D at the prompt counts as no.
const ask = async question => {
  const readline = createInterface({ input: process.stdin, output: process.stdout });
  const aborted = new AbortController();
  readline.on('SIGINT', () => aborted.abort());
  try {
    const answer = await readline.question(question, { signal: aborted.signal });
    return ['', 'y', 'yes'].includes(answer.trim().toLowerCase());
  } catch {
    process.stdout.write('\n');
    return false;
  } finally {
    readline.close();
  }
};

const { port: requested, rest } = parseArgs(process.argv.slice(2));
let port = requested;

if (!(await isFree(requested))) {
  const next = await findFreePort(requested);
  if (process.stdin.isTTY) {
    if (
      !(await ask(`Port ${requested} is in use. Run Storybook on port ${next} instead? (Y/n) `))
    ) {
      process.exit(1);
    }
  } else {
    // No one to ask, such as in CI: take the next free port, as Storybook does with --ci.
    console.log(`Port ${requested} is in use. Running Storybook on port ${next}.`);
  }
  port = next;
}

// Run Storybook's CLI with this Node, so it works without npm's PATH and on Windows.
// --exact-port: the port is already checked, so Storybook shouldn't look for another.
const cli = createRequire(import.meta.url).resolve('storybook/bin/index.cjs');
const storybook = spawn(
  process.execPath,
  [cli, 'dev', '-p', String(port), '--exact-port', ...rest],
  { stdio: 'inherit' },
);

// Ctrl+C reaches Storybook directly, since it shares the terminal; just wait for it to exit.
process.on('SIGINT', () => {});
process.on('SIGTERM', () => storybook.kill('SIGTERM'));
storybook.on('exit', (code, signal) => process.exit(signal ? 1 : (code ?? 0)));
