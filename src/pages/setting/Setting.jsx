import axios from "axios";
import { useContext, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import { Context } from "../../context/Context";
import "./setting.css";

export default function Setting() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5001/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (e) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (e) {
      dispatch({ type: "UPDATE_FAILURE", payload: res.data });
    }
  };
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">Update Your Account</span>
          <span className="setting-delete-title">Delete Your Account</span>
        </div>
        <form action="" className="setting-form" onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="setting-profile-pic">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : publicFolder + user.profilePic
              }
              alt="setting image"
            />
            <label htmlFor="file-input">
              <i className="setting-profile-pic-icon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="emai"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">PassWord</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="setting-submit" type="submit">
            Update
          </button>
          {success && (
            <span className="setting-success">Profile has been updated</span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
}
