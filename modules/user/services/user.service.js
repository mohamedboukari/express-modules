import User from '../models/user.model.js';
export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

export const getUserById = async (id) => {
    const user = await User.findById(id).lean();
    return user;
};
export const getUserByName = async (name) => {
    const user = await User.findOne({ name }).lean();
    return user;
};

export const createUser = async (userData) => {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
};

export const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};
