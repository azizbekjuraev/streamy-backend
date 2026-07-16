import db from "../config/db.js";

class User {
  static async create({username, passwordHash}) {
    let [newUser] = await db("users")
      .insert({username, password: passwordHash})
      .returning(["id", "username", "created_at"]);

    return newUser;
  };

  static async findByUsername(username) {
    return await db("users")
      .where({username: username.toLowerCase().trim()})
      .first();
  };

  static async findById(id) {
    return await db("users")
      .select("id", "username", "created_at")
      .where({id})
      .first();
  };

  static async getAll() {
    return await db("users")
      .select("id", "username", "created_at");
  };
}

export default User;
