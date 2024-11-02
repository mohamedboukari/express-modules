import Product from '../models/product.model.js';
export const getAllProducts = async () => {
    const products = await products.find().lean();
    return products;
};

export const getProductById = async (id) => {
    const product = await product.findById(id).lean();

    return product;
};

export const createProduct = async (productData) => {
    const newProduct = new Product(productData);
    const savedProduct = await newProduct.save();
    return savedProduct;
};

export const updateProduct = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
};

export const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};
