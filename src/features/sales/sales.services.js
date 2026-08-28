const salesRepository = require('../sales/sales.repository');
const createSale = async (sale) =>{
 return await  salesRepository.createSale(sale);
}

const getSales = async () => {
    return await salesRepository.getAllSales();
}

const getSalesByProduct = async (productId) => {
    return await salesRepository.getSalesByProduct(productId);
};
const  getTotalQuantitySold = async () => {
    return await salesRepository.getTotalQuantitySold();
}
module.exports = {
    getSales,
    getSalesByProduct,
    createSale,
    getTotalQuantitySold
}