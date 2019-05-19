const express = require("express");
const db = require("../db/database");
const Department = require("../domain/department");

const router = express.Router();

router.get("/", (req, res, next) => {

    db.query(Department.getDepartmentsSQL(), (err, data) => {
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

router.get("/:department_id", (req, res, next) => {
    var department_id = req.params.department_id;
    db.query(Department.getDepartmentByIDSQL(department_id), (err, data) => {
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

module.exports = router;