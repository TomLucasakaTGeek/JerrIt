import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
    
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST ,
    user: process.env.MYSQL_USER ,
    password: process.env.MYSQL_PASSWORD ,
    database: process.env.MYSQL_DATABASE
    }).promise()
        
export async function getData() {
    const [rows] = await pool.query("SELECT * FROM Db")
    return rows
}
            
export async function getDataById(id) {
    const [rows] = await pool.query(`
    SELECT * FROM Db
    WHERE id = ${id};
    `)
    return rows[0]
    }
                
export async function createData(title, contents) {
        const [result] = await pool.query(`
        INSERT INTO Db (title, contents)
        VALUES(?, ?);
        `, [title, contents])
        const id = result.insertId 
        return getData(id)
}
                    
const result = await createData('test', 'test')
console.log(result)
