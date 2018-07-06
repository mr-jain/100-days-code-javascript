function transpose(a) {
            	  var w = a.length || 0;
            	  var h = a[0] instanceof Array ? a[0].length : 0;
            	  var i, j, t = [];

            	  for(i=0; i<h; i++) {

                  	    t[i] = [];

            	    for(j=0; j<w; j++) {

            	    t[i][j] = a[j][i];
            	    }
            	  }

            	  return t;
            	}

            	console.log(transpose([[3,2,1],[6,5,4],[9,8,7]]));