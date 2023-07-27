import { Video, Comment, Product } from '../model/model.js';

const VideoRepository = {
  getAllVideos: async () => {
    return await Video.find();
  },
  getVideo: async (id) => {
    const video = await Video.findById(id);
    const products = await Product.find({ video_id: id });
    const comments = await Comment.find({ video_id: id });
    const videoData = {
      video,
      products,
      comments,
    };
    return videoData;
  },
  createVideo: async (video) => {
    return await Video.create(video);
  },
};

export default VideoRepository;
