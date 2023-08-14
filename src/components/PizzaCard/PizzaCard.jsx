import React from 'react';
import Cards from './cards';
import { Context } from '../../pages/MainPage/MainPage';

function PizzaCard() {
  const { setCards, setIsLoading } = React.useContext(Context)

  React.useEffect(() => {
    fetch('https://demo5518646.mockable.io/PizzaCard')
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setTimeout(() => {
          setIsLoading();
        }, 500);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Cards />
    </div>
  )
}

export default PizzaCard
