import { HTTP_STATUS } from "../constants/statusCodes.js";
import subscriberService from "../services/subscriberService.js";
import catchAsync from "../utils/catchAsync.js";

async function create (req, res) {
  let {subscriberId, channelId} = req?.body;

  let isSubscriberExist = !!await subscriberService.getSubscriber(subscriberId, channelId);

  if (isSubscriberExist) {
    return res.status(HTTP_STATUS.CONFLICT).json({message: "User already subscribed to this channel."});
  };

  await subscriberService.createSubscriber(subscriberId, channelId);
  return res.status(HTTP_STATUS.CREATED).json({message: "Subscribed to the channel successfully!"});
};

async function deleteSubscriberById (req, res) {
  let {channelId} = req.body;

  let isSubscriberExist = !!await subscriberService.getSubscriber(req?.params.id, channelId);

  if (!isSubscriberExist) {
    return res.status(HTTP_STATUS.NOT_FOUND).json({message: "User have not subscribed to this channel."});
  };

  await subscriberService.deleteSubscriber(req?.params.id, channelId);
  return res.status(HTTP_STATUS.OK).json({message: "Unsubscribed from the channel successfully!"});
};

export default {
  create: catchAsync(create),
  delete: catchAsync(deleteSubscriberById)
};
