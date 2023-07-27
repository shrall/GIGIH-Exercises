import { Comment } from "../model/model.js";

const CommentRepository = {
  getAllComments: async (videoId) => {
    return await Comment.find({ video_id: videoId });
  },
  createComment: async (newComment) => {
    return await Comment.create(newComment);
  },
};

export default CommentRepository;
