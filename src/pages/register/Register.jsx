import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form action="" className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="user-name">Username</label>
        <input
          type="text"
          id="user-name"
          className="register-input"
          placeholder="Enter Your username ..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="register-input"
          placeholder="Enter Your Email ..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="email"
          placeholder="Enter Your Password ..."
          className="register-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" type="submit">
          {" "}
          Register
        </button>
      </form>
      <button className="login-register-button">
        {" "}
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Somethin went Wrong
        </span>
      )}
    </div>
  );
}
