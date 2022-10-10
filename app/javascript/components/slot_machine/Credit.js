import React,{useEffect} from 'react'
import {useSelector } from 'react-redux'

function Credit() {

  const cashCredit = useSelector(state => state.Game.credit)
  const loading = useSelector(state => state.Game.loading)
  const spinning = useSelector(state => state.Game.spinning)

  return (
    <div className='border border-gray-800 rounded p-3'>
      <div className='text-right'>{ loading ? "loading.." : (spinning ? 'loading..' : cashCredit)}</div>
    </div>
  )
}

export default Credit