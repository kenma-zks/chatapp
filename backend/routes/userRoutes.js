import express from "express";
import {
  getAllUsers,
  getAllUsersWithChatData,
  getUserProfile,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/profile", validateToken, getUserProfile);
router.get("/all", getAllUsers);
router.get("/allWithChatData", validateToken, getAllUsersWithChatData);

export default router;
