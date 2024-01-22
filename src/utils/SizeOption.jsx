import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSize } from '../Redux/slices/Pizza';
import styles from './SizeOption.module.scss';

function SizeOption({ sizes, id }) {
  const dispatch = useDispatch();
  const ActiveSize = useSelector(state => state.Pizza.ActiveSize);

  const handleSizeClick = (selectedSize) => {
    dispatch(setActiveSize({ id, size: selectedSize }));
  };

  return (
    <>
      {Object.values(sizes).map((sizeOption, index) => (
        <label
          key={sizeOption}
          className={`${styles.radioSize} ${ActiveSize && ActiveSize.id === id && ActiveSize.size === sizeOption ? index === 0 ? styles.ActiveSmall : (index === 1 ? styles.ActiveMedium : (index === 2 ? styles.ActiveLarge : '')) : ''}`}
          onClick={() => handleSizeClick(sizeOption)}>
          <input className={styles.InputRadio} type="radio" value={sizeOption} />
          {sizeOption}
        </label>
      ))}
    </>
  );
}

export default SizeOption;
