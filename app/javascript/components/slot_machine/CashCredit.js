import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Start } from '../../store/actions/GameActions'

function CashCredit () {
  const dispatch = useDispatch()
  const cashCredit = useSelector(state => state.Game.credit)
  
  useEffect(() => {
    dispatch(Start())
  }, [dispatch])

  return (
    <div className='border border-gray-800 rounded p-3'>
      <div className='text-right'>{cashCredit}</div>
    </div>
  )
}

export default CashCredit