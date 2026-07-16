import * as dotenv from "dotenv"; dotenv.config();

let {PORT, DATABASE_URL} = process.env;

export {PORT, DATABASE_URL};
