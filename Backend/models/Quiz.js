import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  answerIndex: Number
});

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema]
});

export default mongoose.model("Quiz", quizSchema);
