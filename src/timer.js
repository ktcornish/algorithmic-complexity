function Timer () {

}

Timer.prototype.timer = function (func, array) {
  var t0 = performance.now()
  func(array)
  var t1 = performance.now()
  console.log(`${func} took ${t1 - t0} to execute`)
};

Timer.prototype.timer(popper, [1, 2, 3, 4])
Timer.prototype.timer(reverser, [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, ,5 ,5 ,5 ])
