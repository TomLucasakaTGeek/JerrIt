import userProvider from './user.provider.js';

export const getUsers = async () => {
  return await userProvider.getAll();
};

export const getUserById = async (id: string) => {
  return await userProvider.getById(id);
};

export const createUser = async (data: any) => {
  return await userProvider.create(data);
};

export const updateUser = async (id: string, data: any) => {
  return await userProvider.update(id, data);
};

export const deleteUser = async (id: string) => {
  return await userProvider.delete(id);
};