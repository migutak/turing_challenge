const express = require("express");
const db = require("../db/database");
const shipping = require("../domain/shipping");

const router = express.Router();

router.get("/", (req, res, next) => {

    db.query(shipping.getShippingRegionSQL(), (err, data) => {
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

router.get("/:shipping_region_id", (req, res, next) => {
    var shipping_region_id = req.params.shipping_region_id;
    db.query(shipping.getShippingByRegionSQL(shipping_region_id), (err, data) => {
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