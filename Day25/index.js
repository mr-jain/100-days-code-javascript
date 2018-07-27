console.log("starting app");

const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('akash'));
console.log(_.isDate(new Date));
console.log(_.isDate('Fri 27 July 2018'));
console.log(_.multiply(11 , 34));
console.log(_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
}));

var filterarray= _.uniq(['akash',1,'akash',1,2,3,4]);
console.log(filterarray);  
