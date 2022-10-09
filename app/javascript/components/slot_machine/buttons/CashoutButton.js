import React, { useRef, useState} from 'react'
import { Cashout } from '../../../store/actions/GameActions'
import { useDispatch } from 'react-redux'
import { takeChance, cssStyles } from '../../utils'

function CashoutButton() {
  const cashoutButton = useRef();
  const style = useRef();
  const dispatch = useDispatch()
  const [disable, setDisable] = useState(false);

  const addStyle = () => {
    if(takeChance(50)){
      randomStyle()
    }else {
      takeChance(40) ? setDisable(true) : setDisable(false)
    }
  };

  const randomStyle = () => {
    const cashoutStyle = cssStyles[Math.floor(Math.random() * cssStyles.length)];
    if(cashoutButton.current.style[cashoutStyle] == "300px"){
      randomStyle()
    }else{
      cashoutButton.current.style[style.current] = ""
      cashoutButton.current.style[cashoutStyle] = "300px"
      style.current = cashoutStyle
    }
  }



  const requestCashout = () => {
    dispatch(Cashout())
  }

  return (
    <button
      ref={cashoutButton}
      onMouseOver={addStyle}
      disabled={disable}
      className='bg-yellow-300 p-3 border-yellow-300 border-2 text-center text-2xl rounded cursor-pointer relative w-full disabled:opacity-75' onClick={requestCashout}>
      Cashout
    </button>
  )
}

export default CashoutButton
