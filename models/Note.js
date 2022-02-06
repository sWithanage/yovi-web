const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Tile cannot be more than 40 char']
    },
    description: {
        type: String,
        required: [true, 'Please add a title'],
        maxlength: [200, 'Tile cannot be more than 200 char']
    }
})

module.exports = mongoose.models.Note ||  mongoose.model('Note', NoteSchema);