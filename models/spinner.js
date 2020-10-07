const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpinnerSchema = new Schema ({
    isItImage: {
        type: Boolean,
        default: false
    },
    textFieldOne: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    percentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    isItEmail: {
        type: Boolean,
        default: false
    },
    textPopUp: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    textFieldTwo: {
        type: String,
        default: ''
    },
    bgColor: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

var Spinners = mongoose.model('Spinner', SpinnerSchema);

module.exports = Spinners;