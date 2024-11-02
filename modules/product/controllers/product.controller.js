import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../services/product.service.js';

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createProductHandler = async (req, res) => {
    const productDTO = req.body;

    try {
        const product = await createProduct(productDTO);
        res.status(201).send(product);
    } catch (error) {
        console.log('Error creating product');

        res.status(400).json({ error: error.message });
    }
};

export const updateProductHandler = async (req, res) => {
    const productDTO = req.body;

    try {
        const product = await updateProduct(req.params.id, productDTO);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProductHandler = async (req, res) => {
    try {
        const product = await deleteProduct(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
