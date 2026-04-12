import * as db from '../../config/db.js';

class UserProvider {
  async getAll() {
    return await db.getAllUsers();
  }

  async getById(id) {
    return await db.getUserById(id);
  }

  async create(data) {
    return await db.createUser(data);
  }

  async update(id, data) {
    return await db.updateUser(id, data);
  }

  async delete(id) {
    return await db.deleteUser(id);
  }
}

export default new UserProvider();