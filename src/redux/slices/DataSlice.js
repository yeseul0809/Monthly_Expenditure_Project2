import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: "",
  data: JSON.parse(localStorage.getItem("localData")) || [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("localData", JSON.stringify(action.payload));
    },
    modifyData: (state, action) => {
      const { id, date, category, price, description } = action.payload;
      const updatedData = state.data.map((item) =>
        item.id === id ? { id, date, category, price, description } : item
      );
      state.data = updatedData;
      localStorage.setItem("localData", JSON.stringify(updatedData));
    },
    deleteData: (state, action) => {
      const id = action.payload;
      const deletedData = state.data.filter((item) => item.id !== id);
      state.data = deletedData;
      localStorage.setItem("localData", JSON.stringify(deletedData));
    },
  },
});

export const { setActiveIndex, setData, modifyData, deleteData } =
  dataSlice.actions;
export default dataSlice.reducer;
