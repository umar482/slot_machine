import React from 'react'
import { useDispatch } from 'react-redux'
import { Start } from '../../../store/actions/GameActions'


const StartButton = ({ start }) => {
  const dispatch = useDispatch()

  const requestStart = (event) => {
    dispatch(Start())
  }

  return (
    <div className='bg-yellow-300 p-3 border-yellow-300 border-2 rounded text-center text-2xl cursor-pointer'
    onClick={requestStart}>
      Start
    </div>
  )
}

export default StartButton