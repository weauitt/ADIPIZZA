import React from 'react';
import Categorie from '../../components/Categories/categorie';
import PizzaCard from '../../components/Cards/PizzaCard/PizzaCard';
import SnacksCard from '../../components/Cards/SnacksCard/SnacksCard';
import OftenOrder from '../../components/OftenOrder/ListMiniCard';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import DrinksCard from '../../components/Cards/DrinksCard/DrinksCard';
import DesertCard from '../../components/Cards/DessertCard/DessertsCard';
import ComboCard from '../../components/Cards/ComboCard/ComboCard';


export const Context = React.createContext('')

function MainPage() {
  const [DrinksCards, setDrinksCards] = React.useState([])
  const [OftOrdCard, setOftOrdCard] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedSize, setSelectedSize] = React.useState('medium');


  return (
      <Context.Provider value={{ OftOrdCard, setOftOrdCard, 
      isLoading, setIsLoading, selectedSize, setSelectedSize, DrinksCards, setDrinksCards}}>
            <OftenOrder />
            <Categorie />
            <Routes>
             <Route path='/' element={<PizzaCard/>} />
             <Route path='SnacksCard' element={<SnacksCard/>} />
             <Route path='DrinksCard' element={<DrinksCard/>} />
             <Route path='DesertCard' element={<DesertCard/>} />
             <Route path='ComboCard' element={<ComboCard/>} />
            </Routes>
            <Footer />
       </Context.Provider>
  );
}

export default MainPage;
