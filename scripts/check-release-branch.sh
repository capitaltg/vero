#!/bin/sh
# Runs as the npm `preversion` hook so release tags are only ever created on
# an up-to-date main. Tags made on feature branches point at pre-squash
# commits, which breaks GitHub's auto-generated release notes.
set -e

branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" != "main" ]; then
  echo "error: releases must be cut from main (currently on '$branch')" >&2
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "error: working tree is not clean" >&2
  exit 1
fi

git fetch --quiet origin main
if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]; then
  echo "error: local main is not in sync with origin/main; pull first" >&2
  exit 1
fi
