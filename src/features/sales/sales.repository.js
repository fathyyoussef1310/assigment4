const pool = require('../../common/db');

const createSale  = async (sale) =>{
    const { product_id, quantity_sold, sale_date } = sale;
    const result = await pool.query(
        `INSERT INTO sales (product_id, quantity_sold, sale_date) VALUES ($1, $2, $3) RETURNING *`,
        [product_id, quantity_sold, sale_date]
    );
    return result.rows;
}
const getAllSales = async () =>{
    const result =  await pool.query('SELECT * FROM sales ORDER BY id');
    return result.rows;
}

const getSalesByProduct = async (productId) => {
    const result = await pool.query(`SELECT * FROM sales
         WHERE product_id = $1
         ORDER BY id`,
        [productId]
    );
    return result.rows;
};
const getTotalQuantitySold = async () => {
    const result = await pool.query(`
        SELECT p.id, p.name, COALESCE(SUM(s.quantity_sold), 0) AS total_quantity_sold
        FROM products p
        LEFT JOIN sales s ON p.id = s.product_id
        GROUP BY p.id, p.name
        ORDER BY p.id
    `);

    return result.rows;
};

module.exports = {
    getAllSales,
    getSalesByProduct,
    createSale,
    getTotalQuantitySold
}