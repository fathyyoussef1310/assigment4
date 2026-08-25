const {Router}  = require('express');
const ProductController = require('./products.controller')
const productsRouter = new Router();
productsRouter.post('/' , ProductController.createProduct)
productsRouter.get('/:id' , ProductController.getProductById)
productsRouter.get('/' , ProductController.getAllProducts)
productsRouter.put('/:id' , ProductController.updateProduct)
productsRouter.delete('/:id' , ProductController.deleteProduct)
module.exports = productsRouter;