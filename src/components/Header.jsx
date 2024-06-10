import React from "react";
import styled from "styled-components";
import Icon from "../assets/icon.png";

const Header = ({ title }) => {
  return (
    <StHeader>
      <StTitle>{title}</StTitle>
      <StIcon src={Icon} alt="Icon" />
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center; /* 배경을 가운데로 */
  align-items: center;
  padding: 0.7rem;
  background-color: #f0f0f0;
  margin: 15px auto; /* 상하 마진을 auto로 설정하여 가운데 정렬 */
  border-radius: 20px;
`;

const StTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StIcon = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 0%.5; /* 아이콘과 제목 사이에 여백 추가 */
`;
