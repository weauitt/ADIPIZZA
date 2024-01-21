import React from 'react'
import styles from '../../../utils/css/ComboCard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAddCombo, setComboCards } from '../../../Redux/slices/Combo';


function ComboCard({ img, name, desc, price }) {
  const dispatch = useDispatch()
  const Combo = useSelector(state => state.Combo.ComboCards)
 
 React.useEffect(() => {
      axios
        .get('https://demo5518646.mockable.io/ComboCard')
        .then((res) => {
          dispatch(setComboCards(res.data.card));
        });
  }, []);


  const onClickAdd = () => {
    const pushSnacks = {img, name, desc, price}
    dispatch(setAddCombo(pushSnacks))
  }
  const search = useSelector((state) => state.filter.search)


  const ComboCard = Combo ? Combo.filter(card => card.name.toLowerCase().includes(search.toLowerCase())) : [];

  return (
      <div>
        <h1 className={styles.MenuCombo}>Все Комбо</h1>
        <div className={styles.inline}>
          {ComboCard.map((card) => (

            <div className={`
            ${card.FixOne ? styles.FixOne : styles.card}
            ${card.FixTwo ? styles.FixTwo : styles.card}
            ${card.FixThree ? styles.FixThree : styles.card}
            ${card.FixFour ? styles.FixFour : styles.card}

            `} key={card.id}  >
              <img src={card.img} className={styles.imgCombo} alt="logo" />
              <div className={styles.ComboName}>
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

export default ComboCard
