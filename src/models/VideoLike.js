import db from "../config/db.js";

async function create({userId, videoId, isLiked}) {
  return await db("video_likes")
    .insert({user_id: userId, video_id: videoId, is_liked: isLiked})
    .returning(["user_id", "video_id", "is_liked", "created_at"]);
};

async function update({userId, videoId, isLiked}) {
  return await db("video_likes")
    .where({user_id: userId, video_id: videoId})
    .update({is_liked: isLiked})
    .returning(["user_id", "video_id", "is_liked", "updated_at"]);
};

async function getById({userId, videoId}) {
  return await db("video_likes")
    .where({user_id: userId, video_id: videoId})
    .first();
};

export default {
  create,
  update,
  getById
};
