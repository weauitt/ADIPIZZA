import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlices'
import Pizza from './slices/Pizza'
import Snacks from './slices/Snacks'
import Drink from './slices/Drink'
import Desert from './slices/Desert'
import Combo from './slices/Combo'

export default configureStore({
  reducer: {
    filter,
    Pizza,
    Snacks,
    Drink,
    Desert,
    Combo
  },
})
 
