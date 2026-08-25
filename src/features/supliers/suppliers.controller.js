const suppliersRepository = require('./suppliers.repository');

const createSupplier = async (req, res, next) => {
    try {
        const { name, phone } = req.body;
        const result = await suppliersRepository.createSupplier(name, phone);
        res.status(201).json({
            status: 'success',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const getSuppliersById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await suppliersRepository.getSuppliersById(id);
        if (!result) {
            return res.status(404).json({
                status: 'fail',
                message: 'Supplier not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const getAllSuppliers = async (req, res, next) => {
    try {
        const suppliers = await suppliersRepository.getAllSuppliers();

        res.status(200).json({
            status: 'success',
            data: suppliers,
        });
    } catch (err) {
        next(err);
    }
};

const updateSuppliers = async (req, res, next) => {
    try {
        const { id } = req.params;
        const supplier = req.body;

        const result = await suppliersRepository.updateSuppliers(
            id,
            supplier
        );

        res.status(200).json({
            status: 'success',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const deleteSuppliers = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await suppliersRepository.deleteSuppliers(id);

        res.status(200).json({
            status: 'success',
            message: 'Supplier deleted successfully',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllSuppliers,
    createSupplier,
    getSuppliersById,
    updateSuppliers,
    deleteSuppliers,
};