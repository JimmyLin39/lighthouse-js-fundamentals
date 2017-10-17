function merge(array1, array2) {
  var mergeArray = array1;
  for (var i = 0; i < array2.length; i++) { //concat two arrays
    mergeArray.push(array2[i]);
  }

  //bubble sort
  for (var i = 0; i < mergeArray.length; i++) {
    for (var j = 1; j < mergeArray.length - i; j++) {
      if (mergeArray[j - 1] > mergeArray[j]){
        var temp = mergeArray[j];
        mergeArray [j] = mergeArray[j - 1];
        mergeArray [j - 1] = temp;
      }
    }
  }
  return mergeArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);