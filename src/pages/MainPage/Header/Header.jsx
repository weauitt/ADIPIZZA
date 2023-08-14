import React from 'react'
import styles from './Header.module.css'
import icon from '../../../assets/icon.png'
import { Link } from 'react-router-dom';

function Header() {
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
                        <li className={styles.korzina}>Корзина</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    </div>
    );
}


export default Header
