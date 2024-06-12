import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import profileDefault from "../assets/profileDefault.png";
import axios from "axios";

export const HomeHeader = ({ title }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);

  const handleLogOut = () => {
    logout();
    navigate(`/`); // 수정해야함. 라우터 프라이빗으로 하면 navigate 안해도됨
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "https://moneyfulpublicpolicy.co.kr/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };
    fetchUserInfo();
  }, []);

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
