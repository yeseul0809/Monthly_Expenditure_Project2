import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <StMain>
        <p>로그인 아이디</p>
        <StInput type="text" placeholder="ID" />
        <p>비밀번호</p>
        <StInput type="password" placeholder="Password" />
        <StButtonWrap>
          <StButton>로그인</StButton>
          <StButton
            onClick={() => {
              navigate(`/SignUp`);
            }}
          >
            회원가입
          </StButton>
        </StButtonWrap>
      </StMain>
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
