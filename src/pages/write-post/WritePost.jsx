import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write-post.css";

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename)
      data.append("file",file)
      newPost.photo = filename;
      try{
       await axios.post("/upload", data);
      }
      catch(e){

      }
    }
    try{
      const res =  await axios.post("/posts/create", newPost);
      window.location.replace("/post/"+ res.data._id)

    }
    catch(e){

    }
  }
  return (
    <div className="write-post">
      { file && (
          <img
          src={URL.createObjectURL(file)}
          alt="write post image"
          className="write-img"
        />
      )}
    
      <form action="" className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-input write-text"
            type="text"
            placeholder="Tell your story..."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="write-submit" type="submit">Publish</button>
      </form>
    </div>
  );
}
