const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeaderFooterSchema = new Schema ({
    header: {
        type: String,
        default: ''
    },
    footer: {
        type: String,
        default: ''
    },
    pageTitle: {
        type: String,
        default: ''
    },
    pageDescription: {
        type: String,
        default: ''
    },
    favicon: {
        type: String,
        default: ''
    }
},{
    timestamps: true
});

var HeaderFooter = mongoose.model('HeaderFooter', HeaderFooterSchema);

module.exports = HeaderFooter;