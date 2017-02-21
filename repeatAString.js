
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num<=0) return "";
  /*for (var i=0;i<num;i++){
    str1+=str;
  }*/
  //return str1;
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
