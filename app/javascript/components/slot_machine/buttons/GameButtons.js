import React from 'react'
import SpinButton from './SpinButton'
import CashoutButton from './CashoutButton'
import { useSelector } from 'react-redux'

const GameButtons = ({ currentCredit, start, roll, cashout }) => {
  // const items = useSelector(state => state.Game.fruits)

    return (
      <div className='flex justify-center gap-4'>
        <SpinButton />
        <CashoutButton />
      </div>
    )
  
}

export default GameButtons