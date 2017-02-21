function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  //arr=arr.filter(function(x){ if ((x!==false)&&(x!==null)&&(x!==0)&&(x!=="")&&(x!==undefined)&&(x!==NaN)) return x;})
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
