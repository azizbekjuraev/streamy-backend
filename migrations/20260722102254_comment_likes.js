/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable("comment_likes", (table) => {
    table.increments();
    table.integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("comment_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("comments")
      .onDelete("CASCADE");
    table.boolean("is_liked")
      .notNullable()
      .defaultTo(false);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists("comment_likes");
};
