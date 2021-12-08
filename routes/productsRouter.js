const express = require("express");
const router = express.Router();
const Product = require('../models/Product');

router.get("/", (req,res) => {
    Product.find({})
    .then(product => 
        res.send(product)
        )
})

router.post("/", (req,res) => {
    let product = new Product(req.body);
    product.save()
    .then ( product => {
        res.send(product)
    })
})

router.put("/:id", (req,res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(data => res.send(data))
})
router.delete("/:id", (req,res) => {
    Product.findOneAndDelete({_id: req.params.id})
        .then( data => res.send(data))
})


module.exports = router;