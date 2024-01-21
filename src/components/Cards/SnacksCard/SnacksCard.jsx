import React from 'react'
import styles from '../css/../../../utils/css/Snacks.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAddSnacks } from '../../../Redux/slices/Snacks'
import axios from 'axios';
import { setSnacksCards } from '../../../Redux/slices/Snacks';


function Snacks({ img, name, desc, price }) {
  const dispatch = useDispatch()
  const Snacks = useSelector(state => state.Snacks.SnacksCards)
 
 React.useEffect(() => {
    if (Snacks.length === 0) {
      axios
        .get('https://demo5518646.mockable.io/SnacksCard')
        .then((res) => {
          dispatch(setSnacksCards(res.data));
        });
    }
  }, [dispatch, Snacks]);


  const onClickAdd = () => {
    const pushSnacks = {img, name, desc, price}
    dispatch(setAddSnacks(pushSnacks))
  }
  const search = useSelector((state) => state.filter.search)


  const SnacksCard = Snacks ? Snacks.filter(card => card.name.toLowerCase().includes(search.toLowerCase())) : [];

  return (
      <div>
        <h1 className={styles.MenuSnacks}>Все Закуски</h1>
        <div className={styles.inline}>
          {SnacksCard.map((card) => (

            <div className={styles.card} key={card.id}  >
              <img src={card.img} className={styles.imgSnacks} alt="logo" />
              <div className={styles.SnacksName}>
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
