import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import profileDefault from "../assets/profileDefault.png";
import { useUserInfo } from "../hooks/useUserInfo";

export const Header = ({ title }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
  };

  // 커스텀 훅 사용
  const { data: userInfo, error } = useUserInfo((error) => {
    navigate("/");
    localStorage.clear();
  });

  return (
    <StNaviHeader>
      <StLeftWrap>
        <StNaviButton
          onClick={() => {
            navigate(`/home`);
          }}
        >
          HOME
        </StNaviButton>
        <StNaviButton onClick={handleLogOut}>LOGOUT</StNaviButton>
      </StLeftWrap>
      <StTitle>{title}</StTitle>
      <StRightWrap>
        {userInfo && (
          <StProfileWrap>
            <StProfileImg
              src={userInfo.avatar || profileDefault}
              alt="ProfileImg"
            />
            <StNaviButton
              onClick={() => {
                navigate(`/Mypage`);
              }}
            >
              MyPage
            </StNaviButton>
          </StProfileWrap>
        )}
      </StRightWrap>
    </StNaviHeader>
  );
};

const StTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
`;

const StNaviHeader = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #e4e3e3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const StLeftWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const StRightWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const StNaviButton = styled.button`
  border-radius: 10px;
  padding: 5px 10px;
  border: 0;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
`;

const StProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
