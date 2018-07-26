console.log("starting node_module.js");
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);
console.log('Result: ', notes.add(9,-3));

var user  = os.userInfo();
fs.appendFileSync('message.txt', ' hello '+user.username+' you are '+ notes.age);