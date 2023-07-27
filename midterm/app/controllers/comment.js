import CommentService from "../services/comment.js";

const CommentController = {
  createComment: async (req, res) => {
    const comment = req.body;
    const newComment = await CommentService.createComment(comment);
    res.json(newComment);
  },
};

export default CommentController;
