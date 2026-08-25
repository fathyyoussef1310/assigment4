const productsRepository = require("./products.repository");

const createProduct =async (product) => {
      product = await  productsRepository.createProduct(product);
     return product[0];
}

const getProductsById = async (productId) => {
    const product = await  productsRepository.getProductById(productId);
    if (!product) {
        throw  new Error(`Product with id ${productId} not found`);
    }
    return product;
}

const getAllProducts = async (product) => {
    const products = await  productsRepository.getAllProducts(product);
    return product.getAllProducts;
}

const updateProduct = async ( productId,product) => {
    return productsRepository.updateProduct(productId,product);
}
const deleteProduct = async (productId) => {
    return productsRepository.deleteProduct(productId);
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductsById,
    updateProduct,
}

