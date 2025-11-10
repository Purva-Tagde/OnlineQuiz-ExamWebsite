import { useParams } from "react-router-dom";

const QuizPage = () => {
  const { id } = useParams();
  return <h1>Quiz Page - Quiz ID: {id}</h1>;
};

export default QuizPage;
