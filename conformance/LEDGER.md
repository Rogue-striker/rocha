# Conformance Ledger

Runner: **rocha**  
Pass Rate: **9/11 (81.8%)**  
Timestamp: 2026-10-17T09:58:19.828Z

| Fixture | Status | Exit Code | Passes | Failures | Pending | Notes |
|---|---|---|---|---|---|---|
| `async.fixture.js` | ✅ PASS | 0 | 2 | 0 | 0 | Matches golden |
| `bail.fixture.js` | ✅ PASS | 1 | 1 | 1 | 0 | Matches golden |
| `done.fixture.js` | ✅ PASS | 0 | 1 | 0 | 0 | Matches golden |
| `hooks-nested.fixture.js` | ✅ PASS | 0 | 1 | 0 | 0 | Matches golden |
| `hooks.fixture.js` | ✅ PASS | 0 | 2 | 0 | 0 | Matches golden |
| `only-nested.fixture.js` | ✅ PASS | 0 | 2 | 0 | 0 | Matches golden |
| `only.fixture.js` | ✅ PASS | 0 | 1 | 0 | 0 | Matches golden |
| `pending.fixture.js` | ❌ FAIL | 1 | 1 | 1 | 2 | Exit code mismatch (got 1, expected 0) |
| `retries.fixture.js` | ❌ FAIL | 1 | 0 | 1 | 0 | Exit code mismatch (got 1, expected 0) |
| `simple-fail.fixture.js` | ✅ PASS | 1 | 1 | 1 | 0 | Matches golden |
| `simple-pass.fixture.js` | ✅ PASS | 0 | 2 | 0 | 0 | Matches golden |
