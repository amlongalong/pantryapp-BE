const express = require("express");
const router = express.Router();
const Reminder = require('../models/Reminder');

router.get("/", (req,res) => {
    Reminder.find({})
    .then(reminder => 
        res.send(reminder)
        )
})
router.post("/", (req,res) => {
    let reminder = new Reminder(req.body);
    reminder.save()
    .then ( reminder => {
        res.send(reminder)
    })
})

router.put("/:id", (req,res) => {
    Reminder.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(data => res.send(data))
})
router.delete("/:id", (req,res) => {
    Reminder.findOneAndDelete({_id: req.params.id})
        .then( data => res.send(data))
})


module.exports = router;