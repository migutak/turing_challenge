class Product {
    
    constructor(name,price) {
        this.prd_id=0;
        this.prd_name=name;
        this.prd_price=price;
    }

    getAddProductSQL() {
        let sql = `INSERT INTO PRODUCTS(prd_name, prd_price) \
                   VALUES('${this.prd_name}',${this.prd_price})`;
        return sql;           
    }

    static getProductByIdSQL(prd_id) {
        let sql = `SELECT * FROM PRODUCTS WHERE PRD_ID = ${prd_id}`;
        return sql;           
    }

    static deleteProductByIdSQL(prd_id) {
        let sql = `DELETE FROM PRODUCTS WHERE PRD_ID = ${prd_id}`;
        return sql;           
    }

    static getAllProductSQL(page, limit, description_length) {
        let sql = `SELECT SQL_CALC_FOUND_ROWS * FROM PRODUCT where char_length(description)<=${description_length} Limit ${limit}, ${page}`;
        return sql;           
    }   
    
    static getAllProductSearchSQL(string,all_words,page,limit,description_length) {
        let sql = `SELECT SQL_CALC_FOUND_ROWS * FROM PRODUCT where name = ${string}  and  char_length(description)<=${description_length} Limit ${limit}, ${page}`;
        return sql;           
    } 
}

// export default Product;
module.exports = Product;