import * as mod from 'node:module';

if (typeof mod.registerHooks === 'function') {
  mod.registerHooks('./esm-hooks.mjs', import.meta.url);
} else if (typeof mod.register === 'function') {
  mod.register('./esm-hooks.mjs', import.meta.url);
}
