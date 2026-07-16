import * as dotenv from "dotenv"; dotenv.config();

let {PORT, DATABASE_URL, JWT_SECRET} = process.env;

export {PORT, DATABASE_URL, JWT_SECRET};
