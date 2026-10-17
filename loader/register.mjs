import * as mod from 'node:module';
import * as hooks from './esm-hooks.mjs';

if (typeof mod.registerHooks === 'function') {
  mod.registerHooks(hooks);
} else if (typeof mod.register === 'function') {
  mod.register('./esm-hooks.mjs', import.meta.url);
}
