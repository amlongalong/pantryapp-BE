const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ListSchema = new Schema ({
    name: String,
    qty: {type: Number, min: 1},
    expiryDate: String,
    notes: String,
    home: {type: Boolean, default: true},
    delete: {type: Boolean, default: false},
    fav: {type: Boolean, default: false},
    buy: {type: Boolean, default: false},
});

module.exports = mongoose.model('List', ListSchema) 