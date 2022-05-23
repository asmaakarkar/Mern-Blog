import SideBar from "../../components/sidebar/SideBar";
import SingelPost from "../../components/single-post/SingelPost";
import "./single-post.css";

export default function SinglePost() {
  return (
    <div className="single-post">
      <SingelPost />
      <SideBar />
    </div>
  );
}
