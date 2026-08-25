const pool = require('../../common/db');
const createSupplier = async (name,phone) => {
    const result = await pool.query(`INSERT INTO suppliers  (name ,phone)
         VALUES ($1 ,$2)
         RETURNING *`,
        [
            name , phone
        ]
    );
    return result.rows[0];
}

const getSuppliersById = async (supplierId) => {
    const result = await pool.query(
        `SELECT *  FROM suppliers WHERE id = $1`,
        [supplierId]
    );
    return result.rows[0];
};

const getAllSuppliers = async (supplier) => {
    const result = await pool.query('SELECT * FROM suppliers ',);
    return result.rows;
}
const updateSuppliers = async (supplierId, supplier) => {
    const result = await pool.query(
        `UPDATE suppliers
         SET name = $1,
             phone = $2
         WHERE id = $3
         RETURNING *`,
        [
            supplier.name,
            supplier.phone,
            supplierId
        ]
    );

    return result.rows[0];
};

const deleteSuppliers = async (supplierId) => {
    const result = await pool.query(
        `DELETE FROM suppliers
         WHERE id = $1
         RETURNING *`,
        [supplierId]
    );

    return result.rows[0];
};

module.exports = {
    createSupplier,
    getSuppliersById,
    getAllSuppliers,
    updateSuppliers,
    deleteSuppliers,
};