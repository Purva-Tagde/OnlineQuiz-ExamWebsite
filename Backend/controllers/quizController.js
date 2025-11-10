import Quiz from "../models/Quiz.js";

export const getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};
