const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReminderSchema = new Schema ({
    reminderMsg: String,
    remindAt: String,
    isReminded: Boolean 
});

module.exports = mongoose.model('Reminder', ReminderSchema)