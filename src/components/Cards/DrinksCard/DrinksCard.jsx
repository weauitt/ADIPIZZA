import React from 'react'
import styles from '../css/Drinks.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAddDrinks } from '../../../Redux/slices/Drink'
import axios from 'axios';
import { setDrinksCards } from '../../../Redux/slices/Drink';


function Snacks({ img, name, desc, price }) {
  const dispatch = useDispatch()
  const Drinks = useSelector(state => state.Drink.DrinksCards)

  React.useEffect(() => {
    axios
      .get('https://demo5518646.mockable.io/DrinksCard')
      .then((res) => {
        dispatch(setDrinksCards(res.data.card));
      })
  }, );


  const onClickAdd = () => {
    const pushDrinks = { img, name, desc, price }
    dispatch(setAddDrinks(pushDrinks))
  }
  
  const search = useSelector((state) => state.filter.search)

  const DrinksCard = Drinks
    ? Drinks.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div>
      <h1 className={styles.MenuDrinks}>Все Напитки</h1>
      <div className={styles.inline}>
        {DrinksCard.map((card) => (

          <div className={`
          ${card.FixOne ? styles.FixOne : styles.card}
          ${card.FixTwo ? styles.FixTwo : styles.card}
          ${card.FixThree ? styles.FixThree : styles.card}
          ${card.FixFour ? styles.FixFour : styles.card}
          ${card.FixFive ? styles.FixFive : styles.card}
          ${card.FixSix ? styles.FixSix : styles.card}
          ${card.FixSeven ? styles.FixSeven : styles.card}
          ${card.FixEight ? styles.FixEight : styles.card}
          ${card.FixNine ? styles.FixNine : styles.card}
          ${card.FixTen ? styles.FixTen : styles.card}
          ${card.FixEleven ? styles.FixEleven : styles.card}
          ${card.FixSoki ? styles.FixSoki : styles.card}
          ${card.FixThirtheen ? styles.FixThirtheen : styles.card}
          ${card.FixFourteen ? styles.FixFourteen : styles.card}
          
          `} key={card.id}  >
            <img src={card.img} className={styles.imgDrink} alt="logo" />
            <div className={styles.DrinkName}>
              <h1>{card.name}</h1>
            </div>

            <div>
              <h4 className={styles.desc}>{card.desc}</h4>
            </div>

            <div>
              <div className={styles.price}>
                <h2>{card.price}</h2>
              </div>

              <button onClick={onClickAdd} className={styles.btn}> Добавить</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Snacks
