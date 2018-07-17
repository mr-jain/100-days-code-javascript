//Program to find the occurence of character in  a given string.
var s = 0;
function char_frequency(str)
  {
    var count = {};
      str.split('').forEach(function(s) 
        {
        count[s] = count[s] ? count[s]+1 : 1;
         });
    console.log(count);
  }
char_frequency("aaahhabbjkjjkkl");
