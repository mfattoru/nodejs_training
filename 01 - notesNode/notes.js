console.log('starting node.js');

// module.exports.addNote = function(){

// };

module.exports.addNote = () => {
    //arrow function doesn't ding the this keyword or
    //the arguments array
    console.log('addNode');
    return 'new note!';
};

module.exports.add = (a,b) =>{
    console.log('add');
    return a + b;
}