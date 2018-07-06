var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var i = 0;
var j = i+1;
var recursiveAsyncReadLine = function () {
var arr = [10,20,34,11,3,4,9,22,4,2];
    
    var res1 = 0;
    var res2 = 0;
  rl.question("sum of "+arr[i]+" and "+arr[j]+ "\n" , function (answer1) {
    res1 = arr[i]+arr[j];
    if (answer1 == res1)
    {
       console.log("right");
       i = i+1;
       if(i>9)
        return r1.close();
    }
    else
	{
	  console.log("please try again");
	}           
	//log('Got it! Your answer was: "', answer, '"');
    recursiveAsyncReadLine();
     
});
};

recursiveAsyncReadLine();