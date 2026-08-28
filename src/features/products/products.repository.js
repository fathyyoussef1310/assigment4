const pool = require('../../common/db');
const createProduct = async (product) => {
    const result = await pool.query(`INSERT INTO products (name , price , stock ,supplier_id)
         VALUES ($1 ,$2 , $3 ,$4)
         RETURNING *`,
        [
            product.name,
            product.price,
            product.stock,
            product.supplier_id
        ]
    );
    return result.rows[0];
}

const getProductById = async (productId) => {
    const result = await pool.query(
        `SELECT *  FROM products WHERE id = $1`,
        [productId]
    );
    return result.rows[0];
};

const getAllProducts = async (product) => {
    const result = await pool.query('SELECT * FROM products',);
    return result.rows;
}

const updateProduct = async (productId, product) => {
    const result = await pool.query(
        `UPDATE products SET name = $1,  price = $2, stock = $3,
             supplier_id = $4
         WHERE id = $5
         RETURNING *`,
        [
            product.name,
            product.price,
            product.stock,
            product.supplier_id,
            productId
        ]
    );

    return result.rows[0];
};

const deleteProduct = async (productId) => {
    const result = await pool.query('DELETE FROM products WHERE id = $1',[productId])
    return result.rows[0];
}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}