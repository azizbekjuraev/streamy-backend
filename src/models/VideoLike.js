import db from "../config/db.js";

async function create({userId, videoId, isLiked}) {
  return await db("video_likes")
    .insert({userId, videoId, isLiked})
    .returning(["userId", "videoId", "isLiked", "createdAt"]);
};

async function update({userId, videoId, isLiked}) {
  return await db("video_likes")
    .where({userId, videoId})
    .update({isLiked})
    .returning(["userId", "videoId", "isLiked", "updatedAt"]);
};

async function getById({userId, videoId}) {
  return await db("video_likes")
    .where({ userId, videoId})
    .first();
};

export default {
  create,
  update,
  getById
};
