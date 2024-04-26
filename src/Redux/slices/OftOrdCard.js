import { createSlice } from "@reduxjs/toolkit";

export const OftenOrderCard = createSlice({
  name: "OftenOrderCard",
  initialState: {
    OftOrdCard: [],
  },
  reducers: {
    setOftOrdCard(state, action) {
      state.OftOrdCard = action.payload;
    },
  },
});

export const { setOftOrdCard } = OftenOrderCard.actions;
export default OftenOrderCard.reducer;
