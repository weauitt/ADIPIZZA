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



function MainPage() {

  return (
    <>
      <OftenOrder />
      <Categorie />
      <Routes>
        <Route path='/' element={<PizzaCard />} />
        <Route path='SnacksCard' element={<SnacksCard />} />
        <Route path='DrinksCard' element={<DrinksCard />} />
        <Route path='DesertCard' element={<DesertCard />} />
        <Route path='ComboCard' element={<ComboCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainPage;
