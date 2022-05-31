import "./home.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";

import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../../components/posts/Posts";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const fetchPosts = async () => {
    const { data } = await axios.get("/posts" + search);
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
