const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CenterImageSchema = new Schema ({
    centerImage: {
        type: String,
        default: ''
    }
},{
    timestamps: true
});

var CenterImage = mongoose.model('CenterImage', CenterImageSchema);

module.exports = CenterImage;