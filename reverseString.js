//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringInterative(str) {
  let i = str.length - 1;
  let newStr = "";
  console.log(i)
  while (i >= 0) {
    newStr += str[i];
    i--;
    console.log(newStr)
  }
  return newStr;
}

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

str2 = reverseStringInterative('yoyo mastery')
console.log(str2)
console.log("reversing 'mastery yoyo'");
str3 = reverseStringRecursive('mastery yoyo');
console.log(str3);
//should return: 'yretsam oyoy'