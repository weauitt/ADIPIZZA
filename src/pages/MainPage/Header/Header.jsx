import React from 'react'
import styles from '../css/Header.module.css'
import icon from '../../../assets/icon.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const { AddPizza } = useSelector(state => state.Pizza);
    const { AddSnacks } = useSelector(state => state.Snacks);
    const { AddDrinks } = useSelector(state => state.Drink);
    const { AddDesserts } = useSelector(state => state.Desert);
    const { AddCombo } = useSelector(state => state.Combo);

    const totalItemsInCart = AddPizza.length + AddSnacks.length + AddDrinks.length + AddDesserts.length + AddCombo.length
    const KorzinaClass = totalItemsInCart >= 1 ? styles.korzinaWithNubmer : styles.korzina;

    return (
    <div className={styles.Navbar}>
        <header className={styles.navbar}>
            <div className={styles.headerContent}>
              <Link to='/'>
                    <div className={styles.backgroundAdiPizza}>
                        <img className={styles.icon} src={icon} alt="icon" />
                        <h1 className={styles.logoName}>ADI PIZZA</h1>
                    </div>
              </Link>
                <div className={styles.description}>
                    <h1>Доставка пиццы Бишкек</h1>
                    <h3 className={styles.time}>35 мин</h3>
                </div>
                <div className={styles.phoneNumber}>
                    <h1>(996) 704-02-07-84</h1>
                    <h3 className={styles.phoneNumberText}>Звонок по телефону</h3>
                </div>
                <div>
                    <ul>
                        <Link to='/Login'><li className={styles.join}>Вход</li></Link>
                        <Link to='/Korzina'>
                       <li className={KorzinaClass}>Корзина {totalItemsInCart >= 1 ? totalItemsInCart : '' }</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    </div>
    );
}


export default Header
