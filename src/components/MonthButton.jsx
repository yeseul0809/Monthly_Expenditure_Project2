import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../redux/slices/DataSlice";

const MonthButton = () => {
  const dispatch = useDispatch();
  const { activeIndex } = useSelector((state) => state.data);

  const clickHandler = (index) => {
    dispatch(setActiveIndex(index));
  };

  // 월 정보를 객체 형태로 저장
  const months = [
    { index: 1, name: "January" },
    { index: 2, name: "February" },
    { index: 3, name: "March" },
    { index: 4, name: "April" },
    { index: 5, name: "May" },
    { index: 6, name: "Jun" },
    { index: 7, name: "July" },
    { index: 8, name: "August" },
    { index: 9, name: "September" },
    { index: 10, name: "October" },
    { index: 11, name: "November" },
    { index: 12, name: "December" },
  ];

  return (
    <StButtonGroup>
      {months.map((month, index) => (
        <StButton
          key={index}
          $active={activeIndex === month.index}
          onClick={() => clickHandler(month.index)}
        >
          {month.name}
        </StButton>
      ))}
    </StButtonGroup>
  );
};

export default MonthButton;

const StButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StButton = styled.button`
  text-align: center;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 550;
  flex-shrink: 0;
  color: rgb(102, 102, 102);
  font-family: "Gowun Dodum", sans-serif;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#e98282" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};

  &:hover {
    background-color: #e98282;
    color: white;
  }
`;
