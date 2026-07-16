import knex from "knex";
import knexConfig from "../../knexfile.js";

let db = knex(knexConfig.development);

export default db;
