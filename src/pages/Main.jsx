import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      navigate("/home");
    }
  };
  return (
    <>
      <h2>Mainpage</h2>
      <button onClick={handleClick}>Go to MyPage</button>
    </>
  );
};

export default Main;
