import type { ChildProcess, SpawnSyncReturns, SpawnOptions, SpawnSyncOptions } from 'child_process';

/**
 * Returns the resolved path to the native Rocha executable binary.
 */
export function getBinaryPath(): string;

/**
 * Spawns the Rocha test orchestrator asynchronously with the specified arguments.
 */
export function run(args?: string[], options?: SpawnOptions): ChildProcess;

/**
 * Spawns the Rocha test orchestrator synchronously with the specified arguments.
 */
export function runSync(args?: string[], options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
