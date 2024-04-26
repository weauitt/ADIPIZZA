// Ваш текущий код слайса PizzaCardSlice

import { createSlice } from "@reduxjs/toolkit";

export const PizzaCardSlice = createSlice({
  name: "card",
  initialState: {
    PizzaCards: [],
    addItems: [],
    ActiveType: [],
    ActiveSize: []
  },
  reducers: {
    setPizzaCard(state, action) {
      state.PizzaCards = action.payload;
    },
    setaddItems(state, action) {
      state.addItems.push(action.payload);
    },
    setActiveType(state, action) {
      state.ActiveType = action.payload;
    },
    setActiveSize(state, action) {
      state.ActiveSize = action.payload;
    }
  },
});

export const { setaddItems, setPizzaCard, setActiveType, setActiveSize } = PizzaCardSlice.actions;
export default PizzaCardSlice.reducer;
