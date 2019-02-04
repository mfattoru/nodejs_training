const fs = require('fs');

// read the data fro file and update the note array
var fetchNotes = () => {
    
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (e){
        return [];
    }
};


var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};


var addNote = (title,body) =>{
    notes = fetchNotes();
    note = {
        title,
        body
    };

    //will store the notes that are duplicate of our new note
    var duplicateNotes = notes.filter( (note) => {
        return note.title === title; //returns true if the titles are equal
    });
    //we can rewrite the filter function as:
    // var duplicateNotes = notes.filter( (note) =>  note.title === title); 

    //if we don't have any note that is duplicate, then we can add it and write it on file
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) =>{
    var notes = fetchNotes();

    var foundNote = notes.filter((note) => {
        return note.title === title;
    });

    return foundNote[0];
};

var removeNote = (title) =>{
    notes = fetchNotes();
    // var goodNotes = notes.filter((note) => note.title !== title);
    var goodNotes = notes.filter( (note) => {
        return note.title !== title; //returns true if the titles are equal
    });

    saveNotes(goodNotes);
    
    if(notes.length !== goodNotes.length){
        return true;
    }else{
        return false;
    }
};

var logNote = (note) =>{
    console.log('-----------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    // addNote: addNote, this is the same as the line below, when key and value are the same
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
