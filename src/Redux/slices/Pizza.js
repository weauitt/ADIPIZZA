// Ваш текущий код слайса PizzaCardSlice

import { createSlice } from "@reduxjs/toolkit";

export const PizzaCardSlice = createSlice({
  name: "card",
  initialState: {
    PizzaCards: [],
    AddPizza: [],
    ActiveType: [], // Изменено на строку
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
    }
    
    
  },
});

export const { setAddPizza, setPizzaCard, setActiveType } = PizzaCardSlice.actions;
export default PizzaCardSlice.reducer;
