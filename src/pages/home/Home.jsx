import "./home.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Post from "../../components/posts/Post";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <SideBar />
      </div>
    </>
  );
}
