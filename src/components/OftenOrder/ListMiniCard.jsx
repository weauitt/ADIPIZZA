import React from 'react'
import OftenOrder from './OftenOrder'
import { Context } from '../../pages/MainPage/MainPage'

function MiniListCard() {
  const {setOftOrdCard} = React.useContext(Context)
  
  React.useEffect(() => {
  fetch(' https://demo5518646.mockable.io/OftenCard ')
  .then((value) => value.json())
  .then((data) => setOftOrdCard(data))
  },[setOftOrdCard])
  return (
    <div>
      <OftenOrder />
    </div>
  )
}

export default MiniListCard
