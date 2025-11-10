import { Router } from "express";
import { getQuizzes } from "../controllers/quizController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", protect, getQuizzes);

export default router;
