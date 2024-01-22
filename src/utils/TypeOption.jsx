import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveType } from '../Redux/slices/Pizza';
import styles from './css/TypeOption.module.css';

function TypeOption({ type, id }) {
  const dispatch = useDispatch();
  const ActiveType = useSelector(state => state.Pizza.ActiveType);

  const handleTypeClick = (selectedType) => {
    dispatch(setActiveType({ id, type: selectedType }));
  };

  return (
    <>
      {type.map((typeOption, index) => (
        <label key={typeOption} className={`${styles.radioType} ${ ActiveType && ActiveType.id === id && ActiveType.type === typeOption ? index === 0 ? styles.ActiveTradition: styles.ActiveThin: ''}`}
          onClick={() => handleTypeClick(typeOption)}>
          <input className={styles.InputRadio} type="radio" value={typeOption} />
          {typeOption}
        </label>
      ))}
    </>
  );
}

export default TypeOption;
