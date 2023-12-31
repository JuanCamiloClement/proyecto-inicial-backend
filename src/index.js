require('dotenv').config();
const express = require('express');
const cors = require('cors');

const {
    handleCreateProduct,
    handleReadAll,
    handleReadById,
    handleUpdateProduct,
    handleDeleteProduct
} = require('./controller');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/healthcheck',(_,res) => {
    res.status(200).send('OK');
});

app.post('/products',handleCreateProduct);

app.get('/products',handleReadAll);

app.get('/products/:id',handleReadById);

app.put('/products/:id',handleUpdateProduct);

app.delete('/products/:id',handleDeleteProduct);

app.listen(PORT,() => {
    console.log(`Successfully running at http://localhost:${PORT}`)
});