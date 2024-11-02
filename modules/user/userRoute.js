import express from 'express';
import {
    getUsersHandler,
    getUserHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
    getUserByNameHandler,
} from './controllers/user.controller.js';
import { validate } from '../../middleware/validate.js';

const userRoutes = express.Router();

userRoutes.get('/', getUsersHandler);
userRoutes.get('/:id', getUserHandler);
userRoutes.get('/:name', getUserByNameHandler);
userRoutes.post('/', validate, createUserHandler);
userRoutes.put('/:id', validate, updateUserHandler);
userRoutes.delete('/:id', deleteUserHandler);

export default userRoutes;
