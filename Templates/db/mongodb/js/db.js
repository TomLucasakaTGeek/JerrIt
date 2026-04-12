import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

// CRUD

export const getAllUsers = async () => User.find();

export const getUserById = async (id) => User.findById(id);

export const createUser = async (data) => User.create(data);

export const updateUser = async (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true });

export const deleteUser = async (id) =>
  User.findByIdAndDelete(id);