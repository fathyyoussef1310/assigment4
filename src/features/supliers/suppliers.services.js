const suppliersRepository = require('./suppliers.repository');

const create = async ({ name, phone }) => {
    return await suppliersRepository.createSupplier({
        name,
        phone
    });
};

const getSuppliersById = async (supplierId) => {
    return await suppliersRepository.getSuppliersById(supplierId);
};

const getAllSuppliers = async () => {
    return await suppliersRepository.getAllSuppliers();
};

const updateSuppliers = async (supplierId, supplier) => {
    return await suppliersRepository.updateSuppliers(
        supplierId,
        supplier
    );
};

const deleteSuppliers = async (supplierId) => {
    return await suppliersRepository.deleteSuppliers(supplierId);
};

module.exports = {
    create,
    getSuppliersById,
    getAllSuppliers,
    updateSuppliers,
    deleteSuppliers,
};