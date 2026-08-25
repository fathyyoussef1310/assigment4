const productsServices = require('./products.services');
const productsRepository = require("./products.repository");
const createProduct = async (req, res , next) =>
{
    try{
        const product = req.body;
        const result = await productsServices.createProduct(product);
        res.status(201).json({
            status: 'success',
            data: product,
        })
    }catch(err){
        res.status(400).json({
            message: err.message,
        })
    }
}
const getProductById = async (req, res , next) =>{
    try{
        const {id} = req.params;
        const result = await productsServices.getProductsById(id);
        res.status(200).json({
            status: 'success',
            message: 'Product found',
            data: result
        });
        return result[0];
    } catch(err) {
        next(err);
        res.status(400).json({
            message: err.message,
        })
    }
}

const getAllProducts = async (req, res , next) =>{
    const products = await  productsRepository.getAllProducts();
    res.status(200).json({
        status: 'success',
        data: products,
    })
}

const updateProduct = async (req, res , next) =>{
    try {
        const {id } = req.params;
        const product = req.body;
        const result = await productsRepository.updateProduct(id, product);
        res.status(200).json({
            status: 'success',
            data: result,
        })
    }catch(err){
        next(err);
    }
}
const deleteProduct = async (req, res , next) =>{
    try {
        const {id } = req.params;
        const result = await productsRepository.deleteProduct(id);
        res.status(200).json({
            status: 'success',
            message: 'Product deleted successfully',
        })
    }catch(err){
        next(err);
    }
}
module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
}