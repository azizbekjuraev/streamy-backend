import Comment from "../models/Comment.js";
import CommentLike from "../models/CommentLike.js";

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

async function toggleLike(userId, commentId, isLiked) {
  return await CommentLike.create({userId, commentId, isLiked});
};

async function updateToggleLike(userId, commentId, isLiked) {
  return await CommentLike.update({userId, commentId, isLiked});
};

async function getLike(userId, commentId) {
  return await CommentLike.getById({userId, commentId});
};

export default {
  createComment,
  updateComment,
  deleteVideo,
  getComment,
  toggleLike,
  updateToggleLike,
  getLike
};

