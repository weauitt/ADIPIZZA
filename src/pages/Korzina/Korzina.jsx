import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Korzina() {
  const addItems = useSelector((state) => state.Pizza.addItems);

  return (
    <div>
      <h1>Корзина</h1>
      {addItems.length > 0 ? (
        <div>
          {addItems.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="logo" />
              <h1>{item.name}</h1>
              <h4>{item.desc}</h4>
              <h2>{item.price}</h2>
              {/* Добавьте дополнительные поля, если необходимо */}
              <button>
                Заказать
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
      <Link to='/Back'><p>Назад</p></Link>
    </div>
  );
}

export default Korzina;
