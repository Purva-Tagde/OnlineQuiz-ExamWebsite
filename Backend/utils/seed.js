import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Quiz from "../models/Quiz.js";

dotenv.config();

const quizzes = [
  {
    title: "HTML Basics",
    questions: [
      { text: "Full form of HTML?", options: ["Hyper Text Markup Language", "Home Tool Markup", "High Transfer Machine Logic", "None"], answerIndex: 0 },
      { text: "Tag for paragraph?", options: ["<p>", "<para>", "<text>", "<h1>"], answerIndex: 0 }
    ]
  },
  {
    title: "CSS Fundamentals",
    questions: [
      { text: "Property for text color?", options: ["font-style", "text-color", "color", "background"], answerIndex: 2 }
    ]
  }
];

const seedData = async () => {
  await connectDB();
  await Quiz.deleteMany();
  await Quiz.insertMany(quizzes);
  console.log("✅ Quiz Data Inserted!");
  mongoose.connection.close();
};

seedData();
