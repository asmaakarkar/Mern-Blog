import "./write-post.css";

export default function WritePost() {
  return (
    <div className="write-post">
      <img
        src="https://wallpaperaccess.com/full/1871775.jpg"
        alt="write post image"
        className="write-img"
      />
      <form action="" className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-input write-text"
            type="text"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
}
