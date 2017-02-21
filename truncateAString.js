
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length<=num) return str;
  if (num<=3) return str.slice(0,num)+"...";
  return str.slice(0,num-3)+"...";
}

truncateString("A-", 1);
