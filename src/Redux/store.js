import { configureStore } from '@reduxjs/toolkit'
import Categories from './slices/Categories'
import OftOrdCard from './slices/OftOrdCard'
import Pizza from './slices/Pizza'
import Snacks from './slices/Snacks'
import Drink from './slices/Drink'
import Desert from './slices/Desert'
import Combo from './slices/Combo'

export default configureStore({
  reducer: {
    Categories,
    OftOrdCard,
    Pizza,
    Snacks,
    Drink,
    Desert,
    Combo,
  },
})
 
