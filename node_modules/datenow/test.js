var test = require('tape');
var now = require('.');

test('.now()', function (t) {
  t.ok(typeof now === 'function', 'should be a function');
  t.ok(typeof now() === 'number', 'should return a number');
  t.ok(now() >= 0, 'should return a positive value');
  t.end();
});
