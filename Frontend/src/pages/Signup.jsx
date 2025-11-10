import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/signup", { name, email, password });
    localStorage.setItem("token", res.data.token);
    navigate("/home");
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={submitHandler}>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
