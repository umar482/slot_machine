import React from 'react'
import SpinButton from './SpinButton'
import CashoutButton from './CashoutButton'
import StartButton from './StartButton'

const GameButtons = ({ currentCredit, start, roll, cashout }) => {

  if (currentCredit) {
    return (
      <div className='flex flex-col gap-4'>
        <SpinButton />
        <CashoutButton />
      </div>
    )
  }
  else {
    return (
      <div>
        <StartButton />
      </div>
    )
  }
  
}

export default GameButtons