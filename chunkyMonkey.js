
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr1=[];
  index=0;
  while (index<arr.length) {
  arr1.push(arr.slice(index,size+index));
  index+=size;

  }
    return arr1;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
