import CommentRepository from "../repositories/comment.js";

const CommentService = {
  getAllComments: async (videoId) => {
    const comments = await CommentRepository.getAllComments(videoId);
    const returnComments = comments.map((comment) => {
      return {
        id: comment._id,
        username: comment.username,
        comment: comment.comment,
        video_id: comment.video_id,
      };
    });
    return returnComments;
  },
  createComment: async (body) => {
    const newComment = {
      username: body.username,
      comment: body.comment,
      video_id: body.video_id,
    };
    return await CommentRepository.createComment(newComment);
  },
};

export default CommentService;

