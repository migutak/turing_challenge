class Shipping {
    static getShippingRegionSQL() {
        let sql = `select s.shipping_region_id,r.shipping_region from shipping s join shipping_region r on s.shipping_region_id=r.shipping_region_id`;
        return sql;           
    }

    static getShippingByRegionSQL(shipping_region_id) {
        let sql = `select s.shipping_id,s.shipping_type,s.shipping_cost,s.shipping_region_id,r.shipping_region from shipping s join shipping_region r on s.shipping_region_id=r.shipping_region_id where shipping_region_id = ${shipping_region_id}`;
        return sql; 
    }
}
module.exports = Shipping;