import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CashCredit from './CashCredit'
import FruitSlots from './FruitSlots'
import GameButtons from './buttons/GameButtons'
import { Start } from '../../store/actions/GameActions'

const SlotMachine = () => {
  const dispatch = useDispatch()
  const currentCredit = useSelector(state => state.Game.credit)
  
  useEffect(() => {
    dispatch(Start())
  }, [dispatch])

  return (
    <div className='flex justify-center mt-20 gap-4'>
      <div className='flex flex-col gap-4'>
        <FruitSlots />
        <CashCredit />
      </div>
      <div>
        <GameButtons
          currentCredit={currentCredit}
        />
      </div>
    </div>
  )
}

export default SlotMachine
