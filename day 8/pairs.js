/*
Find the pair/pairs of the elements which having the largest product.

Example: {1, 5, 6, -3, 10, -10}
So, largest product is 30 here and it should return
{5,6} and {-3, -10} */



arr = [1,5,6,-3,-10,10];
var k = 0;
var y = 0;
for(var i = 0; i<arr.length-1; i++)
{
    for(var j = i+1; j == i+1; j++)
    {
       k = arr[i]*arr[j];
       if(y == 0 || y>k )
        y =  k;
      if(k>y)
        console.log(arr[i],arr[j]);        
    } 
}