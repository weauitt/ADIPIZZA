import { createSlice } from "@reduxjs/toolkit";

export const SnacksCardSlice = createSlice({
  name: "Snacks",
  initialState: {
    SnacksCards: [],
    AddSnacks: []
  },
  reducers: {
    setSnacksCards(state, action) {
      state.SnacksCards = action.payload;
    },
    setAddSnacks(state, action) {
     state.AddSnacks.push(action.payload) 
    }
  },
});

export const { setSnacksCards, setAddSnacks } = SnacksCardSlice.actions;
export default SnacksCardSlice.reducer;
