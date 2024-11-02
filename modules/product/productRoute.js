import express from 'express';
import {
    getProducts,
    getProduct,
    createProductHandler,
    updateProductHandler,
    deleteProductHandler,
} from './controllers/product.controller.js';

const productRoutes = express.Router();

productRoutes.get('/', getProducts);
productRoutes.get('/:id', getProduct);
productRoutes.post('/', createProductHandler);
productRoutes.put('/:id', updateProductHandler);
productRoutes.delete('/:id', deleteProductHandler);

export default productRoutes;
