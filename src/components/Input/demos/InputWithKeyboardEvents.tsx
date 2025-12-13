import { useState, type KeyboardEvent } from 'react';
import { Input } from '../src/Input';

type LogEntry = {
  timestamp: number;
  key: string;
  type: 'KeyDown' | 'KeyUp';
};

export const InputWithKeyboardEvents = () => {
  const [keyDownLog, setKeyDownLog] = useState<LogEntry[]>([]);
  const [keyUpLog, setKeyUpLog] = useState<LogEntry[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const logEntry: LogEntry = {
      timestamp: Date.now(),
      key: e.key,
      type: 'KeyDown',
    };
    setKeyDownLog(prev => [logEntry, ...prev].slice(0, 10));
    console.log('onKeyDown:', e);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const logEntry: LogEntry = {
      timestamp: Date.now(),
      key: e.key,
      type: 'KeyUp',
    };
    setKeyUpLog(prev => [logEntry, ...prev].slice(0, 10));
    console.log('onKeyUp:', e);
  };

  return (
    <div className="space-y-4">
      <Input
        required
        id="input-with-keyboard-events"
        placeholder="Type here to see keyboard events..."
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold">onKeyDown Events (last 10):</h3>
          <div
            className="max-h-48 space-y-1 overflow-y-auto rounded-md bg-base-200 p-3 font-mono
              text-xs"
          >
            {keyDownLog.length === 0 ? (
              <div className="text-muted-foreground">No events yet...</div>
            ) : (
              keyDownLog.map((log, idx) => (
                <div key={`${log.timestamp}-${log.type}-${idx}`} className="text-xs">
                  {log.type}: {log.key}
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold">onKeyUp Events (last 10):</h3>
          <div
            className="max-h-48 space-y-1 overflow-y-auto rounded-md bg-base-200 p-3 font-mono
              text-xs"
          >
            {keyUpLog.length === 0 ? (
              <div className="text-muted-foreground">No events yet...</div>
            ) : (
              keyUpLog.map((log, idx) => (
                <div key={`${log.timestamp}-${log.type}-${idx}`} className="text-xs">
                  {log.type}: {log.key}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
