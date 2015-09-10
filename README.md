## Immediate
Small module that ease the invocation of a function within a setImmediate call. Following the best practice of always calling callbacks in an async fashion, this library will add some syntactic sugar (a little implementation of a [Cristian Douce](https://github.com/cristiandouce) idea).

### Installation
```
npm i immediate-invocation
```

### Classic invocation of a callback

A typical node.js code looks like this:

```js
function addNumber(first, second, cb) {
  if (first === null) {
    return cb(new Error('first argument is mandatory'));
  }
  
  cb(null, first + second);
}
```

This has the drawback that breaks the implicit contract of executing the callback in the next tick.
To avoid this we can wrap the `cb` call with `setImmediate`:

### Invoking a callback with setImmediate

```js
function addNumber(first, second, cb) {
  if (first === null) {
    return setImmediate(function () {
      cb(new Error('first argument is mandatory'));
    });
  }

  return setImmediate(function () {
    cb(null, first + second);
  });
}
```

This is a bit verbose. Now an example using this module:

### Invoking a callback with this module (immediate)

```js
var immediate = require('immediate');

function addNumber(first, second, cb) {
  if (first === null) {
    return immediate(cb, new Error('first argument is mandatory'));
  }
  
  immediate(cb, null, first + second);
}
```
