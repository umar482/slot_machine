import React from 'react'
import { Spin } from '../../../store/actions/GameActions'
import { useDispatch } from 'react-redux'

const SpinButton = ({ spin }) => {
  const dispatch = useDispatch()

  const requestSpin = (event) => {
    dispatch(Spin())
  }

  return (
    <div className='bg-yellow-300 p-3 border-yellow-300 border-2 rounded text-center text-2xl cursor-pointer' onClick={requestSpin}>
      Spin
    </div>
  )
}

export default SpinButton