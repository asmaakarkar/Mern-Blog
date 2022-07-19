import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./single-post.css";

export default function SingelPost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5001/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const getPost = async () => {
    const data = await axios.get("/posts/" + path);
    setPost(data.data);
    setTitle(data.data.title);
    setDescription(data.data.description);
  };

  useEffect(() => {
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo ? (
          <img
            src={publicFolder + post.photo}
            alt="single post image"
            className="single-post-img"
          />
        ) : null}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="single-post-title-input"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="single-post-title">
            {title}
            {post.username === user?.username && (
              <div className="single-post-edit-remove">
                <i
                  className="single-post-icon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="single-post-icon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

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
        {updateMode ? (
          <textarea
            value={description}
            className="single-post-description-input"
            onChange={(e) => setDescription(e.target.value)}
            autoFocus
          ></textarea>
        ) : (
          <p className="single-post-description">{description}</p>
        )}
        {updateMode && (
          <button className="single-post-button" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
