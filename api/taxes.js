const express = require("express");
const db = require("../db/database");
const Tax = require("../domain/tax");

const router = express.Router();

router.get("/", (req, res, next) => {

    db.query(Tax.getAllTaxesSQL(), (err, data) => {
        if (err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err
            });
        } else {
            var rows = data[0];
            res.send(rows)
        }
    });
});

router.get("/:tax_id", (req, res, next) => {
    var tax_id = req.params.tax_id;
    db.query(Tax.getTaxByIDSQL(tax_id), (err, data) => {
        if (err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err
            });
        } else {
            var rows = data[0];
            res.send(rows)
        }
    });
});

module.exports = router;