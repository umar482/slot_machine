import React from 'react'
import SpinButton from './SpinButton'
import CashCredit from './CashCredit'
import CashoutButton from './CashoutButton'
import FruitSlots from './FruitSlots'

function SlotMachine() {
  return (
    <div className='flex justify-center mt-20'>
      <div>
        <FruitSlots />
        <CashCredit />
      </div>
      <div>
        <SpinButton />
        <CashoutButton />
      </div>
    </div>
  )
}

export default SlotMachine