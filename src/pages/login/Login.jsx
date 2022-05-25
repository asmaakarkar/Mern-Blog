import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form action="" className="login-form">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="login-input"
          placeholder="Enter Your Email ..."
        />
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="email"
          placeholder="Enter Your Password ..."
          className="login-input"
        />
        <button className="login-button"> Login</button>
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
