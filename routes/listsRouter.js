const express = require("express");
const router = express.Router();
const List = require('../models/List');

router.get("/", (req,res) => {
    List.find({})
    .then(list => 
        res.send(list)
        )
})

router.post("/", (req,res) => {
    let list = new List();
    list.address = req.body.address
    list.expiryDate = req.body.expiryDate
    list.qty = req.body.qty
    list.notes = req.body.notes
    list.save()
    .then ( list => {
        res.send(list)
    })
})

router.put("/:id", (req,res) => {
    List.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(data => res.send(data))
})
router.delete("/:id", (req,res) => {
    List.findOneAndDelete({_id: req.params.id})
        .then( data => res.send(data))
})


module.exports = router;