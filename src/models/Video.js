import db from "../config/db.js";

async function create({userId, name, description, videoUrl}) {
  let [newVideo] = await db("videos")
    .insert({userId, name, description, videoUrl})
    .returning(["id", "name", "videoUrl", "createdAt"]);

  return newVideo;
};

async function read({userId}) {
  return await db("videos")
  .where({userId})
  .select("*")
};

async function update({id, userId, name, description, videoUrl}) {
  let [updatedVideo] = await db("videos")
    .where({id, userId})
    .update({
      name,
      description,
      videoUrl
    })
    .returning(["id", "name", "description", "videoUrl", "updatedAt"])

  return updatedVideo;
};

async function deleteById({id, userId}) {
  return await db("videos")
    .where({id, userId})
    .del();
};

async function getById({id, userId}) {
  return await db("videos")
    .where({id, userId})
    .first();
};

export default {
  create,
  read,
  update,
  deleteById,
  getById
};
