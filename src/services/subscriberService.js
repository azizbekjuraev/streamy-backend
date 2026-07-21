import Subscriber from "../models/Subscriber.js";

async function createSubscriber(subscriberId, channelId) {
  return await Subscriber.create({subscriberId, channelId});
};

async function deleteSubscriber(subscriberId, channelId) {
  return await Subscriber.deleteById({subscriberId, channelId});
};

async function getSubscriber(subscriberId, channelId) {
  return await Subscriber.getById({subscriberId, channelId});
};

export default {
  createSubscriber,
  deleteSubscriber,
  getSubscriber
};
