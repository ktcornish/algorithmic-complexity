describe('Timer', function () {
  var timer

  beforeEach(function () {
    timer = new Timer
  })

  // function popper(array) {
  //   return array.pop()
  // };

  it('it takes a function as an argumant and checks performance', function () {
    spyOn(performance, 'now')
    timer.timer(popper, [1, 2, 3, 4])
    expect(performance.now).toHaveBeenCalled()
  })
})
