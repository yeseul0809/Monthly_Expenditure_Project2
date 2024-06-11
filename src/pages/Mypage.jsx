import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

// 닉네임, 프로필 사진 변경 UI

export const Mypage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);
  const [newNickname, setNewNickname] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleInfoChange = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const formData = new FormData();
      formData.append("nickname", newNickname);

      const response = await axios.patch(
        "https://moneyfulpublicpolicy.co.kr/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        setUserInfo((prevState) => ({
          ...prevState,
          nickname: response.data.nickname,
        }));
        alert("닉네임이 변경되었습니다!");
        setNewNickname("");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to update nickname:", error);
      alert("닉네임 변경에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
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
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <p>프로필 수정</p>
      <StProfileModifyWrap>
        <form onSubmit={handleInfoChange}>
          <p>닉네임</p>
          <input
            type="text"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            placeholder="새 닉네임"
          />
          <p>프로필 이미지</p>
          <input type="file" />
          <button type="submit">프로필 업데이트</button>
        </form>
      </StProfileModifyWrap>
    </>
  );
};

const StProfileModifyWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(106 185 172 / 53%);
  border-radius: 16px;

  & > p {
    font-size: 20px;
  }
`;
