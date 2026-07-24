import db from "../config/db.js";

async function create({subscriberId, channelId}) {
  return await db("subscribers")
    .insert({subscriberId, channelId});
};

async function deleteById({subscriberId, channelId}) {
  return await db("subscribers")
    .where({subscriberId, channelId})
    .del();
};

async function getById({subscriberId, channelId}) {
  return await db("subscribers")
    .where({subscriberId, channelId})
    .first();
};

export default {
  create,
  deleteById,
  getById
};
