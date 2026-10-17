#!/usr/bin/env node
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  let cmd = '';
  let suite = 'small';
  let runs = 3;
  let out = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--cmd' && args[i + 1]) cmd = args[++i];
    else if (args[i] === '--suite' && args[i + 1]) suite = args[++i];
    else if (args[i] === '--runs' && args[i + 1]) runs = parseInt(args[++i], 10);
    else if (args[i] === '--out' && args[i + 1]) out = args[++i];
  }

  if (!cmd) {
    console.error('Error: --cmd is required');
    process.exit(1);
  }

  return { cmd, suite, runs, out };
}

function quantile(arr, q) {
  const sorted = [...arr].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  }
  return sorted[base];
}

async function main() {
  const { cmd, suite, runs, out } = parseArgs();

  // Determine suite file spec
  const suiteDir = path.join(rootDir, 'bench', 'suites', suite);
  const globPattern = suite === 'large-ts'
    ? '"bench/suites/large-ts/*.ts"'
    : `"bench/suites/${suite}/*.js"`;

  const fullCmd = cmd.includes('bench/suites') ? cmd : `${cmd} ${globPattern}`;

  const runTimes = [];

  for (let i = 0; i < runs; i++) {
    const start = performance.now();
    try {
      execSync(fullCmd, {
        cwd: rootDir,
        stdio: ['ignore', 'pipe', 'pipe'],
        env: { ...process.env, NODE_ENV: 'test' },
      });
    } catch (err) {
      // If the command failed, we still record time or surface error
      // Note: if tests failed or exited non-zero, capture output
      console.error(`Run ${i + 1} failed: ${err.message}`);
      if (err.stdout) console.error(err.stdout.toString());
      if (err.stderr) console.error(err.stderr.toString());
      process.exit(1);
    }
    const duration = performance.now() - start;
    runTimes.push(Math.round(duration * 100) / 100);
  }

  const p50 = Math.round(quantile(runTimes, 0.5) * 100) / 100;
  const p95 = Math.round(quantile(runTimes, 0.95) * 100) / 100;

  const result = {
    suite,
    command: fullCmd,
    runs: runTimes,
    p50,
    p95,
  };

  const jsonStr = JSON.stringify(result, null, 2);
  console.log(jsonStr);

  if (out) {
    import('node:fs').then(fs => fs.writeFileSync(out, jsonStr, 'utf8'));
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
