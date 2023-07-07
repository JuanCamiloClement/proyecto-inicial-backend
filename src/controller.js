const {
    createProduct,
    readAll,
    readById,
    updateProduct,
    deleteProduct
} = require('./model');

const handleCreateProduct = (req,res) => {
    try {
        const { body } = req;
        const response = createProduct(body);
        res.status(200).json({ message: 'Product added successfully', data: response });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

const handleReadAll = (_,res) => {
    try {
        const response = readAll();
        res.status(200).json({ message: 'All products found successfully', data: response });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

const handleReadById = (req,res) => {
    try {
        const { id } = req.params;
        const response = readById(id);
        res.status(200).json({ message: 'Single product found successfully', data: response });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

const handleUpdateProduct = (req,res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const response = updateProduct(body,id);
        res.status(200).json({ message: 'Product updated successfully', data: response });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

const handleDeleteProduct = (req,res) => {
    try {
        const { id } = req.params;
        deleteProduct(id);
        res.status(200).json({ message: 'The product was deleted' });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    handleCreateProduct,
    handleReadAll,
    handleReadById,
    handleUpdateProduct,
    handleDeleteProduct
}