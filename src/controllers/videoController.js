import { HTTP_STATUS } from "../constants/statusCodes.js";
import videoService from "../services/videoService.js";
import catchAsync from "../utils/catchAsync.js";

async function create(req, res) {
  let {userId, name, description, videoUrl} = req.body;
  let newVideo = await videoService.createVideo(userId, name, description, videoUrl);

  return res.status(HTTP_STATUS.CREATED).json({message: "Video created successfully!", data: newVideo});
};

async function read(req, res) {
  let {userId} = req.body;
  let allVideos = await videoService.readVideo({userId});

  return res.status(HTTP_STATUS.OK).json({message: "Videos retrived successfully!", data: allVideos});
}

async function update(req, res) {
  let {userId, name, description, videoUrl} = req.body;

  let videoExists = !!await videoService.getVideo(req.params.id, userId);

  if (videoExists) {
    let updatedVideo = await videoService.updateVideo(req.params.id, userId, name, description, videoUrl);

    return res.status(HTTP_STATUS.OK).json({message: "Video updated successfully!", data: updatedVideo});
  } else {
    return res.status(HTTP_STATUS.NOT_FOUND).json({message: "Video with this id not found!"});
  };
};

async function deleteVideoById(req, res) {
  let {userId} = req.body;

  let isVideoExists = !!await videoService.getVideo(req.params.id, userId);
  if (!isVideoExists) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({message: "Video with this id is not found."});
  };

  await videoService.deleteVideo(req.params.id, userId);
  return res.status(HTTP_STATUS.OK).json({message: "Video deleted successfully!"});
};

async function toggleLikeVideo(req, res) {
  let {userId, isLiked} = req.body;

  let isLikedVideoExists = !!await videoService.getLike(userId, req.params.id);
  if (!isLikedVideoExists) {
    let toggledLike = await videoService.toggleLike(userId, req.params.id, isLiked);
    return res.status(HTTP_STATUS.CREATED).json({message: "Video like toggled successfully!", data: toggledLike});
  };

  let toggledLike = await videoService.updateToggleLike(userId, req.params.id, isLiked);
  return res.status(HTTP_STATUS.OK).json({message: "Video like toggled successfully!", data: toggledLike});
};

export default {
  create: catchAsync(create),
  read: catchAsync(read),
  update: catchAsync(update),
  delete: catchAsync(deleteVideoById),
  toggleLikeVideo: catchAsync(toggleLikeVideo)
};
