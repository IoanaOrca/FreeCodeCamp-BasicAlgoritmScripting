function largestOfFour(arr) {
  // You can do this!
  for (var i=0;i<arr.length;i++) {
    arr[i]=arr[i].reduce(function(prev,cur){
       return prev > cur ? prev : cur;
    },0);
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1],[45,67,89,23],[100,78,67,56]]);
