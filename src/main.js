require("dotenv").config();
const express = require('express');
const app = express();
const suppliersRoutes = require('../src/features/supliers/suppliers.routes');
const productsRoutes = require('../src/features/products/products.routes');
const salesRoutes = require('../src/features/sales/sales.routes');
app.use(express.json());
app.use('/products' , productsRoutes);
app.use('/suppliers',suppliersRoutes);
app.use('/sales',salesRoutes);




app.use((req, res) => {
    res.status(404).json({message: "invalid route", success: false})
});

app.use((error, req, res, next) => {
    res.json({message: error.message, success: false})
})

app.listen(3000, () => {
    console.log('https://localhost:3000');
})