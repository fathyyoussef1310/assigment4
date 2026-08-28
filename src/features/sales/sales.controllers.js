const salesServices = require("./sales.services");

const createSale = async (req, res, next) => {
    try {
        const sale = await salesServices.createSale(req.body);

        if (!sale) {
            throw new Error("Error creating Sale");
        }

        res.status(201).json({
            status: "success",
            message: "Sale created successfully",
            data: sale,
        });
    } catch (error) {
        next(error);
    }
};

const getSales = async (req, res, next) => {
    try {
        const sales = await salesServices.getSales();

        return res.status(200).json({
            status: "success",
            data: sales,
        });
    } catch (error) {
        next(error);
    }
};

const getSalesByProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const sales = await salesServices.getSalesByProduct(productId);

        res.status(200).json({
            status: "success",
            data: sales,
        });
    } catch (error) {
        next(error);
    }
};
const getTotalQuantitySold = async (req, res, next) => {
    try {
        const sales = await salesServices.getTotalQuantitySold();
        res.status(200).json({
            status: "success",
            data: sales,
        })
    } catch (e){
        next(e);
    }
}

module.exports = {
    getSales,
    getSalesByProduct,
    createSale,
    getTotalQuantitySold
};