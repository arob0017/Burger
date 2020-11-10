const express = require("express");

const burger = require("../models/burger");
const router = express.Router();


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    console.log(req.body)
    burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
        res.json({ msg: "Burger created" })

    })
})
router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    burger.updateOne({ devoured: req.body.devoured }, condition, (result) => {
        res.json({ msg: "Burger updated" })
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

    });
});

router.delete("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    burger.delete(condition, (result) => {
        res.json({ msg: "Burger deleted" })
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;