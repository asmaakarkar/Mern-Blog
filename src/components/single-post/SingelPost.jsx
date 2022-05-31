import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./single-post.css";

export default function SingelPost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const getPost = async () => {
    const data = await axios.get("/posts/" + path);
    setPost(data.data);
  };

  useEffect(() => {
    getPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo ? (
          <img
            src={post.photo}
            alt="single post image"
            className="single-post-img"
          />
        ) : null}
        <h1 className="single-post-title">
          {post.title}
          <div className="single-post-edit-remove">
            <i className="single-post-icon far fa-edit"></i>
            <i className="single-post-icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author:{" "}
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            {" "}
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="single-post-description">{post.description}</p>
      </div>
    </div>
  );
}
