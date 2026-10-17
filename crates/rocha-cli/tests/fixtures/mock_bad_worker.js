#!/usr/bin/env node
const { encode } = require("@msgpack/msgpack");
const payload = encode({
  type: "Ready",
  protocol_version: 9999,
});
const buf = Buffer.alloc(4 + payload.length);
buf.writeUInt32LE(payload.length, 0);
Buffer.from(payload).copy(buf, 4);
process.stdout.write(buf);
setInterval(() => {}, 1000);
