console.log('starting node.js'); 

module.exports.addNote = () => {
    //arrow function doesn't ding the this keyword or
    //the arguments array
    console.log('addNode');
    return 'new note!';
};
