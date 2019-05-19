class Tax {
    static getAllTaxesSQL() {
        let sql = `select * from tax`;
        return sql;           
    }

    static getTaxByIDSQL(tax_id) {
        let sql = `select * from tax where tax_id = ${tax_id}`;
        return sql;           
    }
}
module.exports = Tax;