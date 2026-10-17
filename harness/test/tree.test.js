'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
let Mocha = (() => {
  try {
    const m = require("mocha/lib/mocha.cjs");
    if (typeof m === "function") return m;
  } catch (_) {}
  try {
    const raw = require("mocha");
    if (typeof raw === "function") return raw;
    if (raw && typeof raw.Mocha === "function") return raw.Mocha;
    if (raw && typeof raw.default === "function") return raw.default;
    return raw;
  } catch (_) {}
  return require("mocha");
})();
const { buildSuiteTree, resetCounters } = require('../src/index.js');

function buildMochaTree(fn) {
  const mocha = new Mocha();
  const root = new Mocha.Suite('', new Mocha.Context());
  Mocha.interfaces.bdd(root);
  const context = {};
  root.emit('pre-require', context, 'fixture.js', mocha);
  fn(context);
  return serializeMochaSuite(root);
}

function serializeMochaSuite(s) {
  return {
    title: s.title || '',
    pending: !!(s.pending || (s.isPending && s.isPending())),
    only: Boolean(s.parent && s.parent._onlySuites ? s.parent._onlySuites.includes(s) : false),
    beforeAll: s._beforeAll ? s._beforeAll.length : 0,
    afterAll: s._afterAll ? s._afterAll.length : 0,
    beforeEach: s._beforeEach ? s._beforeEach.length : 0,
    afterEach: s._afterEach ? s._afterEach.length : 0,
    tests: s.tests.map(t => ({
      title: t.title,
      pending: !!t.pending,
      only: Boolean(s._onlyTests ? s._onlyTests.includes(t) : false),
    })),
    suites: s.suites.map(serializeMochaSuite),
  };
}

function buildRochaTree(fn) {
  resetCounters();
  const root = buildSuiteTree(fn);
  return root.toTree();
}

function assertTreeMatchesMocha(fixtureFn, description) {
  const mochaTree = buildMochaTree(fixtureFn);
  const rochaTree = buildRochaTree(fixtureFn);
  assert.deepStrictEqual(rochaTree, mochaTree, `Tree mismatch for fixture: ${description}`);
}

const fixtures = [
  {
    name: '01: single test in single describe',
    fn: ({ describe, it }) => {
      describe('Suite 1', () => {
        it('test 1', () => {});
      });
    },
  },
  {
    name: '02: multiple tests in single describe',
    fn: ({ describe, it }) => {
      describe('Math operations', () => {
        it('should add', () => {});
        it('should subtract', () => {});
        it('should multiply', () => {});
      });
    },
  },
  {
    name: '03: nested describes (2 levels)',
    fn: ({ describe, it }) => {
      describe('Outer Suite', () => {
        it('outer test', () => {});
        describe('Inner Suite', () => {
          it('inner test', () => {});
        });
      });
    },
  },
  {
    name: '04: deeply nested describes (4 levels)',
    fn: ({ describe, it }) => {
      describe('L1', () => {
        describe('L2', () => {
          describe('L3', () => {
            describe('L4', () => {
              it('deep test', () => {});
            });
          });
        });
      });
    },
  },
  {
    name: '05: multiple sibling describes at root',
    fn: ({ describe, it }) => {
      describe('Sibling A', () => {
        it('test A', () => {});
      });
      describe('Sibling B', () => {
        it('test B', () => {});
      });
      describe('Sibling C', () => {
        it('test C', () => {});
      });
    },
  },
  {
    name: '06: it.only test within suite',
    fn: ({ describe, it }) => {
      describe('Suite with only test', () => {
        it('regular test 1', () => {});
        it.only('focused test', () => {});
        it('regular test 2', () => {});
      });
    },
  },
  {
    name: '07: describe.only suite with tests',
    fn: ({ describe, it }) => {
      describe.only('Focused Suite', () => {
        it('test 1', () => {});
        it('test 2', () => {});
      });
      describe('Ignored Suite', () => {
        it('test 3', () => {});
      });
    },
  },
  {
    name: '08: it.skip test within suite',
    fn: ({ describe, it }) => {
      describe('Suite with skipped test', () => {
        it('active test', () => {});
        it.skip('skipped test', () => {});
      });
    },
  },
  {
    name: '09: describe.skip suite cascading pending to nested tests',
    fn: ({ describe, it }) => {
      describe.skip('Skipped Suite', () => {
        it('should be pending', () => {});
        describe('Nested in skipped', () => {
          it('nested should also be pending', () => {});
        });
      });
    },
  },
  {
    name: '10: xit alias for it.skip',
    fn: ({ describe, xit, it }) => {
      describe('Xit suite', () => {
        it('regular', () => {});
        xit('temporarily skipped', () => {});
      });
    },
  },
  {
    name: '11: xdescribe alias for describe.skip',
    fn: ({ xdescribe, it }) => {
      xdescribe('Temporarily skipped suite', () => {
        it('test a', () => {});
      });
    },
  },
  {
    name: '12: context and specify aliases',
    fn: ({ context, specify }) => {
      context('User Context', () => {
        specify('should login', () => {});
        specify('should logout', () => {});
      });
    },
  },
  {
    name: '13: xcontext and xspecify aliases',
    fn: ({ context, xcontext, specify, xspecify }) => {
      context('Active Context', () => {
        xspecify('pending specify', () => {});
      });
      xcontext('Pending Context', () => {
        specify('pending under xcontext', () => {});
      });
    },
  },
  {
    name: '14: pending test with no callback',
    fn: ({ describe, it }) => {
      describe('Pending spec tests', () => {
        it('future feature to implement');
        it('another placeholder');
      });
    },
  },
  {
    name: '15: before and after suite hooks',
    fn: ({ describe, it, before, after }) => {
      describe('Suite with setup/teardown', () => {
        before(() => {});
        it('test with lifecycle', () => {});
        after(() => {});
      });
    },
  },
  {
    name: '16: beforeEach and afterEach test hooks',
    fn: ({ describe, it, beforeEach, afterEach }) => {
      describe('Suite with per-test hooks', () => {
        beforeEach(() => {});
        it('test 1', () => {});
        it('test 2', () => {});
        afterEach(() => {});
      });
    },
  },
  {
    name: '17: named hooks with description',
    fn: ({ describe, it, before, beforeEach }) => {
      describe('Suite with named hooks', () => {
        before('connect database', () => {});
        beforeEach('reset tables', () => {});
        it('database test', () => {});
      });
    },
  },
  {
    name: '18: multiple hooks of the same lifecycle phase',
    fn: ({ describe, it, before, beforeEach, afterEach, after }) => {
      describe('Multi-hook suite', () => {
        before(() => {});
        before(() => {});
        beforeEach(() => {});
        beforeEach(() => {});
        it('test with multiple hooks', () => {});
        afterEach(() => {});
        afterEach(() => {});
        after(() => {});
        after(() => {});
      });
    },
  },
  {
    name: '19: mixed only and skip tests in the same suite',
    fn: ({ describe, it }) => {
      describe('Mixed suite', () => {
        it('regular', () => {});
        it.only('focused', () => {});
        it.skip('skipped', () => {});
        it('placeholder');
      });
    },
  },
  {
    name: '20: delayed suite execution with global run()',
    fn: ({ describe, it }) => {
      describe('Suite with delay', () => {
        it('runs after delay', () => {});
      });
    },
  },
];

for (const fixture of fixtures) {
  test(`harness tree parity: ${fixture.name}`, () => {
    assertTreeMatchesMocha(fixture.fn, fixture.name);
  });
}

test('harness: delay option supports run() callback', () => {
  const { Harness } = require('../src/index.js');
  const harness = new Harness({ delay: true });
  const context = {};
  harness.install(context);

  assert.strictEqual(typeof context.run, 'function');
  assert.strictEqual(harness.isRunCalled, false);

  context.run();
  assert.strictEqual(harness.isRunCalled, true);
});
