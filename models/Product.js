const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema ({
    name: String,
    qty: {type: Number, min: 1},
    notes: String,
    home: {type: Boolean, default: false},
    delete: {type: Boolean, default: false},
    fav: {type: Boolean, default: false},
    buy: {type: Boolean, default: true},
});

module.exports = mongoose.model('Product', ProductSchema) 