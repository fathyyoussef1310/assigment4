const suppliersController = require('./suppliers.controller');
const {Router} = require('express');
const suppliersRoutes = Router();

suppliersRoutes.post('/', suppliersController.createSupplier);
suppliersRoutes.get('/:id' , suppliersController.getSuppliersById)
suppliersRoutes.get('/' , suppliersController.getAllSuppliers)
suppliersRoutes.put('/:id' , suppliersController.updateSuppliers)
suppliersRoutes.delete('/:id' , suppliersController.deleteSuppliers)


module.exports = suppliersRoutes;