// var obj = {
//     name: 'Michele'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var person  = '{ "name":"Michele","age": 28 }';
// var personJson = JSON.parse(person);

// console.log(person);
// console.log("name: ",personJson.name," age: ",personJson.age);

const fs = require('fs');

var originalNote = {
    title : 'Some title',
    body : 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);