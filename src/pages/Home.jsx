import React from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import MonthButton from "../components/MonthButton";
import List from "../components/List";
import PieChart from "../components/PieChart";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header title="MONEY RECORD" />
      <StMain>
        <StHomeSection>
          <InputForm />
        </StHomeSection>
        <StHomeSection>
          <MonthButton />
        </StHomeSection>
        <StPieChartSection>
          <PieChart />
        </StPieChartSection>
        <StHomeSection>
          <List />
        </StHomeSection>
      </StMain>
    </>
  );
};

export default Home;

const StMain = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;
const StHomeSection = styled.section`
  border-radius: 16px;
  padding: 20px;
  background-color: rgb(106 185 172 / 53%);
`;

const StPieChartSection = styled.section`
  height: 350px;
  background-color: white;
  cursor: pointer;
`;
