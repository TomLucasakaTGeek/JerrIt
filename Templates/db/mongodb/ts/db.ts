import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: String,
    email: String,
    password: String
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', userSchema);

// CRUD

export const getAllUsers = async () => User.find();

export const getUserById = async (id: string) =>
  User.findById(id);

export const createUser = async (data: IUser) =>
  User.create(data);

export const updateUser = async (
  id: string,
  data: Partial<IUser>
) =>
  User.findByIdAndUpdate(id, data, { new: true });

export const deleteUser = async (id: string) =>
  User.findByIdAndDelete(id);