import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          className="login-input"
          placeholder="Enter Your UserName ..."
          ref={userRef}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password ..."
          className="login-input"
          ref={passwordRef}
        />
        <button className="login-button" type="submit" disabled={isFetching}>
          {" "}
          Login
        </button>
      </form>
      <button className="register-login-button">
        {" "}
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
