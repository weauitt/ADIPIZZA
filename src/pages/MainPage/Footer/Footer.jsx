import React from 'react'
import styles from '../css/Footer.module.css'
import HtmlFooter from '../../../utils/HtmlFooter'
import LowFooter from './LowFooter.json'

function Footer() {

  return (
    <div>
      <HtmlFooter />
      <section className={styles.LowFooter}>
        {LowFooter.map(text =>
          <div key={text.id} className={styles.TextFooter}>
            <div className={styles.TextOne}>
              <h2 className={styles.ADIPIZZA}>
                {text.name}
              </h2>
              <h4 className={styles.aboutAs}>
                {text.aboutAs}
              </h4>
            </div>

            <h2 className={styles.job}>
              {text.job}
            </h2>
            <h4 className={styles.jobOpenings}>
              {text.jobOpenings}
            </h4>
            <h4 className={styles.contacts}>
              {text.contacts}
            </h4>
            <h2 className={styles.delivery}>
              {text.delivery}
            </h2>
            <h4 className={styles.deliveryAndPayment}>
              {text.deliveryAndPayment}
            </h4>
          </div>)}

        <span className={styles.CallBy}>
          <h3 className={styles.ZvonokPo}>Звонок по</h3>
          <div className={styles.icons}>
            <img className={styles.call} src="https://cdn.dodostatic.net/static/Img/CallCenterIcons/d2a8e028a02042b6b72ff780d9fdbdd8.svg" alt="call" />
            <img className={styles.megacom} src="https://cdn.dodostatic.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg" alt="MegaCom" />
            <img className={styles.O} src="https://cdn.dodostatic.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg" alt="O!" />
          </div>
          <h2 className={styles.number}>(+996) 704 02 07 84</h2>
        </span>

        <div className={styles.AcceptForPayment}>
          <p>Принимаем к оплате</p>
          <img className={styles.IconPayment} src='https://dodopizza-a.akamaihd.net/site-static/dist/aec84a569e79a4696301.png' alt='Payment' />
        </div>
        
        <div className={styles.lowerFooter}>
          <p className={styles.descOne}>ADI PIZZA</p>
          <p className={styles.decsTwo}>© 2023</p>
          <p className={styles.decsThree}> Правовая информация</p>
        </div>
      </section>
    </div>
  )
}

export default Footer
