import axios from 'axios';
import React from 'react'
import styles from '../css/DessertsCard.module.css'
import { setDesertCards, setAddDesserts } from '../../../Redux/slices/Desert';
import { useDispatch, useSelector } from 'react-redux';

function DesertsCard({ img, name, desc, price }) {
  const dispatch = useDispatch()
  const Desert = useSelector(state => state.Desert.DesertCards)

  React.useEffect(() => {
    axios
      .get('https://demo5518646.mockable.io/DessertCard')
      .then((res) => {
        dispatch(setDesertCards(res.data.card));
      });
  }, []);

  const onClickAdd = () => {
    const pushDesserts = { img, name, desc, price }
    dispatch(setAddDesserts(pushDesserts))
  }
  const search = useSelector((state) => state.filter.search)

  const DessertCard = Desert ? Desert.filter(card => card.name.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <div>
      <h1 className={styles.MenuDesserts}>Все Дессерты</h1>
      <div className={styles.inline}>
        {DessertCard.map((card) => (

          <div className={`
          ${card.FixOne ? styles.FixOne : styles.card}
          ${card.FixTwo ? styles.FixTwo : styles.card}
          ${card.FixThree ? styles.FixThree : styles.card}
          ${card.FixFour ? styles.FixFour : styles.card}
          ${card.FixFive ? styles.FixFive : styles.card}
          ${card.FixSix ? styles.FixSix : styles.card}
          ${card.FixSeven ? styles.FixSeven : styles.card}
          ${card.FixEight ? styles.FixEight : styles.card}
          ${card.FixSmallText ? styles.FixSmallText : styles.card}
          ${card.FixNine ? styles.FixNine : styles.card}
          ${card.FixTen ? styles.FixTen : styles.card}
          ${card.FixEleven ? styles.FixEleven : styles.card}
          ${card.FixTwelve ? styles.FixTwelve : styles.card}
          ${card.FixThirteen ? styles.FixThirteen : styles.card}
          ${card.FixFourteen ? styles.FixFourteen : styles.card}
          ${card.FixFifteen ? styles.FixFifteen  : styles.card}
          ${card.FixSixteen ? styles.FixSixteen  : styles.card}
          `} key={card.id}  >
            <img src={card.img} className={styles.imgDessert} alt="logo" />
            <div className={styles.DessertName}>
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

export default DesertsCard
