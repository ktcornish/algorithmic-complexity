describe('Functions', function () {

  describe('popper', function() {
    it('it removes the last element of an array and returns that element', function () {
      expect(popper([2, 5, 6, 10, 1])).toEqual(1)
    })
  })

  describe('reverser', function() {
    it('it reverses the array and returns it', function () {
      expect(reverser([2, 5, 6, 10, 1])).toEqual([1, 10, 6, 5, 2])
    })
  })

})
