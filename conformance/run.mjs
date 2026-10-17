#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const fixturesDir = path.join(__dirname, 'fixtures');
const ledgerPath = path.join(__dirname, 'LEDGER.md');
const goldensDir = path.join(__dirname, 'goldens');

function parseArgs() {
  const args = process.argv.slice(2);
  let runner = 'mocha';
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--runner' && args[i + 1]) runner = args[++i];
  }
  return { runner };
}

function normalizeJson(jsonStr) {
  if (!jsonStr) return null;
  try {
    const data = JSON.parse(jsonStr);

    const norm = {
      stats: {
        suites: data.stats?.suites || 0,
        tests: data.stats?.tests || 0,
        passes: data.stats?.passes || 0,
        pending: data.stats?.pending || 0,
        failures: data.stats?.failures || 0,
      },
      passes: (data.passes || []).map(t => ({
        title: t.title,
        fullTitle: t.fullTitle,
      })),
      pending: (data.pending || []).map(t => ({
        title: t.title,
        fullTitle: t.fullTitle,
      })),
      failures: (data.failures || []).map(t => ({
        title: t.title,
        fullTitle: t.fullTitle,
        errName: t.err?.name || '',
      })),
    };
    return norm;
  } catch (err) {
    return null;
  }
}

function runFixture(runner, fixturePath) {
  const relPath = path.relative(rootDir, fixturePath);
  let cmd = '';

  let uiFlag = '';
  if (fixturePath.includes('tdd')) {
    uiFlag = ' --ui tdd';
  } else if (fixturePath.includes('qunit')) {
    uiFlag = ' --ui qunit';
  }

  let extraFlags = '';
  if (fixturePath.includes('check-leaks')) {
    extraFlags += ' --check-leaks';
  }
  if (fixturePath.includes('dry-run')) {
    extraFlags += ' --dry-run';
  }

  if (runner === 'mocha') {
    cmd = `./node_modules/.bin/mocha --reporter json${uiFlag}${extraFlags} "${relPath}"`;
  } else if (runner === 'rocha') {
    const releaseBin = path.join(rootDir, 'target', 'release', 'rocha');
    const debugBin = path.join(rootDir, 'target', 'debug', 'rocha');
    if (fs.existsSync(releaseBin)) {
      cmd = `"${releaseBin}" --reporter json${uiFlag}${extraFlags} "${relPath}"`;
    } else if (fs.existsSync(debugBin)) {
      cmd = `"${debugBin}" --reporter json${uiFlag}${extraFlags} "${relPath}"`;
    } else {
      cmd = `cargo run -p rocha-cli --quiet -- --reporter json${uiFlag}${extraFlags} "${relPath}"`;
    }
  } else {
    throw new Error(`Unknown runner: ${runner}`);
  }

  let stdout = '';
  let stderr = '';
  let exitCode = 0;

  try {
    stdout = execSync(cmd, {
      cwd: rootDir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'test' },
    });
  } catch (err) {
    exitCode = err.status || 1;
    stdout = err.stdout || '';
    stderr = err.stderr || '';
  }

  return { exitCode, stdout, stderr };
}

function main() {
  const { runner } = parseArgs();
  fs.mkdirSync(goldensDir, { recursive: true });

  const fixtureFiles = fs.readdirSync(fixturesDir)
    .filter(f => f.endsWith('.fixture.js'))
    .sort();

  console.log(`Running conformance test suite with runner: ${runner}`);
  console.log(`Discovered ${fixtureFiles.length} fixtures in ${fixturesDir}\n`);

  const results = [];

  for (const file of fixtureFiles) {
    const fixturePath = path.join(fixturesDir, file);
    const goldenFile = path.join(goldensDir, `${file}.json`);

    if (runner === 'mocha') {
      // Execute Mocha and generate/compare golden
      const run = runFixture('mocha', fixturePath);
      const normalized = normalizeJson(run.stdout);

      if (!normalized) {
        console.error(`Failed to parse JSON output for ${file}`);
        results.push({ file, pass: false, exitCode: run.exitCode, reason: 'Invalid JSON' });
        continue;
      }

      // Save as golden reference
      const goldenPayload = {
        exitCode: run.exitCode,
        result: normalized,
      };
      fs.writeFileSync(goldenFile, JSON.stringify(goldenPayload, null, 2), 'utf8');

      results.push({
        file,
        pass: true,
        exitCode: run.exitCode,
        passes: normalized.stats.passes,
        failures: normalized.stats.failures,
        pending: normalized.stats.pending,
      });
    } else {
      // Rocha or other runner: compare against golden
      if (!fs.existsSync(goldenFile)) {
        console.error(`Missing golden file for ${file}. Run with --runner mocha first.`);
        results.push({ file, pass: false, reason: 'Missing golden reference' });
        continue;
      }

      const golden = JSON.parse(fs.readFileSync(goldenFile, 'utf8'));
      const run = runFixture(runner, fixturePath);
      const normalized = normalizeJson(run.stdout);

      let passed = false;
      let reason = '';

      if (!normalized) {
        passed = false;
        reason = 'No valid JSON output produced';
      } else if (run.exitCode !== golden.exitCode) {
        passed = false;
        reason = `Exit code mismatch (got ${run.exitCode}, expected ${golden.exitCode})`;
      } else {
        const matches = JSON.stringify(normalized) === JSON.stringify(golden.result);
        if (matches) {
          passed = true;
        } else {
          passed = false;
          reason = 'JSON stats/tests mismatch';
        }
      }

      results.push({
        file,
        pass: passed,
        exitCode: run.exitCode,
        expectedExitCode: golden.exitCode,
        reason,
        passes: normalized?.stats?.passes ?? 0,
        failures: normalized?.stats?.failures ?? 0,
        pending: normalized?.stats?.pending ?? 0,
      });
    }
  }

  // Generate LEDGER.md
  const total = results.length;
  const passed = results.filter(r => r.pass).length;
  const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : '0.0';

  let md = `# Conformance Ledger\n\n`;
  md += `Runner: **${runner}**  \n`;
  md += `Pass Rate: **${passed}/${total} (${passRate}%)**  \n`;
  md += `Timestamp: ${new Date().toISOString()}\n\n`;
  md += `| Fixture | Status | Exit Code | Passes | Failures | Pending | Notes |\n`;
  md += `|---|---|---|---|---|---|---|\n`;

  for (const r of results) {
    const status = r.pass ? '✅ PASS' : '❌ FAIL';
    const exit = r.exitCode !== undefined ? r.exitCode : 'N/A';
    const notes = r.reason || (r.pass ? 'Matches golden' : '');
    md += `| \`${r.file}\` | ${status} | ${exit} | ${r.passes ?? '-'} | ${r.failures ?? '-'} | ${r.pending ?? '-'} | ${notes} |\n`;
  }

  fs.writeFileSync(ledgerPath, md, 'utf8');
  console.log(`Conformance run complete: ${passed}/${total} passed (${passRate}%).`);
  console.log(`Updated ${ledgerPath}`);
  if (runner !== 'mocha' && passed < total) {
    process.exit(1);
  }
}

main();
