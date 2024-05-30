import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
}











// import mysql from "mysql2/promise";
// import dotenv from "dotenv";
// dotenv.config();

// export const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   port: process.env.MYSQL_PORT,
// });

// console.log(
//   "port",
//   process.env.PORT,
//   "host",
//   process.env.MYSQL_HOST,
//   "databse",
//   process.env.MYSQL_DATABASE,
//   process.env.MYSQL_PASSWORD,
//   process.env.MYSQL_USER,
//   process.env.MYSQL_PORT
// );
