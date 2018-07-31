function diff_minutes(date2, date1) 
 {

  var diff =(date2.getTime() - date1.getTime()) / 1000;
  diff /= 60 *60;
  return Math.abs(Math.round(diff));
  
 }

date1 = new Date(2018,07,31);
date2 = new Date(2018,08,01);
console.log(diff_minutes(date1, date2));