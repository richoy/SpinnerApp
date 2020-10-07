const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultsSchema = new Schema ({
    emailAddress: {
        type: String,
        default: ''
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    result: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

var Results = mongoose.model('Result', ResultsSchema);

module.exports = Results;