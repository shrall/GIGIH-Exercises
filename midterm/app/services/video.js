import VideoRepository from "../repositories/video.js";

const VideoService = {
  getAllVideos: async () => {
    const videos = await VideoRepository.getAllVideos();
    const returnVideos = videos.map((video) => {
      return {
        id: video._id,
        youtube_url: video.youtube_url,
        thumbnail_url: video.thumbnail_url,
      };
    });
    return returnVideos;
  },
  getVideo: async (id) => {
    const data = await VideoRepository.getVideo(id);
    const returnVideo = {
      id: data.video._id,
      youtube_url: data.video.youtube_url,
      thumbnail_url: data.video.thumbnail_url,
      comments: data.comments,
      products: data.products,
    };
    return returnVideo;
  },
  createVideo: async (video) => {
    return await VideoRepository.createVideo(video);
  },
};

export default VideoService;
