import React, { useState, useEffect } from 'react'
import { Spin } from '../../../store/actions/GameActions'
import { useDispatch, useSelector } from 'react-redux'

const SpinButton = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.Game.slots)
  console.log("useSelector",items)

  useEffect(() => {
    // init()
  })

  const requestSpin = (event) => {
    dispatch(Spin())
    dispatch({
      type: "SPINING",
      payload: true
    })
  }

  
  return (
    <div className='bg-yellow-300 p-3 border-yellow-300 border-2 rounded text-center text-2xl cursor-pointer' onClick={requestSpin}>
      Spin
    </div>
  )
}

export default SpinButton