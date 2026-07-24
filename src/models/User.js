import db from "../config/db.js";

async function create({username, passwordHash}) {
  let [newUser] = await db("users")
    .insert({username, password: passwordHash})
    .returning(["id", "username", "createdAt"]);

  return newUser;
};

async function findByUsername(username) {
  return await db("users")
    .select("id", "username", "password")
    .where({username: username.toLowerCase().trim()})
    .first();
};

async function findById(id) {
  return await db("users")
    .select("id", "username", "createdAt")
    .where({id})
    .first();
};

async function getAll() {
  return await db("users")
    .select("id", "username", "createdAt");
};

export default {
  create,
  findByUsername,
  findById,
  getAll
};
