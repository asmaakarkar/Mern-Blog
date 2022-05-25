import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-pinterest-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              HOME
            </Link>
            |{" "}
          </li>
          <li className="top-list-item">
            {" "}
            <Link className="link" to="/about">
              ABOUT
            </Link>
            |
          </li>
          <li className="top-list-item">
            {" "}
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="top-list-item">
            {" "}
            <Link className="link" to="/write-post">
              WRITE
            </Link>
          </li>
          <li className="top-list-item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-image"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="profile photo"
          />
        ) : (
          <ul className="top-list">
            {" "}
            <li className="top-list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="top-icon-search fas fa-search"></i>
      </div>
    </div>
  );
}
