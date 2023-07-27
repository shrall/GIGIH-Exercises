import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error(err);
  });

const videoSchema = new mongoose.Schema(
  {
    youtube_url: String,
    thumbnail_url: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const productSchema = new mongoose.Schema(
  {
    url: String,
    image_url: String,
    title: String,
    price: Number,
    video_id: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const commentSchema = new mongoose.Schema(
  {
    username: String,
    comment: String,
    video_id: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Video = mongoose.model("Video", videoSchema);
const Comment = mongoose.model("Comment", commentSchema);
const Product = mongoose.model("Product", productSchema);

export { Video, Comment, Product };
