function generateArray(length) {
  array = []
  for (var i = 0; i < length; i++) {
    array.push(Math.floor(Math.random()*101))
  }
  return array
}
