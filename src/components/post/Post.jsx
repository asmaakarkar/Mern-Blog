import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const publicFolder = "http://localhost:5001/images/";
  return (
    <div className="post">
      {post.photo ? (
        <img
          src={publicFolder + post.photo}
          alt="post image"
          className="post-img"
        />
      ) : null}
      <div className="post-info">
        <div className="post-categories">
          {post.categories.map((category) => (
            <span className="post-category">{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">
          {" "}
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-description">{post.description}</p>
    </div>
  );
}
