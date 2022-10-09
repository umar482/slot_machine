import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

 const Slots = () => {

  const dispatch = useDispatch()
  const spinning = useSelector(state => state.Game.spinning)
  const items = useSelector(state => state.Game.slots)
  const boxes = document.querySelectorAll('.boxes');
  let pool = ["🍒", "🍋", "🍊", "🍉"]
  let index = 0


  useEffect(() => {
    startSpiner()
  }, [spinning])

  useEffect(() => {
    updateSlots()
  }, [items])


  const shuffle = ([...arr]) => {

    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;

  }


  const startSpiner = () => {

    if (spinning) {

    console.log("spinning", spinning)
     for (let index = 0; index <= boxes.length - 1; index++) {
      pool = shuffle(pool)
      boxes[index].innerHTML = ""
      for (let i = 0; i <= pool.length - 1; i++) {
         const box = document.createElement('div');
         box.classList.add('box');
         box.textContent = pool[i];
         boxes[index].appendChild(box);
         boxes[index].style.animation = `spin .4s linear infinite`
       }
     }
    }

  }

  const updateSlots = () => {
    if (items.length == 0)
      return
    setTimeout(() => {
      const box = document.createElement('div');
      box.classList.add('box');
      box.textContent = items[index];
      boxes[index].innerHTML = ""
      boxes[index].appendChild(box)
      boxes[index].style.animation = `none`

      index = index + 1
      if (items.length > index) {
        updateSlots()
      }else{
        console.log("index", index)
        dispatch({ type: "SPINING",payload: false })
      }
    }, "1000")

  }

  return (
    <div className="w-full h-full bg-[#1a2b45] border-2 flex flex-col justify-center items-center">
      <div className="doors flex">
      
        <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
          <div className="boxes">
            <div className='box'>
                ❓
            </div>
          </div>
        </div>

        <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
          <div className="boxes">
            <div className='box'>
                ❓
            </div>
          </div>
        </div>

        <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
          <div className="boxes">
            <div className='box'>
                ❓
            </div>
         </div>
       </div>

      </div>
    </div>

  )
}

export default Slots
