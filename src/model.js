const table = require("@makeitrealcamp/db-mock");

const createProduct = (data) => {
    const newProduct = table.insert(data);
    return newProduct;
}

const readAll = () => {
    const allProducts = table.findAll();
    return allProducts;
}

const readById = (data) => {
    const singleProduct = table.findById(data);
    return singleProduct;
}

const updateProduct = (body,id) => {
    const editedProduct = table.update({ ...body,id });
    return editedProduct;
}

const deleteProduct = (data) => {
    table.remove(data);
}

module.exports = {
    createProduct,
    readAll,
    readById,
    updateProduct,
    deleteProduct
}