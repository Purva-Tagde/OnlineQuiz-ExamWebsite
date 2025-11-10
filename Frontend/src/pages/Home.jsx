import faculty1 from "../assets/images/faculty1.jpeg";
import heroImg from "../assets/images/hero.jpeg";
import faculty2 from "../assets/images/faculty2.jpeg";
import faculty3 from "../assets/images/faculty3.jpeg";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure styles are applied

const Home = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await api.get("/quizzes");
        setQuizzes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuizzes();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="home-container">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      {/* HERO SECTION */}
<section className="hero">
  <div className="hero-left">
    <h1>Boost Your Knowledge</h1>
    <p>Practice quizzes across different subjects and improve your skills.</p>
    <button className="start-btn">Start Learning</button>
  </div>

  <div className="hero-right">
    <img src={heroImg} alt="Learning" className="hero-image" />
  </div>
</section>


      {/* PLATFORM HIGHLIGHTS SECTION (HORIZONTAL) */}
      <section className="highlights">
        <h2 className="section-title">What Our Platform Offers</h2>
        <p className="section-subtitle">A powerful and interactive way to learn and test your skills.</p>

        <div className="highlight-grid">

          <div className="highlight-card">
            <span className="highlight-icon">🎯</span>
            <h3>Interactive Learning</h3>
            <p>Practice quizzes with instant feedback to help strengthen concepts.</p>
          </div>

          <div className="highlight-card">
            <span className="highlight-icon">👩‍🏫</span>
            <h3>Faculty Dashboard</h3>
            <p>Teachers can track progress and create assessments easily.</p>
          </div>

          <div className="highlight-card">
            <span className="highlight-icon">📚</span>
            <h3>Multiple Subjects</h3>
            <p>HTML, CSS, JavaScript, DBMS, React & more are available to learn.</p>
          </div>

          <div className="highlight-card">
            <span className="highlight-icon">🏆</span>
            <h3>Progress Tracking</h3>
            <p>Monitor your improvement and celebrate your progress.</p>
          </div>

        </div>
      </section>

      {/* FACULTY SECTION */}
      <section className="faculty-section">
        <h2>Meet Our Faculty</h2>

        <div className="faculty-grid">
          <div className="faculty-card">
            <img src={faculty1} alt="Faculty" className="faculty-img" />
            <h3>Prof. Sneha Patel</h3>
            <p>HTML & CSS Specialist</p>
          </div>

          <div className="faculty-card">
            <img src={faculty2} alt="Faculty" className="faculty-img" />
            <h3>Prof. Rohan Desai</h3>
            <p>JavaScript & React Expert</p>
          </div>

          <div className="faculty-card">
            <img src={faculty3} alt="Faculty" className="faculty-img" />
            <h3>Dr. Meera Shah</h3>
            <p>DBMS & SQL Instructor</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>“This quiz portal helped me improve my web development skills. Loved the UI!”</p>
            <h4>– Purva Tagde</h4>
          </div>

          <div className="testimonial-card">
            <p>“Very helpful for revision before exams. The quizzes are simple and effective.”</p>
            <h4>– Manasvi Puranik</h4>
          </div>

          <div className="testimonial-card">
            <p>“Perfect for beginners. The question levels and guidance are very helpful!”</p>
            <h4>– Shreyasi Gidmare</h4>
          </div>

        </div>
      </section>

      {/* QUIZ SECTION */}
      <section className="quiz-section">
        <div className="quiz-header">
          <h2>Available Quizzes</h2>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>

        <div className="quiz-list">

  {/* Existing Quizzes from Database */}
  {quizzes.map((quiz) => (
    <div key={quiz._id} className="quiz-card">
      <h3>{quiz.title}</h3>
      <button className="quiz-btn" onClick={() => navigate(`/quiz/${quiz._id}`)}>Start Quiz</button>
    </div>
  ))}

  {/* Manually Added Extra Quizzes */}
  <div className="quiz-card">
    <h3>JavaScript Essentials</h3>
    <button className="quiz-btn">Start Quiz</button>
  </div>

  <div className="quiz-card">
    <h3>DBMS Concepts</h3>
    <button className="quiz-btn">Start Quiz</button>
  </div>

  <div className="quiz-card">
    <h3>React Basics</h3>
    <button className="quiz-btn">Start Quiz</button>
  </div>

  <div className="quiz-card">
    <h3>Operating System Fundamentals</h3>
    <button className="quiz-btn">Start Quiz</button>
  </div>

  <div className="quiz-card">
    <h3>Computer Networks</h3>
    <button className="quiz-btn">Start Quiz</button>
  </div>

</div>

      </section>

    </div>
  );
};

export default Home;
