import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/slices/DataSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [date, setDate] = useState("2024-05-28"); // 날짜
  const [category, setCategory] = useState(""); // 지출항목
  const [price, setPrice] = useState(""); // 지출금액
  const [description, setDescription] = useState(""); // 지출내용
  const [createdBy, setCreatedBy] = useState(""); // 작성자

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!date || !price) {
      Swal.fire({
        title: "다시 입력해주세요.",
        text: "날짜와 금액 모두 입력해야합니다.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }

    const newList = {
      id: uuidv4(),
      date,
      category,
      price: Number(price),
      description,
      createdBy,
    };

    dispatch(setData([...data, newList]));

    setDate("2024-05-23");
    setCategory("");
    setPrice("");
    setDescription("");
    setCreatedBy("");
  };

  return (
    <StInputFrom onSubmit={onSubmitHandler}>
      <StFromGroup>
        <label htmlFor="date">Date</label>
        <StInput
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="YYYY-MM-DD"
        />
      </StFromGroup>
      <StFromGroup>
        <label htmlFor="category">Category</label>
        <StInput
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="지출항목"
        />
      </StFromGroup>
      <StFromGroup>
        <label htmlFor="price">Price</label>
        <StInput
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="지출금액"
        />
      </StFromGroup>
      <StFromGroup>
        <label htmlFor="description">Description</label>
        <StInput
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="지출내용"
        />
      </StFromGroup>
      <StFromGroup>
        <label htmlFor="createdBy">CreatedBy</label>
        <StInput
          type="text"
          id="createdBy"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          placeholder="작성자"
        />
      </StFromGroup>
      <StInputButton>Save</StInputButton>
    </StInputFrom>
  );
};

export default InputForm;

const StInputFrom = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

const StFromGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
  text-align: left;
`;

const StInput = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  margin-top: 3px;
  border-radius: 4px;
  font-size: 14px;
  font-family: "Gowun Dodum", sans-serif;
`;

const StInputButton = styled.button`
  padding: 8px 20px;
  height: 38px;
  margin-top: 10px;
  background-color: #e98282;
  color: white;
  border: none;
  border-radius: 4px;
  font-family: "Gowun Dodum", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: #efaed0;
  }
`;
