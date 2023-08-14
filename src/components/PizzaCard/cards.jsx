import React, { useContext } from 'react';
import styles from './cards.module.css';
import { Context } from '../../pages/MainPage/MainPage';
import CardSkeleton from './CardSkeleton/CardSkeleton';

function Cards() {
 
  const {search, cards, AddBtn, addBtn, isLoading} = useContext(Context)

  const cardList = cards ? cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <div>
      <h1 className={styles.MenuPizza}>Все Пиццы</h1>
      <div className={styles.inline}>
        {cardList.map((card, i) =>  isLoading ? <CardSkeleton key={i}/> :(
          <div className={styles.card} key={card.id}  >
            <img src={card.img} className={styles.pizza} alt="logo" />
            <div className={styles.description}>
              <h1>{card.name}</h1>
              <h4>{card.desc}</h4>
              <h2>{card.price}</h2>
            </div>
              <button onClick={AddBtn} className={styles.btn}>Добавить {addBtn}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
