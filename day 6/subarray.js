var arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
var arr1 = [];
var n = 10; 
var k = 0;
function subarray(){
    
  for(var i = 0 ; i<n; i++)
  {
       var sum = 0;
      for(var j = i; j<n ; j++)
      {
          sum = sum +arr[j];
          if(sum == 0)
          {    
	      arr1[k] = i;
              arr1[k+1] = j;
              k = k+2;   
          }                                            	      
	  
      }  
  }    
     var p = 0;
          while(p<12)
          {     
          for(var j = arr1[p]; j<=arr1[p+1]; j++)
          {   
             console.log(arr[j]);
          }
          p = p+2;
          }
          

}

subarray();