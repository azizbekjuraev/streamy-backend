import db from "../config/db.js";

async function create({userId, name, description, videoUrl}) {
  let [newVideo] = await db("videos")
    .insert({user_id: userId, name, description, video_url: videoUrl})
    .returning(["id", "name", "video_url", "created_at"]);

  return newVideo;
};

async function read({userId}) {
  return await db("videos")
  .where({user_id: userId})
  .select("*")
};

async function update({id, userId, name, description, videoUrl}) {
  let [updatedVideo] = await db("videos")
    .where({id, user_id: userId})
    .update({
      name,
      description,
      video_url: videoUrl
    })
    .returning(["id", "name", "description", "video_url", "updated_at"])

  return updatedVideo;
};

async function deleteById({id, userId}) {
  return await db("videos")
    .where({id, user_id: userId})
    .del();
};

async function getById({id, userId}) {
  return await db("videos")
    .where({id, user_id: userId})
    .first();
};

export default {
  create,
  read,
  update,
  deleteById,
  getById
};
