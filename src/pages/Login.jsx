import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );
      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        navigate("/home");
      } else {
        Swal.fire({
          title: "다시 입력해주세요.",
          text: "LogIn ERROR",
          icon: "warning",
          confirmButtonText: "확인",
        });
      }
    } catch (error) {
      console.error("로그인 에러", error);
      Swal.fire({
        title: "다시 입력해주세요.",
        text: "LogIn ERROR",
        icon: "warning",
        confirmButtonText: "확인",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleLogIn}>
        <StMain>
          <p>로그인 아이디</p>
          <StInput
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
          />
          <p>비밀번호</p>
          <StInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <StButtonWrap>
            <StButton type="submit">로그인</StButton>
            <StButton
              onClick={() => {
                navigate(`/SignUp`);
              }}
            >
              회원가입
            </StButton>
          </StButtonWrap>
        </StMain>
      </form>
    </>
  );
};

export const StMain = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 20px;
  }
`;

export const StInput = styled.input`
  background-color: lightblue;
  height: 40px;
  width: 600px;
`;

export const StButton = styled.button`
  width: 80px;
  height: 40px;
  width: 80px;
  height: 40px;
  background-color: bisque;
  border-radius: 20px;
  border: 0.5px;
`;

export const StButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default Login;
