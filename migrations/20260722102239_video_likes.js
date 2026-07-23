/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable("video_likes", (table) => {
    table.increments();
    table.integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("video_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("videos")
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
  return knex.schema.dropTableIfExists("video_likes");
};
