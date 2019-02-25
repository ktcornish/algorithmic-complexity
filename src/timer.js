function Timer () {
}

Timer.prototype.timer = function (func, array) {
  var t0 = performance.now()
  func(array)
  var t1 = performance.now()
  console.log(`${array.length} took ${t1 - t0} to execute`)
  return (t1 - t0)
};
