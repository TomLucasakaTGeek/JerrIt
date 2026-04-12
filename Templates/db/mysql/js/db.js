import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

export const connectDB = async () => {
  try {
    await pool.getConnection();
    console.log('MySQL connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// CRUD

export const getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};

export const getUserById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM users WHERE id = ?',
    [id]
  );
  return rows[0];
};

export const createUser = async ({ name, email, password }) => {
  const [result] = await pool.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );

  return getUserById(result.insertId);
};

export const updateUser = async (id, data) => {
  await pool.query(
    'UPDATE users SET name=?, email=?, password=? WHERE id=?',
    [data.name, data.email, data.password, id]
  );

  return getUserById(id);
};

export const deleteUser = async (id) => {
  await pool.query('DELETE FROM users WHERE id=?', [id]);
};