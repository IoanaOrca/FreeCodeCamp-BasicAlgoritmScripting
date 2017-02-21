
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str1=str.substr(-(target.length));
  return str1===target;
}

confirmEnding("Bastian", "n");
