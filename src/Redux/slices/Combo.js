import { createSlice } from "@reduxjs/toolkit";

export const ComboCardSlice = createSlice({
  name: "Combo",
  initialState: {
    ComboCards: [],
    AddCombo: []
  },
  reducers: {
    setComboCards(state, action) {
      state.ComboCards = action.payload;
    },
    setAddCombo(state, action) {
     state.AddCombo.push(action.payload)
    }
  },
});

export const { setComboCards, setAddCombo } = ComboCardSlice.actions;
export default ComboCardSlice.reducer;
