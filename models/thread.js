const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        default: 'Other',
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Thread', threadSchema);