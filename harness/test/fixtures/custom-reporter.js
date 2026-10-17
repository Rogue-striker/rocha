const fs = require('fs');

module.exports = function CustomReporter(runner, options) {
  const opts = options && options.reporterOptions ? options.reporterOptions : (options || {});
  const outFile = opts.output || 'custom-out.txt';
  const logs = [];

  runner.on('start', () => logs.push('START'));
  runner.on('suite', (s) => s.title && logs.push(`SUITE: ${s.title}`));
  runner.on('test', (t) => logs.push(`TEST: ${t.title}`));
  runner.on('pass', (t) => logs.push(`PASS: ${t.title}`));
  runner.on('fail', (t, err) => logs.push(`FAIL: ${t.title} - ${err.message}`));
  runner.on('pending', (t) => logs.push(`PENDING: ${t.title}`));
  runner.on('suite end', (s) => s.title && logs.push(`SUITE END: ${s.title}`));
  runner.on('end', () => {
    logs.push(`END: passes=${runner.stats.passes}, failures=${runner.stats.failures}`);
    fs.writeFileSync(outFile, logs.join('\n') + '\n');
  });
};
