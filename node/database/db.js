import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config()
//import './config';

console.log(process.env.DB_NAME);
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect: process.env.DIALECT
});

export default db;