import React from 'react';
import styles from '../../../utils/css/PizzaCard.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzaCard, setaddItems, } from '../../../Redux/slices/Pizza';
import TypeOption from '../../../utils/stuff/TypeOption';
import SizeOption from '../../../utils/stuff/SizeOption';

function PizzaCard() {
  const dispatch = useDispatch()
  const PizzaCards = useSelector(state => state.Pizza.PizzaCards)
  const addItems = useSelector((state) => state.Pizza.addItems)
  const search = useSelector((state) => state.Categories.search)

  React.useEffect(() => {
    axios
      .get('https://demo5518646.mockable.io/PizzaCard')
      .then((res) => {
        dispatch(setPizzaCard(res.data.card));
      });
  }, []);
  const AddBtn = (selectedPizza, pizzaId, selectedType, selectedSize) => {
    dispatch(setaddItems({
      id: pizzaId,
      card: selectedPizza,
      type: selectedType,
      size: selectedSize
    }));
  };

  const { selectedType, setSelectedType } = React.useState(null)
  const { selectedSize, setSelectedSize } = React.useState(null)

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
              <TypeOption type={card.type} id={card.id} setSelectedType={setSelectedType} />
              <SizeOption sizes={card.sizes} id={card.id} setSelectedSize={setSelectedSize} />
            </div>

            <h2>{card.price}</h2>
            <button onClick={() => AddBtn(card, card.id, selectedType, selectedSize)} className={styles.btn}>
              Добавить {addItems.filter(item => item.id === card.id).length}
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaCard;