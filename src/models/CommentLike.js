import db from "../config/db.js";

async function create({userId, commentId, isLiked}) {
  return await db("comment_likes")
    .insert({user_id: userId, comment_id: commentId, is_liked: isLiked})
    .returning(["user_id", "comment_id", "is_liked", "created_at"]);
};

async function update({userId, commentId, isLiked}) {
  return await db("comment_likes")
    .where({user_id: userId, comment_id: commentId})
    .update({is_liked: isLiked})
    .returning(["user_id", "comment_id", "is_liked", "updated_at"]);
};

async function getById({userId, commentId}) {
  return await db("comment_likes")
    .where({user_id: userId, comment_id: commentId})
    .first();
};

export default {
  create,
  update,
  getById
};
