import React from 'react';
import Categorie from '../../components/Categories/categorie';
import PizzaCard from '../../components/PizzaCard/PizzaCard';
import SnacksCard from '../../components/SnacksCard/SnacksCard'
import OftenOrder from '../../components/OftenOrder/ListMiniCard';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';

export const Context = React.createContext('')

function MainPage() {
  const [cards, setCards] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [OftOrdCard, setOftOrdCard] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  const [addBtn, setAddBtn] = React.useState(1);
  const AddBtn = () => { setAddBtn(addBtn + 1) }

  return (
      <Context.Provider value={{ search, setSearch, cards, setCards, OftOrdCard, setOftOrdCard, AddBtn, addBtn, isLoading, setIsLoading}}>
            <OftenOrder />
            <Categorie />
            <Routes>
             <Route path='/' element={<PizzaCard/>} />            
             <Route path='/SnacksCard' element={<SnacksCard/>} />            
            </Routes>
            <Footer />
       </Context.Provider>
  );
}

export default MainPage;
