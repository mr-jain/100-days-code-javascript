//Convert an integer to binary number (number can be positive or negative)

var arr1 = [0,0,0,0,0,0,0,0];
var arr2 = [0,0,0,0,0,0,0,0];

var r1 = require('readline');
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter any number",function(n)
{
  var num = n;
for(var i = 7; n>0; i--)
{
   arr1[i] = n%2;
   n = parseInt(n/2);
}

for(var i =7; i >= 0; i--)
{
   if(arr1[i]==0)
      arr2[i] = 1;
   else
      arr2[i] = 0;
}
for(var i = 7; i >= 0; i--)
{
   if(arr2[i]==1)
      arr2[i] =0;
   else
     {
      arr2[i]= 1;
       break;
     }     
}
console.log(num,arr1);

console.log( -num , arr2);
});