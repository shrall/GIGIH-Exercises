import { Router } from "express";

import VideoController from "../controllers/video.js";

const router = Router();

router.get("/", VideoController.getAllVideos);
router.get("/:id", VideoController.getVideo);
router.post("/", VideoController.createVideo);
router.get("/:id/comment", VideoController.getAllComments);
router.get("/:id/product", VideoController.getAllProducts);

export default router;
