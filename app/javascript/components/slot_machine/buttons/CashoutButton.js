import React, { useRef } from 'react'
import { Cashout } from '../../../store/actions/GameActions'
import { useDispatch } from 'react-redux'
import { takeChance, cssStyles } from '../../utils'

function CashoutButton() {
  const cashoutButton = useRef(null);
  const disabledCashout = takeChance(40) ? true : false;

  const addStyle = () => {
    const cashoutStyle = takeChance(50) ? randomStyle() : null;
    cashoutButton.current.style.removeProperty('left')
    cashoutButton.current.style.removeProperty('right')
    cashoutButton.current.style.removeProperty('top')
    cashoutButton.current.style.position = "relative";
    cashoutButton.current.style[cashoutStyle] = "300px";
    // const disableButton = disabledCashout
    // if (disableButton) {
    //   cashoutButton.current.classList.add('pointer-events-none')
    // }
  };

  function randomStyle() {
    return cssStyles[Math.floor(Math.random() * cssStyles.length)];
  }
    

  const dispatch = useDispatch()

  const requestCashout = (event) => {
    dispatch(Cashout())
  }

  return (
    <button
      ref={cashoutButton}
      onMouseOver={addStyle}
      disabled={disabledCashout}
      className='bg-yellow-300 p-3 border-yellow-300 border-2 text-center text-2xl rounded cursor-pointer' onClick={requestCashout}>
      Cashout
    </button>
  )
}

export default CashoutButton