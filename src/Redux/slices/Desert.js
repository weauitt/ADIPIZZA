import { createSlice } from "@reduxjs/toolkit";

export const DesertcardSlice = createSlice({
  name: "Desert",
  initialState: {
    DesertCards: [],
    AddDesserts: []
  },
  reducers: {
    setDesertCards(state, action) {
      state.DesertCards = action.payload;
    },
    setAddDesserts(state, action) {
     state.AddDesserts.push(action.payload)
    }
  },
});

export const { setDesertCards, setAddDesserts } = DesertcardSlice.actions;
export default DesertcardSlice.reducer;
