import db from "../config/db.js";

async function create({subscriberId, channelId}) {
  return await db("subscribers")
    .insert({subscriber_id: subscriberId, channel_id: channelId});
};

async function deleteById({subscriberId, channelId}) {
  return await db("subscribers")
    .where({subscriber_id: subscriberId, channel_id: channelId})
    .del();
};

async function getById({subscriberId, channelId}) {
  return await db("subscribers")
    .where({subscriber_id: subscriberId, channel_id: channelId})
    .first();
};

export default {
  create,
  deleteById,
  getById
};
