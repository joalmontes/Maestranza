const express = require('express');
const upload = require('../libs/storage');
const { addProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productControllers')
const router = express.Router();
const nodemailer = require('nodemailer');



router.post('/products', upload.single('image'), addProduct);

router.delete('/products/:id', deleteProduct);

router.put('/products/:id', updateProduct);

router.get('/products', getProducts);

module.exports = router;
