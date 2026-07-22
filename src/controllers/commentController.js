import { HTTP_STATUS } from "../constants/statusCodes.js";
import commentService from "../services/commentService.js";
import catchAsync from "../utils/catchAsync.js";

async function create(req, res) {
  let {userId, videoId, comment} = req?.body;

  let newComment = await commentService.createComment(userId, videoId, comment);
  return res.status(HTTP_STATUS.CREATED).json({message: "Comment created successfully!", data: newComment});
};

async function update(req, res) {
  let {userId, comment} = req?.body;

  let isCommentExist = !!await commentService.getComment(req?.params.id);
  if (!isCommentExist) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({message: "Comment with this id is not found."});
  };

  let updatedComment = await commentService.updateComment(userId, req?.params.id, comment);
  return res.status(HTTP_STATUS.OK).json({message: "Comment updated successfully!", data: updatedComment});
};

async function deleteVideoById(req, res) {
  let {userId} = req.body;

  let isCommentExist = !!await commentService.getComment(req?.params.id);
  if (!isCommentExist) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({message: "Comment with this id is not found."});
  };

  await commentService.deleteVideo(userId, req?.params.id);
  return res.status(HTTP_STATUS.OK).json({message: "Comment deleted successfully!"});
};

export default {
  create: catchAsync(create),
  update: catchAsync(update),
  delete: catchAsync(deleteVideoById)
};
