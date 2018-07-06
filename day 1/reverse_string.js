function reverse(str) {
  var chars = str.split("");
  var length = chars.length;
  var half = length / 2;
  for (var ii = 0; ii < half; ii++) {
    var temp = chars[ii];
    var mirror = length - ii - 1;
    chars[ii] = chars[mirror];
    chars[mirror] = temp;
  }
  return chars.join("");
}
console.log(reverse("abcd"));