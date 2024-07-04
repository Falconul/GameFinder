import express from "express";

import {
  handleAddPost,
  handleGetAllPosts,
  handleGetOnePost,
} from "../controllers/postController.js";

import uploadCloudinary from "../middlewares/multer-cloudinary.js";

const router = express.Router();

router.post("/add", uploadCloudinary.single("postImage"), handleAddPost);
router.get("/get/one", handleGetOnePost);
router.get("/get/all", handleGetAllPosts);

export default router;