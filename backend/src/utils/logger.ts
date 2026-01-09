import { config } from '../config/env';

type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

const logLevels: Record<LogLevel, number> = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

const currentLogLevel = logLevels[config.logLevel as LogLevel] ?? logLevels.INFO;

function log(level: LogLevel, message: string, ...args: unknown[]): void {
  if (logLevels[level] >= currentLogLevel) {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level}]`;
    console.log(prefix, message, ...args);
  }
}

export const logger = {
  debug: (message: string, ...args: unknown[]) => log('DEBUG', message, ...args),
  info: (message: string, ...args: unknown[]) => log('INFO', message, ...args),
  warn: (message: string, ...args: unknown[]) => log('WARN', message, ...args),
  error: (message: string, ...args: unknown[]) => log('ERROR', message, ...args),
};
