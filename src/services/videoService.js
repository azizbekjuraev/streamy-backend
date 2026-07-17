import Video from "../models/Video.js";

async function createVideo(userId, name, description, videoUrl) {
  return await Video.create({userId, name, description, videoUrl});
};

async function readVideo(userId) {
  return await Video.read({userId});
};

async function updatedVideo(id, userId, name, description, videoUrl) {
  return await Video.update({id, userId, name, description, videoUrl});
};

async function deleteVideo(id, userId) {
  return await Video.deleteById({id, userId});
};

async function getVideo(id, userId) {
  return await Video.getById({id, userId});
}

export default {
  createVideo,
  readVideo,
  updatedVideo,
  deleteVideo,
  getVideo
}
