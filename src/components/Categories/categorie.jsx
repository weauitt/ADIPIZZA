import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Caategorie.css';
import { setActiveIndex, setSearch, setValueSearch } from '../../Redux/slices/Categories';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

function Categorie() {
  const dispatch = useDispatch();
  const ActiveIndex = useSelector((state) => state.Categories.ActiveIndex);

  useEffect(() => {
    const lastActiveIndex = localStorage.getItem('lastActiveIndex');
    if (lastActiveIndex !== null) {
      dispatch(setActiveIndex(parseInt(lastActiveIndex)));
    }
  }, [dispatch]);

  const onCLickCategory = (index) => {
    dispatch(setActiveIndex(index));
    localStorage.setItem('lastActiveIndex', index.toString());
  }


  
  const valueSearch = useSelector((state) => state.Categories.valueSearch);

  const debouncedSearch = debounce((str) => {
    dispatch(setSearch(str));
  }, 150);

  const UpdateSearchValue = React.useCallback((str) => {
    debouncedSearch(str);
  }, []);

  const onChangeInput = (e) => {
    dispatch(setValueSearch(e.target.value));
    UpdateSearchValue(e.target.value);
  }

  const inputRef = React.useRef();
  const onClearSearch = () => {
    dispatch(setValueSearch(''));
    inputRef.current.focus();
    UpdateSearchValue('');
  }

  return (
    <>
      <div className='list'>
        <Link className={ActiveIndex === 0 ? 'categoriesOne' : ''} to={'/'} onClick={() => onCLickCategory(0)}>
          <h1 className='textOne'>Пиццы</h1 >
        </Link>

        <Link className={ActiveIndex === 1 ? 'categoriesTwo' : ''} to={'SnacksCard'} onClick={() => onCLickCategory(1)}>
          <h1 className='textTwo'>Закуски</h1>
        </Link>

        <Link className={ActiveIndex === 2 ? 'categoriesThree' : ''} to={'DrinksCard'} onClick={() => onCLickCategory(2)}>
          <h1 className='textThree'>Напитки</h1 >
        </Link>

        <Link className={ActiveIndex === 3 ? 'categoriesFour' : ''} to={'DesertCard'} onClick={() => onCLickCategory(3)}>
          <h1 className='textFour'>Дессерты</h1 >
        </Link>

        <Link className={ActiveIndex === 4 ? 'categoriesFive' : ''} to={'ComboCard'} onClick={() => onCLickCategory(4)}>
          <h1 className='textFive'>Комбо</h1>
        </Link>
      </div>
      <input className='search' placeholder='Поиск...' value={valueSearch} onChange={(e) => onChangeInput(e)} ref={inputRef}/>
      {valueSearch && <p onClick={onClearSearch} className='close'></p>}
    </>
  );
}

export default Categorie;
