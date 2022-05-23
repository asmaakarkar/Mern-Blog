import SideBar from "../../components/sidebar/SideBar";
import "./setting.css";

export default function Setting() {
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">Update Your Account</span>
          <span className="setting-delete-title">Delete Your Account</span>
        </div>
        <form action="" className="setting-form">
          <label htmlFor="">Profile Picture</label>
          <div className="setting-profile-pic">
            <img
              src="https://wallpaperaccess.com/full/1871775.jpg"
              alt="setting image"
            />
            <label htmlFor="file-input">
              <i className="setting-profile-pic-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Safak" />
          <label htmlFor="">Email</label>
          <input type="emai" placeholder="safak@gmail.com" />
          <label htmlFor="">PassWord</label>
          <input type="password" />
          <button className="setting-submit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
