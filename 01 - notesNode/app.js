console.log('starting app.js!');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


// console.log(_.isString(123));
// console.log(_.isString('this is a string'));

var filteredArray = _.uniq(['michele',1,'michele',1,2,3,4]);
console.log(filteredArray);
// var user = os.userInfo();

// fs.appendFile('greetings.txt','Hello '+user.username+'!',function(err){
//     if(err){
//         console.log('unable to write to file');
//     }
// });

// fs.appendFile('greetings.txt',`Hello ${user.username}! you are ${notes.age}.\n`,function(err){
//     if(err){
//         console.log('unable to write to file');
//     }
// });

// var res = notes.addNote();
// console.log(res);

// res = notes.add(3,4);
// console.log('Result: ',res);