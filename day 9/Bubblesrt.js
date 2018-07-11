var arr = [9,2,4,11,33,10,6];
var temp;
console.log(arr);
function BubbleSort()
{
   for(var i = 0 ; i<arr.length-1; i++)
   { 
      var swap = false;
      for(var j = 0; j<arr.length-i-1; j++)
      { 
         if(arr[j]>arr[j+1])
         {
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]  = temp;
            swap = true;
         }
      }
   }
   
   if(swap == false)
   console.log(arr);
}
