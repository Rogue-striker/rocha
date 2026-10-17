'use strict';

/**
 * Pure JavaScript, zero-dependency implementation of BLAKE3 (256-bit default output).
 * Matches Rust `blake3` crate output byte-for-byte.
 */

const IV = new Uint32Array([
  0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
  0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
]);

const MSG_PERMUTATION = [2, 6, 3, 10, 7, 0, 4, 13, 1, 11, 12, 5, 9, 14, 15, 8];

const CHUNK_START = 1 << 0;
const CHUNK_END = 1 << 1;
const PARENT = 1 << 2;
const ROOT = 1 << 3;

function rotr32(w, c) {
  return ((w >>> c) | (w << (32 - c))) >>> 0;
}

function g(v, a, b, c, d, mx, my) {
  v[a] = (v[a] + v[b] + mx) >>> 0;
  v[d] = rotr32((v[d] ^ v[a]) >>> 0, 16);
  v[c] = (v[c] + v[d]) >>> 0;
  v[b] = rotr32((v[b] ^ v[c]) >>> 0, 12);
  v[a] = (v[a] + v[b] + my) >>> 0;
  v[d] = rotr32((v[d] ^ v[a]) >>> 0, 8);
  v[c] = (v[c] + v[d]) >>> 0;
  v[b] = rotr32((v[b] ^ v[c]) >>> 0, 7);
}

function round(v, m) {
  // Column step
  g(v, 0, 4, 8, 12, m[0], m[1]);
  g(v, 1, 5, 9, 13, m[2], m[3]);
  g(v, 2, 6, 10, 14, m[4], m[5]);
  g(v, 3, 7, 11, 15, m[6], m[7]);
  // Diagonal step
  g(v, 0, 5, 10, 15, m[8], m[9]);
  g(v, 1, 6, 11, 12, m[10], m[11]);
  g(v, 2, 7, 8, 13, m[12], m[13]);
  g(v, 3, 4, 9, 14, m[14], m[15]);
}

function compress(cv, blockWords, counterLow, counterHigh, blockLen, flags) {
  const v = new Uint32Array(16);
  v[0] = cv[0]; v[1] = cv[1]; v[2] = cv[2]; v[3] = cv[3];
  v[4] = cv[4]; v[5] = cv[5]; v[6] = cv[6]; v[7] = cv[7];
  v[8] = IV[0]; v[9] = IV[1]; v[10] = IV[2]; v[11] = IV[3];
  v[12] = counterLow >>> 0;
  v[13] = counterHigh >>> 0;
  v[14] = blockLen >>> 0;
  v[15] = flags >>> 0;

  let m = new Uint32Array(blockWords);
  for (let r = 0; r < 7; r++) {
    round(v, m);
    const nextM = new Uint32Array(16);
    for (let i = 0; i < 16; i++) {
      nextM[i] = m[MSG_PERMUTATION[i]];
    }
    m = nextM;
  }

  const out = new Uint32Array(16);
  for (let i = 0; i < 8; i++) {
    out[i] = (v[i] ^ v[i + 8]) >>> 0;
    out[i + 8] = (v[i + 8] ^ cv[i]) >>> 0;
  }
  return out;
}

function parentOutput(leftCV, rightCV, isRoot) {
  const block = new Uint32Array(16);
  for (let i = 0; i < 8; i++) {
    block[i] = leftCV[i];
    block[i + 8] = rightCV[i];
  }
  const flags = PARENT | (isRoot ? ROOT : 0);
  return compress(IV, block, 0, 0, 64, flags);
}

function wordsToHex(words, wordCount = 8) {
  let hex = '';
  for (let i = 0; i < wordCount; i++) {
    const w = words[i];
    const b0 = (w & 0xff).toString(16).padStart(2, '0');
    const b1 = ((w >>> 8) & 0xff).toString(16).padStart(2, '0');
    const b2 = ((w >>> 16) & 0xff).toString(16).padStart(2, '0');
    const b3 = ((w >>> 24) & 0xff).toString(16).padStart(2, '0');
    hex += b0 + b1 + b2 + b3;
  }
  return hex;
}

function bytesToWords(bytes, offset, length) {
  const words = new Uint32Array(16);
  const fullWords = Math.floor(length / 4);
  for (let i = 0; i < fullWords; i++) {
    const idx = offset + i * 4;
    words[i] =
      (bytes[idx] |
        (bytes[idx + 1] << 8) |
        (bytes[idx + 2] << 16) |
        (bytes[idx + 3] << 24)) >>>
      0;
  }
  const rem = length % 4;
  if (rem > 0) {
    const idx = offset + fullWords * 4;
    let lastWord = 0;
    for (let j = 0; j < rem; j++) {
      lastWord |= bytes[idx + j] << (j * 8);
    }
    words[fullWords] = lastWord >>> 0;
  }
  return words;
}

class Blake3Hasher {
  constructor() {
    this.buffer = new Uint8Array(1024);
    this.bufferLen = 0;
    this.chunkCounter = 0;
    this.stack = [];
  }

  update(data) {
    let bytes;
    if (typeof data === 'string') {
      bytes = Buffer.from(data, 'utf8');
    } else if (Buffer.isBuffer(data) || data instanceof Uint8Array) {
      bytes = data;
    } else {
      bytes = Buffer.from(data);
    }

    let offset = 0;
    let remaining = bytes.length;

    while (remaining > 0) {
      if (this.bufferLen === 1024) {
        this._processChunk(false);
      }
      const toCopy = Math.min(remaining, 1024 - this.bufferLen);
      this.buffer.set(bytes.subarray(offset, offset + toCopy), this.bufferLen);
      this.bufferLen += toCopy;
      offset += toCopy;
      remaining -= toCopy;
    }
    return this;
  }

  _processChunk(isRoot) {
    const chunkLen = this.bufferLen;
    const numBlocks = Math.ceil(chunkLen / 64) || 1;
    let cv = IV;
    let out = null;

    for (let b = 0; b < numBlocks; b++) {
      const blockStart = b * 64;
      const blockLen = Math.min(64, chunkLen - blockStart);
      const blockWords = bytesToWords(this.buffer, blockStart, blockLen);

      let flags = 0;
      if (b === 0) flags |= CHUNK_START;
      if (b === numBlocks - 1) {
        flags |= CHUNK_END;
        if (isRoot) flags |= ROOT;
      }

      out = compress(cv, blockWords, this.chunkCounter, 0, blockLen, flags);
      cv = out.subarray(0, 8);
    }

    this.bufferLen = 0;
    this.chunkCounter++;

    if (isRoot) {
      return out;
    }

    // Tree reduction
    let currentCV = cv;
    let count = this.chunkCounter;
    while ((count & 1) === 0) {
      const left = this.stack.pop();
      const parentOut = parentOutput(left, currentCV, false);
      currentCV = parentOut.subarray(0, 8);
      count >>>= 1;
    }
    this.stack.push(currentCV);
    return null;
  }

  digestHex() {
    if (this.stack.length === 0) {
      // Entire input was <= 1024 bytes (single chunk root)
      const out = this._processChunk(true);
      return wordsToHex(out, 8);
    }

    // Has chunks on stack, finalize remaining partial chunk
    if (this.bufferLen > 0) {
      this._processChunk(false);
    }

    let current = this.stack.pop();
    while (this.stack.length > 0) {
      const isRoot = this.stack.length === 1;
      const left = this.stack.pop();
      const parentOut = parentOutput(left, current, isRoot);
      if (isRoot) {
        return wordsToHex(parentOut, 8);
      }
      current = parentOut.subarray(0, 8);
    }
    return wordsToHex(current, 8);
  }
}

function blake3(data) {
  const hasher = new Blake3Hasher();
  hasher.update(data);
  return hasher.digestHex();
}

module.exports = {
  Blake3Hasher,
  blake3,
};
