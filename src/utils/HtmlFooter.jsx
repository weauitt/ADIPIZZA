import React from 'react'
import'./HtmlFooter.css'

function HtmlFooter() {
  const DeliveryAndPayment = 'Доставка и оплата'
  return (
    <div>
      <div className='footer'>
        <h1 className='MainName'>{DeliveryAndPayment}</h1>
        <div className='sectionOne'>
          <h2>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h2>
          <div className='desc'>
            <h4>Если мы не успеем доставить любые продукты,
              <br /> кроме сувенирной продукции и соусов, в
              <br />течение 60 минут, курьер подарит вам
              <br />сертификат на большую пиццу.
            </h4>
          </div>
        </div>
        <div className='sectionTwo'>
          <div className='smallSectionOne'>
            <div className='priceOne'>
              <h2>365 СОМ</h2>
            </div>
            <h4 className='descThree'>Минимальная сумма доставки</h4>
          </div>
          <div className='smallSectionTwo'>
            <h2>25 000 СОМ</h2>
           <div className='descTwo'>
              <h4>Максимальная сумма при оплате наличными
                <br />
                Изображения продуктов могут отличаться
                <br />от продуктов в заказе.
              </h4>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HtmlFooter
