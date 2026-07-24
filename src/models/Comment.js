import db from "../config/db.js";

async function create({userId, videoId, comment}) {
  return await db("comments")
    .insert({userId, videoId, comment})
    .returning(["userId", "videoId", "comment", "createdAt"]);
};

async function update({userId, commentId, comment}) {
  return await db("comments")
    .where({userId, id: commentId})
    .update({comment})
    .returning(["userId", "comment"]);
};

async function deleteById({userId, commentId}) {
  return await db("comments")
    .where({userId, id: commentId})
    .del();
};

async function getById({commentId}) {
  return await db("comments")
    .where({id: commentId})
    .first();
};

export default {
  create,
  update,
  deleteById,
  getById
};
