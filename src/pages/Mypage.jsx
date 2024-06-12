import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Layout } from "../components/Layout";

// 닉네임, 프로필 사진 변경 UI
// 1. useEffect 조회
// 2. form 태그로 유저정보 수정
// -> 둘 다 로그인 했다는 인증정보 (accessToken) 필요.

export const Mypage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [newNickname, setNewNickname] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const handleInfoChange = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const formData = new FormData();
      formData.append("nickname", newNickname);

      if (imgFile) {
        formData.append("avatar", imgFile);
      }

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
          avatar: response.data.avatar,
        }));
        Swal.fire("프로필이 업데이트되었습니다!");
        setNewNickname("");
        setImgFile(null);
        setImgPreview(null);
      } else {
        Swal.fire("프로필 업데이트에 실패했습니다.", "", "error");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      Swal.fire("프로필 업데이트에 실패했습니다.", "", "error");
    }
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire("로그인이 필요합니다.", "", "warning");
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
      <Layout title="프로필 수정" />
      <StyledProfileModifyWrap>
        <form onSubmit={handleInfoChange}>
          <StyledModifyWrap>
            <label>NickName</label>
            <input
              type="text"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              placeholder="새 닉네임을 입력해주세요"
            />
          </StyledModifyWrap>
          <StyledModifyWrap>
            <label>Profile Image</label>
            <input type="file" onChange={handleImgChange} />
            {imgPreview && (
              <img src={imgPreview} alt="프로필 이미지 미리보기" />
            )}
          </StyledModifyWrap>
          <StUpdateButton type="submit">프로필 업데이트</StUpdateButton>
        </form>
      </StyledProfileModifyWrap>
    </>
  );
};

const StUpdateButton = styled.button`
  background-color: #ffc2c2;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  padding: 10px 20px;
  font-family: "Gowun Dodum", sans-serif;
  font-weight: 600;
`;

const StyledProfileModifyWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(106, 185, 172, 0.53);
  border-radius: 16px;
  font-family: "Gowun Dodum", sans-serif;
`;

const StyledModifyWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  & > label {
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 600;
  }

  & > input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  & > img {
    margin-top: 10px;
    max-width: 100%;
    border-radius: 8px;
  }
`;
