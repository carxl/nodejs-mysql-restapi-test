import { config } from "dotenv";

config();

// console.log(process.env.SY_PORT);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_NAME);
// console.log(process.env.DB_PORT);

export const SY_PORT = process.env.SY_PORT || 3000;
export const DB_USER = process.env.DB_USER || root;
export const DB_PASSWORD = process.env.DB_PASSWORD || root;
export const DB_HOST = process.env.DB_HOST || localhost;
export const DB_NAME = process.env.DB_NAME || company_db;
export const DB_PORT = process.env.DB_PORT || 8889;
