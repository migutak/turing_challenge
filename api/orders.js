const express = require("express");
const db = require("../db/database");
const Order = require("../domain/order");
const router = express.Router();

router.post("/", (req, res, next) => {
    const total_amount = req.body.total_amount,
        created_on = req.body.created_on,
        shipped_on = req.body.shipped_on,
        status = req.body.status,
        comments = req.body.comments,
        customer_id = req.body.customer_id,
        auth_code = req.body.auth_code,
        reference = req.body.reference,
        shipping_id = req.body.shipping_id,
        tax_id = req.body.tax_id
    db.query(Order.addOrderSQL(total_amount,created_on,shipped_on,status,comments,customer_id,auth_code,reference,shipping_id,tax_id), (err, data) => {
        if(err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err
            });
        } else {
            res.status(200).json({
                orderId: data.order_id
            });
        }
    });
});

router.get("/:order_id", (req, res, next) => {
    var order_id = req.params.order_id;
    db.query(Order.getOrderByIDSQL(order_id),(err, data)=>{
        if(err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err
            });
        } else {
            res.status(200).json({
                data:data
            });
        }
    })
    
});

router.get("/InCustomer", (req, res, next) => {
    db.query(Order.getOrdersInCustomerSQL(),(err, data)=>{
        if(err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err
            });
        } else {
            res.status(200).json({
                data:data
            });
        }
    })
    
});

module.exports = router;