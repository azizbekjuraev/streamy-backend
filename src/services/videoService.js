import Video from "../models/Video.js";
import VideoLike from "../models/VideoLike.js";

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
};

async function toggleLike(userId, videoId, isLiked) {
  return await VideoLike.create({userId, videoId, isLiked});
};

async function updateToggleLike(userId, videoId, isLiked) {
  return await VideoLike.update({userId, videoId, isLiked});
};

async function getLike(userId, videoId) {
  return await VideoLike.getById({userId, videoId});
};

export default {
  createVideo,
  readVideo,
  updatedVideo,
  deleteVideo,
  getVideo,
  toggleLike,
  updateToggleLike,
  getLike
};
