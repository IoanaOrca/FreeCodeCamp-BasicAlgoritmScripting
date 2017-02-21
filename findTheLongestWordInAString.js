function findLongetWord(str) {
  a=[];
  a=str.split(" ");
  var big=a[0];
  for (var i=1;i=a.length;i++) {
    if (big.length < a[i].length)
    big=a[i];
  }
return big.length;
}

findLongetWord("The quick brown cat jumped pver the lazy dog");
