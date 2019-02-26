function popper(array) {
  return array.pop()
};

function reverser(array) {
  return array.reverse()
};

function sorter(array) {
  return array.sort()
};

// function shuffler(array) {
//   var currentIndex = array.length, randomIndex;
//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     array[currentIndex], array[randomIndex] = array[randomIndex], array[currentIndex]
//   }
//   return array;
// }

function duplicatesWithSort(array) {
  array.sort()
  result = []
  while ( array.length != 0 ) {
    var count = 1
    var i = 0
    var j = 1
    while (array[i] === array[j]) {
      count += 1
      j += 1
    }
    for (var i = 0; i < count; i++) {
      if ( count > 1 ) { result.push(array[i]) }
    }
    array.splice(0, count)
  }
  return result
}

function duplicatesNoSort(array) {
  results = [];
  for (var i = 0; i <= array.length; i++) {
    for (var j = 0; j <= array.length; j++) {
      if (i != j && array[i] == array[j]) {
        results.push(array[j]);
        break;
      }
    }
  }
  return results;
}
