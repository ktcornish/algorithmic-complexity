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

  describe('sorter', function() {
    it('it sorts the array and returns it', function () {
      expect(sorter([2, 5, 6, 10, 1])).toEqual([1, 10, 2, 5, 6])
    })
  })

  // describe('shuffler', function() {
  //   it('it shuffles the array and returns it', function () {
  //     expect(shuffler([2, 5, 6, 10, 1])).not.toEqual([2, 5, 6, 10, 1])
  //   })
  // })

  describe('duplicates', function() {
    it('it returns duplicates when there is one set of duplicates', function () {
      expect(duplicates([2, 5, 2, 10, 1])).toEqual([2, 2])
    })

    it('it returns duplicates when there is two sets of duplicates', function () {
      expect(duplicates([2, 5, 2, 10, 10, 1, 10])).toEqual([10, 10, 10, 2, 2])
    })

    it('it returns an empty array when there are no duplicates', function () {
      expect(duplicates([2, 5, 10, 100, 1, 11])).toEqual([])
    })
  })
})
