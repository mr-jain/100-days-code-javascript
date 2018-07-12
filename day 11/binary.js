
var i , j , arr=[0,0,0,0,0,0,0,0];  
   function DecimalToBinary(n1)
   {  
     for(i=0;n1>0;i++)
      {
        arr[i]=n1%2;
        n1 = parseInt(n1/2);
      }
     arr.reverse();
     console.log(arr);
   }

DecimalToBinary(12); 