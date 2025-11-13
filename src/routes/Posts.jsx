import { useState } from "react";
import "../App.css";
import MainHeader from "../components/MainHeader";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
