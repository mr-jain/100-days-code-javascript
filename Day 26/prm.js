var r1 = require('readline');
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter range", function(range)
{
 console.log(1);
for(var i = 2; i<=range; i++)
{
    var flag = 1;
    for(var j = 2; j<i; j++)
     {
        if(i%j==0)
         flag = 0;
     }   
	if(flag == 1)
          console.log(i);
}
process.exit();
});