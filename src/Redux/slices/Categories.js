import { createSlice } from "@reduxjs/toolkit";

export const Categories = createSlice({
  name: 'filter',
  initialState: { 
    ActiveIndex: 0,
    search: '',
    valueSearch: ''
  },
  reducers: {
    setActiveIndex(state, action) {
      state.ActiveIndex = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setValueSearch(state, action) {
      state.valueSearch = action.payload;
    }
  }
});

export const { setActiveIndex, setSearch, setValueSearch } = Categories.actions;
export default Categories.reducer;
