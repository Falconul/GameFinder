import express from "express";
import {
  handleRegister,
  listAll,
  handleLogin,
  handleListOne,
} from "../controllers/userController.js";

import upload from "../middlewares/multer-simple.js";
import uploadCloudinary from "../middlewares/multer-cloudinary.js";

const router = express.Router();

router.post("/register", uploadCloudinary.single("image") ,handleRegister);
router.post("/login", handleLogin);
router.get("/list/all", listAll);
router.get("/list/one", handleListOne);

export default router;
