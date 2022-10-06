import React from 'react'
import { Cashout } from '../../../store/actions/GameActions'
import { useDispatch } from 'react-redux'

function CashoutButton() {
  const dispatch = useDispatch()

  const requestCashout = (event) => {
    dispatch(Cashout())
  }

  return (
    <div className='bg-yellow-300 p-3 border-yellow-300 border-2 text-center text-2xl rounded cursor-pointer' onClick={requestCashout}>
      Cashout
    </div>
  )
}

export default CashoutButton