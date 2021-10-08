/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */

const checkArgs = (args) => {
  if (
    !(
      typeof args[0] === 'function' ||
      (typeof args[0] === 'string' && typeof args[1] === 'function')
    )
  )
    throw new Error('Invalid function arguments.');
};

export default (object) => {
  // 1. Initialize handlers store
  const handlers = Symbol('handlers');
  object[handlers] = [];

  object.getObserversCount = function () {
    return object[handlers].length;
  };

  object.unobserveAll = function () {
    object[handlers].length = 0;
  };

  // Store the handler function in array for future calls
  object.observe = function (...handler) {
    checkArgs(handler);

    // TODO Add handler reference check
    this[handlers].push(handler);

    // Remove handler from the list
    return function () {
      object[handlers] = object[handlers].filter((h) => h !== handler);
    };
  };

  // 2. Create a proxy to handle changes
  return new Proxy(object, {
    set(target, property, value, receiver) {
      const reflectValue = Reflect.get(target, property, receiver);
      if (value === reflectValue) return true; // Update only if different

      const success = Reflect.set(...arguments); // Forward the operation to object
      if (success) {
        target[handlers].forEach((handler) => {
          if (typeof handler[0] === 'function') handler[0](property, value);
          else if (handler[0] === property) handler[1](value);
        });
      }
      return success; // Throw error if false
    },
  });
};
