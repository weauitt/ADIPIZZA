import React from 'react'
import styles from './oftenCard.module.css'
import { Context } from '../../pages/MainPage/MainPage'

function OftenOrder() {
  const { OftOrdCard } = React.useContext(Context)
  const oftenOrder = 'Часто заказывают'

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.oftenOrder}>{oftenOrder}</h1>
      <div className={styles.inline}>
        {OftOrdCard.map(miniCard =>
          <div className={styles.card} key={miniCard.id}>
            <img src={miniCard.img} className={styles.img} alt="img" />
            <div className={styles.description}>
              <h3>{miniCard.name}</h3>
              <h5 className={styles.NewPrice}>{miniCard.price}</h5>
              <h5 className={styles.OldPrice}>{miniCard.stock}</h5>
            </div>
          </div>
        )}
        <div className={styles.withoutPig}>
          <img className={styles.iconWithoutPig} src='https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg' alt='iconWithoutPig' />
          <div className={styles.TextOneWithoutPig}>  <h4>Без свинины</h4></div>
          <div className={styles.TextTwoWithoutPig}><h4>Мы готовим из цыпленка и говядины</h4></div>
        </div>
      </div>
    </div>
  )
}

export default OftenOrder
