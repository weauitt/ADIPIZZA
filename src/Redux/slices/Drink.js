import { createSlice } from "@reduxjs/toolkit";

export const DrinkscardSlice = createSlice({
  name: "Snacks",
  initialState: {
    DrinksCards: [],
    AddDrinks: []
  },
  reducers: {
    setDrinksCards(state, action) {
      state.DrinksCards = action.payload;
    },
    setAddDrinks(state, action) {
     state.AddDrinks.push(action.payload) 
    }
  },
});

export const { setDrinksCards, setAddDrinks } = DrinkscardSlice.actions;
export default DrinkscardSlice.reducer;
