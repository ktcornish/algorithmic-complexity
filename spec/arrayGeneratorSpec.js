describe('ArrayGenerator', function () {

    it('generates an array 5000 elements long', function () {
      expect(generateArray(5000).length).toEqual(5000)
    })

    it('generates an array 10000 elements long', function () {
      expect(generateArray(10000).length).toEqual(10000)
    })

    it('generates an array 10000000 elements long', function () {
      expect(generateArray(10000000).length).toEqual(10000000)
    })

})
