import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Credit from './Credit'
import Slots from './Slots'
import GameButtons from './buttons/GameButtons'
import { Intailize } from '../../store/actions/GameActions'

const SlotMachine = () => {
  const currentCredit = useSelector(state => state.Game.credit)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Intailize())
  }, [dispatch])

  return (
    <div className='flex justify-center mt-20 gap-4'>
      <div className='flex flex-col gap-4'>
        <Slots />
        <Credit />
        <GameButtons
          currentCredit={currentCredit}
        />
      </div>
      
    </div>
  )
}

export default SlotMachine
