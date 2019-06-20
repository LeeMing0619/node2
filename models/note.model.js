routes = require('./routes');
const mongoose = require('mongodb');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);