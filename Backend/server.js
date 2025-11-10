import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();
const app = express();

// Database connect
connectDB();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use(express.json()); // Parse JSON body

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);

app.get("/", (req, res) => {
  res.send("Server Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
