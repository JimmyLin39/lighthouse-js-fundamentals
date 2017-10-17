function range(start, end, step){
  if (start < end && step > 0){
    var array = [];
    while (start <= end){
      array.push(start);
      //console.log(array);
      start = start + step;
    }
    return array;
  }else{
    return [];
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));