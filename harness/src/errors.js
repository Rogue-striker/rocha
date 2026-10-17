"use strict";

const util = require("node:util");

const DEFAULT_MAX_MESSAGE_LENGTH = 8192;
const DEFAULT_MAX_STACK_LENGTH = 16384;
const DEFAULT_MAX_VALUE_LENGTH = 4096;

/**
 * Clean circular references in an object safely.
 */
function safeStringify(val, maxLength = DEFAULT_MAX_VALUE_LENGTH) {
  if (val === undefined) return undefined;
  if (val === null) return "null";
  if (typeof val === "string") {
    if (val.length > maxLength) {
      return val.slice(0, maxLength) + " ... [truncated]";
    }
    return val;
  }
  if (typeof val === "number" || typeof val === "boolean" || typeof val === "bigint") {
    return String(val);
  }

  try {
    const seen = new WeakSet();
    const str = JSON.stringify(val, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return "[Circular]";
        }
        seen.add(value);
      }
      return value;
    }, 2);

    if (str && str.length > maxLength) {
      return str.slice(0, maxLength) + " ... [truncated]";
    }
    return str;
  } catch (_) {
    try {
      const inspected = util.inspect(val, { depth: 4, maxArrayLength: 50 });
      if (inspected.length > maxLength) {
        return inspected.slice(0, maxLength) + " ... [truncated]";
      }
      return inspected;
    } catch (_) {
      return "[Unserializable Value]";
    }
  }
}

/**
 * Filter out Rocha and Node internals from stack trace.
 */
function cleanStack(stack, maxLength = DEFAULT_MAX_STACK_LENGTH) {
  if (!stack || typeof stack !== "string") return undefined;

  const lines = stack.split("\n");
  const filtered = [];

  for (const line of lines) {
    // Keep header line and user test frames
    if (
      !line.includes("harness/src/runner.js") &&
      !line.includes("harness/src/context.js") &&
      !line.includes("harness/src/hooks.js") &&
      !line.includes("harness/bin/run.js") &&
      !line.includes("node:internal/")
    ) {
      filtered.push(line);
    }
  }

  let result = filtered.length > 0 ? filtered.join("\n") : stack;
  if (result.length > maxLength) {
    result = result.slice(0, maxLength) + "\n... [stack truncated]";
  }
  return result;
}

/**
 * Serialize any thrown error or value into the protocol ProtocolError format.
 *
 * @param {any} err
 * @param {Object} [options]
 * @returns {Object} ProtocolError
 */
function serializeError(err, options = {}) {
  const maxMessageLength = options.maxMessageLength || DEFAULT_MAX_MESSAGE_LENGTH;
  const maxStackLength = options.maxStackLength || DEFAULT_MAX_STACK_LENGTH;
  const maxValueLength = options.maxValueLength || DEFAULT_MAX_VALUE_LENGTH;

  // Handle null / undefined
  if (err === null || err === undefined) {
    return {
      name: "Error",
      message: `thrown ${String(err)}`,
      stack: undefined,
      code: undefined,
      actual: undefined,
      expected: undefined,
      show_diff: false,
      operator: undefined,
    };
  }

  // Handle thrown primitive string / number / boolean
  if (typeof err !== "object" && typeof err !== "function") {
    let msg = String(err);
    if (msg.length > maxMessageLength) {
      msg = msg.slice(0, maxMessageLength) + " ... [message truncated]";
    }
    return {
      name: "Error",
      message: msg,
      stack: undefined,
      code: undefined,
      actual: undefined,
      expected: undefined,
      show_diff: false,
      operator: undefined,
    };
  }

  // Handle Error instances or thrown plain objects
  let name = err.name || (err.constructor && err.constructor.name ? err.constructor.name : "Error");
  let message = err.message !== undefined ? String(err.message) : "";

  // If plain object without message, stringify it
  if (!message && !(err instanceof Error)) {
    message = safeStringify(err, maxMessageLength);
  }

  if (message.length > maxMessageLength) {
    message = message.slice(0, maxMessageLength) + " ... [message truncated]";
  }

  const stack = cleanStack(err.stack, maxStackLength);
  const code = err.code ? String(err.code) : undefined;
  const operator = err.operator ? String(err.operator) : undefined;

  // Actual & Expected for assertion errors
  let actual = undefined;
  let expected = undefined;
  let showDiff = Boolean(err.showDiff !== false && (err.actual !== undefined || err.expected !== undefined));

  if (err.actual !== undefined) {
    actual = safeStringify(err.actual, maxValueLength);
  }
  if (err.expected !== undefined) {
    expected = safeStringify(err.expected, maxValueLength);
  }

  // Also support Chai expect (which provides err.actual, err.expected, err.showDiff)
  if (actual === undefined && err.actualValue !== undefined) {
    actual = safeStringify(err.actualValue, maxValueLength);
  }
  if (expected === undefined && err.expectedValue !== undefined) {
    expected = safeStringify(err.expectedValue, maxValueLength);
  }

  return {
    name,
    message,
    stack,
    code,
    actual,
    expected,
    show_diff: showDiff,
    operator,
  };
}

module.exports = {
  serializeError,
  cleanStack,
  safeStringify,
  DEFAULT_MAX_MESSAGE_LENGTH,
  DEFAULT_MAX_STACK_LENGTH,
  DEFAULT_MAX_VALUE_LENGTH,
};
