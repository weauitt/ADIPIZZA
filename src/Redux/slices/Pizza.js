// Ваш текущий код слайса PizzaCardSlice

import { createSlice } from "@reduxjs/toolkit";

export const PizzaCardSlice = createSlice({
  name: "card",
  initialState: {
    PizzaCards: [],
    AddPizza: [],
    ActiveType: [],
    ActiveSize: []
  },
  reducers: {
    setPizzaCard(state, action) {
      state.PizzaCards = action.payload;
    },
    setAddPizza(state, action) {
      state.AddPizza.push(action.payload);
    },
    setActiveType(state, action) {
      state.ActiveType = action.payload;
    },
    setActiveSize(state, action) {
      state.ActiveSize = action.payload;
    }
  },
});

export const { setAddPizza, setPizzaCard, setActiveType, setActiveSize } = PizzaCardSlice.actions;
export default PizzaCardSlice.reducer;
