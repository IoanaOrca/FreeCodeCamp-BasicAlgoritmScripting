function factorialize(num) {
  var prod=1;
  for (var i=2;i<=num;i++) {
    prod*=i;
  }
  return prod;
}

factorialize(1);
