function palindrome(str) {
  // Good luck!

  str=str.replace(/\W/g,"");
  str=str.replace(/\_/g,"");
  str=str.toLowerCase();
  str1=str.split("").reverse().join("");
  return str===str1;

}



palindrome("A man, a plan, a canal. Panama");
