const mocha = require('mocha');
if (mocha && mocha.reporters && mocha.reporters.Base) {
  const OriginalBase = mocha.reporters.Base;
  function CallableBase(runner, options) {
    const instance = Reflect.construct(OriginalBase, [runner, options], new.target || CallableBase);
    Object.assign(this, instance);
    return this;
  }
  CallableBase.prototype = OriginalBase.prototype;
  Object.setPrototypeOf(CallableBase, OriginalBase);
  Object.assign(CallableBase, OriginalBase);
  mocha.reporters.Base = CallableBase;
}
