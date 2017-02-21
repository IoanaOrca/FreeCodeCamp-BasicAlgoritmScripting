
function mutation(arr) {
 var word=arr[0].toLowerCase();
 var element=arr[1].toLowerCase();
  for ( var i=0;i<element.length;i++){
    if ( word.indexOf(element[i])<0)
      return false;
  }

  return true;
}

mutation(["hello", "neo"]);
