import * as db from '../../config/db.js';

class UserProvider {
  async getAll() {
    return await db.getAllUsers();
  }

  async getById(id: string) {
    return await db.getUserById(id);
  }

  async create(data: any) {
    return await db.createUser(data);
  }

  async update(id: string, data: any) {
    return await db.updateUser(id, data);
  }

  async delete(id: string) {
    return await db.deleteUser(id);
  }
}

export default new UserProvider();