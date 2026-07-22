import Comment from "../models/Comment.js";

async function createComment(userId, videoId, comment) {
  return await Comment.create({userId, videoId, comment});
};

async function updateComment(userId, commentId, comment) {
  return await Comment.update({userId, commentId, comment});
};

async function deleteVideo(userId, commentId) {
  return await Comment.deleteById({userId, commentId});
};

async function getComment(commentId) {
  return await Comment.getById({commentId});
};

export default {
  createComment,
  updateComment,
  deleteVideo,
  getComment
}

