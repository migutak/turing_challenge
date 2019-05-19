class Order {
    static addOrderSQL(total_amount,created_on,shipped_on,status,comments,customer_id,auth_code,reference,shipping_id,tax_id) {
        let sql = `insert into orders(total_amount,created_on,shipped_on,status,comments,customer_id,auth_code,reference,shipping_id,tax_id) values(${total_amount},${created_on},${shipped_on},${status},${comments},${customer_id},${auth_code},${reference},${shipping_id},${tax_id})`;
        return sql;           
    }

    static getOrderByIDSQL(order_id) {
        let sql = `select total_amount,created_on,shipped_on,status,comments,customer_id,auth_code,reference,shipping_id,tax_id from orders where order_id = ${order_id}`;
        return sql;           
    }

    static getOrdersInCustomerSQL(order_id) {
        let sql = `select order_id, total_amount,created_on,shipped_on,status,comments,customer_id,auth_code,reference,shipping_id,tax_id from orders o join customer c on c.customer_id=o.customer_id`;
        return sql;           
    }
}
module.exports = Order;