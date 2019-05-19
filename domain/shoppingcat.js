class Shoppingcat {
    static getDepartmentsSQL() {
        let sql = `select * from department`;
        return sql;           
    }

    static getDepartmentByIDSQL(department_id) {
        let sql = `select * from department where department_id = ${department_id}`;
        return sql;           
    }
}
module.exports = Shoppingcat;