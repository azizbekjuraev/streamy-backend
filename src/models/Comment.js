import db from "../config/db.js";

async function create({userId, videoId, comment}) {
  return await db("comments")
    .insert({user_id: userId, video_id: videoId, comment})
    .returning(["user_id", "video_id", "comment", "created_at"]);
};

async function update({userId, commentId, comment}) {
  return await db("comments")
    .where({user_id: userId, id: commentId})
    .update({comment})
    .returning(["user_id", "comment"]);
};

async function deleteById({userId, commentId}) {
  return await db("comments")
    .where({user_id: userId, id: commentId})
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
