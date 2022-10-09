import React, { useState } from 'react'
import { Spin } from '../../../store/actions/GameActions'
import { useDispatch, useSelector } from 'react-redux'

const SpinButton = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.Game.slots)
  const spinning = useSelector(state => state.Game.spinning)
  const credit = useSelector(state => state.Game.credit)

  const requestSpin = (event) => {
    dispatch(Spin())
    dispatch({
      type: "SPINING",
      payload: true
    })
  }

  return (
    <button className='bg-yellow-300 p-3 border-yellow-300 border-2 rounded text-center w-full text-2xl disabled:opacity-75 disabled:cursor-not-allowed'  onClick={requestSpin}  disabled={spinning || credit < 1 }>
      Spin
    </button>
  )
}

export default SpinButton
