import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let db;
try {
  db = await mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.db,
  });
  const conn = await db.getConnection();
  console.log("db successfully connected!");
  conn.release();
} catch (err) {
  console.log(` db connection failed `, err.message);
  process.exit(1);
}

export default db;
