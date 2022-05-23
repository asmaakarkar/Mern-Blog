import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form action="" className="register-form">
        <label htmlFor="user-name">Username</label>
        <input
          type="text"
          id="user-name"
          className="register-input"
          placeholder="Enter Your username ..."
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="register-input"
          placeholder="Enter Your Email ..."
        />
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="email"
          placeholder="Enter Your Password ..."
          className="register-input"
        />
        <button className="register-button"> Register</button>
      </form>
      <button className="login-register-button"> Login</button>
    </div>
  );
}
