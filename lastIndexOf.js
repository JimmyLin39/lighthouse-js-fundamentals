//a function that given an array and a value
//returns the index of the last time the value occurs in the array
function lastIndexOf(array, num) {
  var lastIndex = -1; // last index of the value never occurs by defult
  for (var i = 0; i < array.length; i++) {
    if (array[i] === num){
      lastIndex = i; //lastIndex will keep updated while looping
    }
  }
  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);