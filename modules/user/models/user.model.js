import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        cin: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', UserSchema);

export default User;
