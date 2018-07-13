//Convert an integer to Octal Number. (positive integer only)

var arr = [0,0,0,0,0,0,0,0];
var r1 = require('readline');
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter any number : ",function(n)
{
for(var i = 7; n>0; i--)
{
   arr[i] = n%8;
   n = parseInt(n/8);  
}
console.log(arr);
process.exit();
});
