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

// function duplicates(array) {
//   testArray = array
//   result = []
//   value = null
//   count = 0
//   for (var i = 0; i < testArray.length; i++) {
//     value = testArray[i]
//     for (var j = 0; j < array.length; j++) {
//       if (value === array[j]) {
//         count += 1
//         array.splice(j, 1)
//       }
//     }
//     for (var i = 0; i < count; i++) {
//       if ( count > 1 ) { result.push(value) }
//     }
//   }
//   return result
// }
//2
function duplicates(array) {
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



  // var results, arr= [9, 9, 111, 2, 3, 4, 4, 5, 4, 7];
  //
  // if(arr.filter){
  //     results= arr.filter(function(itm, i){
  //         return arr.lastIndexOf(itm)== i && arr.indexOf(itm)!= i;
  //     });
  // }
