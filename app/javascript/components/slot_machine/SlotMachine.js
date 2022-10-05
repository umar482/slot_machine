import React from 'react'
import SpinButton from './SpinButton'
import CashCredit from './CashCredit'
import CashoutButton from './CashoutButton'
import FruitSlots from './FruitSlots'

function SlotMachine() {
  return (
    <div className='flex justify-center mt-20 gap-4'>
      <div className='flex flex-col gap-4'>
        <FruitSlots />
        <CashCredit />
      </div>
      <div className='flex flex-col gap-4'>
        <SpinButton />
        <CashoutButton />
      </div>
    </div>
  )
}

export default SlotMachine