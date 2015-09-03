module.exports = function () {
  if (arguments.length === 0) {
    return;
  }

  var args = arguments;

  setImmediate(function () {
    var fx = args[0];
    var fxArgs = [];
    // According to this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    // You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example).
    // Instead, try constructing a new array by iterating through the arguments object.
    var i;
    for (i = 1; i < args.length; i++) { fxArgs.push(args[i]); }

    fx.apply(null, fxArgs);
  });
};