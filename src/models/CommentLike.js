import db from "../config/db.js";

async function create({userId, commentId, isLiked}) {
  return await db("comment_likes")
    .insert({userId, commentId, isLiked})
    .returning(["userId", "commentId", "isLiked", "createdAt"]);
};

async function update({userId, commentId, isLiked}) {
  return await db("comment_likes")
    .where({userId, commentId})
    .update({isLiked})
    .returning(["userId", "commentId", "isLiked", "updatedAt"]);
};

async function getById({userId, commentId}) {
  return await db("comment_likes")
    .where({userId, commentId})
    .first();
};

export default {
  create,
  update,
  getById
};
