import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
app.use(express.json());

//NOTE - Routes
import videoRoutes from "./app/router/video.js";
import commentRoutes from "./app/router/comment.js";
import productRoutes from "./app/router/product.js";

app.use("/video", videoRoutes);
app.use("/comment", commentRoutes);
app.use("/product", productRoutes);

app.use((req, res) => {
  res.status(404).send("Not Found/Invalid route");
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT || 3000);
});
