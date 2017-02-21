function rot13(str) { // LBH QVQ VG!
  arr1=[];
  for (var i=0;i<str.length;i++){
    arr1.push(str.charCodeAt(i));
  }
   for (i=0;i<arr1.length;i++){
      {
       if (arr1[i]<65) {
         arr1[i]=String.fromCharCode(arr1[i]);
       } else if (arr1[i]<78) {
         arr1[i]=String.fromCharCode(arr1[i]+13);
       }else arr1[i]=String.fromCharCode(arr1[i]-13);
     }
   }
  str=arr1.join("");
  return str;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
