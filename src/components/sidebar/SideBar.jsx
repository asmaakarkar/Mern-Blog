import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://us.123rf.com/450wm/nicoletaionescu/nicoletaionescu1809/nicoletaionescu180900042/108918868-a-happy-girl-raising-her-arms-looking-at-the-sun.jpg?ver=6"
          alt="sidebar image"
          className="sidebar-image"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          aut nam eaque neque quia autem quo.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
          <i className="sidebar-icon fab fa-pinterest-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
