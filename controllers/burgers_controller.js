const express = require("express");

const burger = require("../models/burger");
const router = express.Router();


router.post("/api/burgers", (req, res) => {
    console.log(req.body)
    burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
        res.json({ msg: "Burger created" })

    })
})
router.put("/api/burgers/:id", (req, res) => {
    burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
        res.json({ msg: "Burger created" })

    })
})
router.delete("/api/burgers/:id", (req, res) => {
    burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
        res.json({ msg: "Burger created" })

    })
})

module.exports = router;