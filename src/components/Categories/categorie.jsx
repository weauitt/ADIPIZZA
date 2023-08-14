import React from 'react';
import { Link } from 'react-router-dom';
import '../Categories/Caategorie.css'
import { Context } from '../../pages/MainPage/MainPage';

function Categorie() {
  const { search, setSearch } = React.useContext(Context)
  const [ActiveIndex, setActiveIndex] = React.useState(0)

  const onCLickCategory = (index) => {
  setActiveIndex(index)
}

const Search = (e) => { setSearch(e.target.value) }

  return (
     <>
        <div className='list' >
       
            <Link className={ActiveIndex === 0 ? 'categoriesOne' : ''} to={'/'} onClick={ () => onCLickCategory(0)}>
              <h1 className={'textOne'}>Пиццы</h1 >
            </Link>
    
            <Link className={ActiveIndex === 1 ?  'categoriesTwo' : ''} to={'/SnacksCard'} onClick={ () => onCLickCategory(1)}>
              <h1 className={'textTwo'}>Закуски</h1>
            </Link>
    
            <Link className={ActiveIndex === 2 ?  'categoriesThree' : ''} to={'/'} onClick={ () => onCLickCategory(2)}>
              <h1 className={'textThree'}>Напитки</h1 >
            </Link>
    
            <Link className={ActiveIndex === 3 ?  'categoriesFour' : ''} to={'/'} onClick={ () => onCLickCategory(3)}>
              <h1 className={'textFour'}>Дессерты</h1 >
            </Link>
    
            <Link className={ActiveIndex === 4 ?  'categoriesFive' : ''} to={'/'} onClick={ () => onCLickCategory(4)}>
              <h1 className={'textFive'}>Акции</h1>
            </Link>
        </div>
        <input className='search' placeholder='Поиск...' value={search} onChange={Search}></input>
     </>
  );
}

export default Categorie;
