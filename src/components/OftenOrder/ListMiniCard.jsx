import React from 'react'
import OftenOrder from './OftenOrder'
import { Context } from '../../pages/MainPage/MainPage'
import { useDispatch } from 'react-redux'
import { setOftOrdCard } from '../../Redux/slices/OftOrdCard'

function MiniListCard() {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
  fetch(' https://demo5518646.mockable.io/OftenCard ')
  .then((value) => value.json())
  .then((data) => dispatch(setOftOrdCard(data)))
  },[dispatch(setOftOrdCard)])
  return (
    <div>
      <OftenOrder />
    </div>
  )
}

export default MiniListCard
