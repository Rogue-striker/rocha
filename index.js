'use strict';

const { spawn, spawnSync } = require('child_process');
const { getBinaryPath, ensureBinary } = require('./scripts/install-binary');

function getRochaBin() {
  let bin = getBinaryPath();
  if (!bin) {
    bin = ensureBinary();
  }
  return bin;
}

function runSync(args = [], options = {}) {
  const bin = getRochaBin();
  return spawnSync(bin, args, {
    stdio: 'inherit',
    ...options,
  });
}

function run(args = [], options = {}) {
  const bin = getRochaBin();
  return spawn(bin, args, {
    stdio: 'inherit',
    ...options,
  });
}

module.exports = {
  getBinaryPath: getRochaBin,
  run,
  runSync,
};
