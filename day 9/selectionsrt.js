//Program of Selection Sort

var arr = [5,11,7,2,12,3,9,8];
var small = 0;
var temp_index = 0;
console.log(arr);
for(var j = 0; j<arr.length-1; j++)
{ 
if(arr[j]>arr[j+1])
  {
   small = arr[j+1];
   temp_index = j+1;
  }   
else 
  {
   small = arr[j];
   temp_index = j;
  }
    
for(var i = j+2; i<arr.length; i++)
{
    if(small > arr[i])
     {
        small = arr[i];
        temp_index = i;
     }        
}
    arr[temp_index] = arr[j];
    arr[j] = small;
} 
    console.log(arr);
 
