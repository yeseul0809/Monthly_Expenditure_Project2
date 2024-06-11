import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { StMain, StInput, StButton, StButtonWrap } from "./Login";

const SignUp = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (id.length < 4 || id.length > 10) {
      Swal.fire({
        title: "다시 입력해주세요.",
        text: "아이디는 4~10글자여야 합니다.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }

    if (password.length < 4 || password.length > 15) {
      Swal.fire({
        title: "다시 입력해주세요.",
        text: "비밀번호는 4~15글자여야 합니다.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      Swal.fire({
        title: "다시 입력해주세요.",
        text: "닉네임은 1~10글자여야 합니다.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }
  };

  return (
    <>
      <StSignupForm onSubmit={handleSignUp}>
        <StMain>
          <p>회원가입 아이디</p>
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
          <p>닉네임</p>
          <StInput
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
          />
          <StButtonWrap>
            <StButton>회원가입</StButton>
            <StButton
              onClick={() => {
                navigate(`/Login`);
              }}
            >
              로그인
            </StButton>
          </StButtonWrap>
        </StMain>
      </StSignupForm>
    </>
  );
};

export default SignUp;

const StSignupForm = styled.form``;
