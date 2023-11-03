import { createSlice } from "@reduxjs/toolkit";

export const PizzaCardSlice = createSlice({
  name: "card",
  initialState: {
    AddPizza: [],
    PizzaCards: [],
    isLoading: true,
  },
  reducers: {
    setAddPizza(state, action) {
      state.AddPizza.push(action.payload);
    },
    setPizzaCard(state, action) {
      state.PizzaCards = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    updatePizzaType(state, action) {
      // Найти индекс пиццы с заданным ID
      const pizzaIndex = state.PizzaCards.findIndex((pizza) => pizza.id === action.payload.id);

      // Если пицца с таким ID найдена, обновить значение type
      if (pizzaIndex !== -1) {
        state.PizzaCards[pizzaIndex].type = action.payload.type;
      }
    }
  },
});

export const { setAddPizza, setPizzaCard, setIsLoading, updatePizzaType} = PizzaCardSlice.actions;
export default PizzaCardSlice.reducer;
