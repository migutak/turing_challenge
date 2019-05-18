const express = require("express");
const db = require("../db/database");
const Product = require("../domain/product");

const router = express.Router();

router.get("/", (req, res, next) => {
    const page = req.query.page,
        limit = req.query.limit,
        description_length = req.query.description_length;

    db.query(Product.getAllProductSQL(page, limit, description_length), (err, data) => {
        if (err) {
            //If there is error, we send the error in the error section with 500 status
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err,
                field: "",
            });
        } else {
            var rows = data;
            db.query("SELECT count(*) count from product", function (err, result) {
                if (err) {
                    //If there is error, we send the error in the error section with 500 status
                    res.status(500).json({
                        status: 500,
                        code: "USR_02",
                        message: err,
                        field: "",
                    });
                } else {
                    //If there is no error, all is good and response is 200OK.
                    res.status(200).json({
                        count: result[0].count,
                        rows: rows
                    });
                }
            })

        }
    });
});

router.get("/:product_id", (req, res, next) => {
    const product_id = req.params.product_id

    db.query(Product.getProductByIdSQL(product_id), (err, data) => {
        if (err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err,
                field: "",
            });
        } else {
            var rows = data[0];
            res.send(rows)
        }
    });
});

router.get("/search", (req, res, next) => {
    const page = req.query.page,
        limit = req.query.limit,
        description_length = req.query.description_length;

    db.query(Product.getAllProductSearchSQL(string, all_words, page, limit, description_length), (err, data) => {
        if (err) {
            //If there is error, we send the error in the error section with 500 status
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err,
                field: "",
            });
        } else {
            var rows = data;
            db.query("SELECT count(*) count from product", function (err, result) {
                if (err) {
                    //If there is error, we send the error in the error section with 500 status
                    res.status(500).json({
                        status: 500,
                        code: "USR_02",
                        message: err,
                        field: "",
                    });
                } else {
                    //If there is no error, all is good and response is 200OK.
                    res.status(200).json({
                        count: result[0].count,
                        rows: rows
                    });
                }
            })

        }
    });
});

router.get("/InCategory/:category_id", (req, res, next) => {
    const page = req.query.page,
        limit = req.query.limit,
        description_length = req.query.description_length,
        category_id = req.params.category_id;

    db.query(Product.getProductInCategorySQL(category_id, page, limit, description_length), (err, data) => {
        if (err) {
            //If there is error, we send the error in the error section with 500 status
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err
            });
        } else {
            var rows = data;
            db.query("select count(*) count from product p join product_category c on p.product_id=c.product_id", function (err, result) {
                if (err) {
                    //If there is error, we send the error in the error section with 500 status
                    res.status(500).json({
                        status: 500,
                        code: "USR_02",
                        message: err,
                        field: "",
                    });
                } else {
                    //If there is no error, all is good and response is 200OK.
                    res.status(200).json({
                        count: result[0].count,
                        rows: rows
                    });
                }
            })

        }
    });
});

router.get("/:product_id/details", (req, res, next) => {
    const product_id = req.params.product_id

    db.query(Product.getProductDetailsSQL(product_id), (err, data) => {
        if (err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err,
                field: "",
            });
        } else {
            var rows = data[0];
            res.send(rows)
        }
    });
});

router.get("/:product_id/locations", (req, res, next) => {
    const product_id = req.params.product_id

    db.query(Product.getProductLocationSQL(product_id), (err, data) => {
        if (err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err,
                field: "",
            });
        } else {
            var rows = data[0];
            res.send(rows)
        }
    });
});

router.get("/:product_id/reviews", (req, res, next) => {
    const product_id = req.params.product_id

    db.query(Product.getProductLocationSQL(product_id), (err, data) => {
        if (err) {
            res.status(500).json({
                status: 500,
                code: "USR_02",
                message: err,
                field: "",
            });
        } else {
            var rows = data[0];
            res.send(rows)
        }
    });
});

router.post("/:product_id/reviews", (req, res, next) => {
    const product_id=req.body.product_id,review=req.body.product_id,rating = req.body.rating
    db.query(product.getAddReviewSQL(product_id,review,rating), (err, data) => {
        res.status(200).json({
            message: "Review added.",
            productId: data.insertId
        });
    });
});

router.get("/:productId", (req, res, next) => {
    let pid = req.params.productId;

    db.query(Product.getProductByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.length > 0) {

                res.status(200).json({
                    message: "Product found.",
                    product: data
                });
            } else {
                res.status(200).json({
                    message: "Product Not found."
                });
            }
        }
    });
});

router.post("/delete", (req, res, next) => {

    var pid = req.body.productId;

    db.query(Product.deleteProductByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.affectedRows > 0) {
                res.status(200).json({
                    message: `Product deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message: "Product Not found."
                });
            }
        }
    });
});

module.exports = router;