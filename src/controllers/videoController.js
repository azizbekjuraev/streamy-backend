import { HTTP_STATUS } from "../constants/statusCodes.js";
import videoService from "../services/videoService.js";
import catchAsync from "../utils/catchAsync.js";

async function create(req, res) {
  let {userId, name, description, videoUrl} = req?.body;
  let newVideo = await videoService.createVideo(userId, name, description, videoUrl);

  return res.status(HTTP_STATUS.CREATED).json({message: "Video created successfully!", video: newVideo});
};

async function read(req, res) {
  let {userId} = req?.body;
  let allVideos = await videoService.readVideo({userId});

  return res.status(HTTP_STATUS.OK).json({message: "Videos retrived successfully!", videos: allVideos});
}

async function update(req, res) {
  let {userId, name, description, videoUrl} = req?.body;

  let videoExists = !!await videoService.getVideo(req.params.id, userId);

  if (videoExists) {
    let updatedVideo = await videoService.updatedVideo(req?.params.id, userId, name, description, videoUrl);

    return res.status(HTTP_STATUS.OK).json({message: "Video updated successfully!", video: updatedVideo});
  } else {
    return res.status(HTTP_STATUS.NOT_FOUND).json({message: "Video with this id not found!"});
  };
};

async function deleteVideoById(req, res) {
  let {userId} = req?.body;
  await videoService.deleteVideo(req?.params.id, userId);

  return res.status(HTTP_STATUS.OK).json({message: "Video deleted successfully!"});
};

export default {
  create: catchAsync(create),
  read: catchAsync(read),
  update: catchAsync(update),
  delete: catchAsync(deleteVideoById)
}
