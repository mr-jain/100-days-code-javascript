arr = [3,0,1,0,5,9,0,6,7];
n = 9;
count = 0;
for(var i  = 0; i < arr.length;i++)
{
     if(arr[i]==0)
     {
       count++;
     }
}
for(var i = 0; i<9;i++)
{
     for(var j = 0; j<9; j++)
     {
         if(arr[j]==0)
         { 
           for(var k = j; k<9; k++)
           {
           arr[k] = arr[k+1];
           }
         }
       
     }
    for(var i = 1; i<=count; i++)
    {
        arr[n-i] = 0;
    }
   
    for(var i = 0; i<9;i++)
    {
       console.log(arr[i]);
    }


}