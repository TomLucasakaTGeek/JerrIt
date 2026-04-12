import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

export const connectDB = async (): Promise<void> => {
  try {
    await pool.getConnection();
    console.log('MySQL connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

// CRUD

export const getAllUsers = async (): Promise<User[]> => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows as User[];
};

export const getUserById = async (
  id: number
): Promise<User | undefined> => {
  const [rows] = await pool.query(
    'SELECT * FROM users WHERE id = ?',
    [id]
  );
  return (rows as User[])[0];
};

export const createUser = async (
  data: User
): Promise<User | undefined> => {
  const [result]: any = await pool.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [data.name, data.email, data.password]
  );

  return getUserById(result.insertId);
};

export const updateUser = async (
  id: number,
  data: Partial<User>
): Promise<User | undefined> => {
  await pool.query(
    'UPDATE users SET name=?, email=?, password=? WHERE id=?',
    [data.name, data.email, data.password, id]
  );

  return getUserById(id);
};

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM users WHERE id=?', [id]);
};