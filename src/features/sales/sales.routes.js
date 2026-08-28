const {Router} = require('express');
salesRouter = Router();
const salesController = require('../sales/sales.controllers');

salesRouter.post('/',salesController.createSale);
salesRouter.get('/', salesController.getSales);
salesRouter.get('/product/:productId', salesController.getSalesByProduct);
salesRouter.get('/total-quantity',salesController.getTotalQuantitySold);
module.exports = salesRouter;


