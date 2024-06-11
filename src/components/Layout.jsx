import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export const Layout = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
    navigate(`/login`);
  };

  return (
    <StNaviHeader>
      <StNaviButtonWrap>
        <StNaviButton
          onClick={() => {
            navigate(`/home`);
          }}
        >
          HOME
        </StNaviButton>
        <StNaviButton
          onClick={() => {
            navigate(`/Mypage`);
          }}
        >
          MyPage
        </StNaviButton>
        <StNaviButton onClick={handleLogOut}>LogOut</StNaviButton>
      </StNaviButtonWrap>
    </StNaviHeader>
  );
};

const StNaviHeader = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #e4e3e3;
  align-items: center;
  display: flex;
  justify-content: right;
  margin: 10px;
`;
const StNaviButton = styled.button`
  background-color: pink;
  border-radius: 10px;
`;
const StNaviButtonWrap = styled.div`
  margin-top: 20px;
`;
