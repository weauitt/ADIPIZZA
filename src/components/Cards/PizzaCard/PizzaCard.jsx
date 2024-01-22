import React, { useContext } from 'react';
import styles from '../../../utils/css/PizzaCard.module.css';
import axios from 'axios';
import { Context } from '../../../pages/MainPage/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzaCard, setAddPizza,  } from '../../../Redux/slices/Pizza';
import TypeOption from '../../../utils/TypeOption';
import SizeOption from '../../../utils/SizeOption';

function PizzaCard() {
  const dispatch = useDispatch()
  const PizzaCards = useSelector(state => state.Pizza.PizzaCards)
  const search = useSelector((state) => state.filter.search)

  React.useEffect(() => {
    axios
      .get('https://demo5518646.mockable.io/PizzaCard')
      .then((res) => {
        dispatch(setPizzaCard(res.data.card));
      });
  }, []);
  const { AddBtn, addBtn } = useContext(Context)

  

  const cardList = PizzaCards ? PizzaCards.filter(card => card.name.toLowerCase().includes(search.toLowerCase())) : [];
  return (
    <div>
      <h1 className={styles.MenuPizza}>Все Пиццы</h1>
      <div className={styles.inline}>
        {cardList.map((card, i) => (
          <div className={styles.card} key={card.id}  >
            <img src={card.img} className={styles.imgPizza} alt="logo" />
            <h1>{card.name}</h1>

            <div className={styles.radioContainer}>


               <TypeOption  type={card.type} id={card.id}/>
               <SizeOption  sizes={card.sizes} id={card.id}/>
              {/* {Object.values(card.sizes).map(sizeValue => (
                <label className={styles.radioSize} key={sizeValue}>
                  <input className={styles.InputRadio} type="radio" value={sizeValue} checked={ActiveType === sizeValue}
                    onChange={handleOptionChange} />
                  {sizeValue}
                </label>
              ))} */}



              {/* <button  onClick={() => changeButton === 1? styles.tradition : styles.ActiveTradition} >
                  {card.type[0]}
                </button>
                
                <button onClick={() => changeButton === 2? styles.thin : styles.ActiveThin} className={styles.ActiveTradition }>
                  {card.type[1]}
                </button> */}

              {/* <button>{card.sizes.small}</button>
              <button>{card.sizes.medium}</button>
              <button>{card.sizes.large}</button> */}
            </div>

            <h4>{card.desc}</h4>
            <h2>{card.price}</h2>
            <button onClick={AddBtn} className={styles.btn}>Добавить {addBtn}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaCard;