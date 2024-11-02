import express from 'express';
import userRoutes from '../modules/user/userRoute.js';
import productRoutes from '../modules/product/productRoute.js';
import chatRoutes from './view/chat.js';

const router = express.Router();

router.use('/api/users', userRoutes);
router.use('/api/products', productRoutes);
router.use('/chat', chatRoutes);

export default router;
