import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import SinglePost from "./pages/single-post/SinglePost";
import WritePost from "./pages/write-post/WritePost";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route
          path="/write-post"
          element={user ? <WritePost /> : <Register />}
        />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
