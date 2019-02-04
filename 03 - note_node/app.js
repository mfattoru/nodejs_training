const fs = require('fs');
const _ = require('lodash');
// process.argument parser
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOpt = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
}

const bodyOpt = {
    describe: 'Content of the note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add','Add a new note',{
        title: titleOpt,
        body: bodyOpt
    })
    .command('list','List all the notes')
    .command('read','Read a note',{
        title: titleOpt
    })
    .command('remove', 'Remove a note',{
        title: titleOpt
    })
    .help()
    .argv;
var command = argv._[0];

// console.log('command: ',command)

if (command === 'add') {
    var note = notes.addNote(argv.title,argv.body);
    if( note ){
        console.log('Note Created');
        notes.logNote(note)
    } else{
        console.log('A note with the same name already exists');
    }
} else if(command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(element => {
        notes.logNote(element);        
    });
} else if(command === 'read') {
    var note = notes.getNote(argv.title);
    if ( note ){
        console.log('Note Found');
        notes.logNote(note)
    }else{
        console.log('Note not found');
    }
} else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('command not found');
}

