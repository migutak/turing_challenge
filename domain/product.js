class Product {

    getAddProductSQL(product_id,review,rating) {
        let sql = `insert into review(product_id, review, rating) \
                   values('${this.product_id}',${this.review}),${this.rating})`;
        return sql;           
    }

    static getProductByIdSQL(product_id) {
        let sql = `SELECT product_id,name,description,price,discounted_price,image,image_2,thumbnail,display from product where product_id = ${product_id}`;
        return sql;           
    }

    static getProductDetailsSQL(product_id) {
        let sql = `SELECT product_id,name,description,price,discounted_price,image,image_2 from product where product_id = ${product_id}`;
        return sql;           
    }

    static getProductLocationSQL(product_id) {
        let sql = `select pc.category_id,c.name category_name,d.department_id,d.name department_name from product p join product_category pc on p.product_id=pc.product_id join category c on c.category_id=pc.category_id 
        join department d on d.department_id=c.department_id where p.product_id = ${product_id}`;
        return sql;           
    }

    static getProductReviewSQL(product_id) {
        let sql = `select review,rating,created_on from review r left join product p on r.product_id=p.product_id where p.product_id = ${product_id}`;
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

    static getProductInCategorySQL(category_id,page,limit,description_length) {
        let sql = `select SQL_CALC_FOUND_ROWS * from Product p join product_category c on p.product_id=c.product_id where category_id = ${category_id}  and  char_length(description)<=${description_length} Limit ${limit}, ${page}`;
        return sql;           
    } 
}

// export default Product;
module.exports = Product;