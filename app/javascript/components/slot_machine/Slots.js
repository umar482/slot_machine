import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

 const Slots = () => {

   const spinning = useSelector(state => state.Game.spinning)
   const items = useSelector(state => state.Game.slots)
   var index = 0


   var pool = ["🍒", "🍋", "🍊", "🍉"]
   useEffect(() => {
     if (spinning) {
       const boxes = document.querySelectorAll('.boxes');
       for (let index = 0; index <= boxes.length - 1; index++) {
        for (let i = 0; i <= pool.length - 1; i++) {
           const box = document.createElement('div');
           box.classList.add('box');
          //  box.style.width =  'px';
          //  box.style.height = door.clientHeight + 'px';
           box.textContent = pool[i];
          //  console.log("boxes[index]", boxes[index])
           boxes[index].appendChild(box);
         }
         boxes[index].style.transitionDuration = `3s`;
         boxes[index].style.transform = `translateY(-280px)`;
       }
     } else if(spinning == false & items.length > 0) {
      //  for (let i = 0; i <= items.length - 1; i++) {
        spiner()
        //  boxes[i].style.transform = `translateY(280px)`;
        // }
  
     }
   }, [spinning])
   const spiner = () => {
    const boxes = document.querySelectorAll('.boxes');
     setTimeout(() => {

      console.log("index", index)
      const box = document.createElement('div');
       box.classList.add('box');
       box.textContent = items[index];
    
      
       boxes[index].style.transitionDuration = `3s`;
       boxes[index].style.transform = `translateY(0px)`;
      boxes[index].innerHTML = ""
      boxes[index].appendChild(box)
      // boxes[index].style.transform = `none`
      index = index + 1

      if (items.length > index) {
        spiner()
      }
      
    }, "1000")
  }

   //
  //  const items = useSelector(state => state.Game.slots)
  //  console.log("items", items)

  //      const boxes = document.querySelectorAll('.boxes');
  //     console.log("boxes", boxes)
    // for (index in boxes) {
    //   boxes[index].style.removeProperty('transitionDuration')
    //   boxes[index].style.removeProperty('transform')

    //   // boxes[index].style.transform = 'none'
    //   // debugger
    //    boxes[index].style.transitionDuration = '3s';
    //    boxes[index].style.transform = 'translateY(-280px)';
    //    }
  //  async function init(firstInit = true, groups = 1, duration = 3) {

  //   const doors = document.querySelectorAll('.door');
  //    for (const door of doors) {
  //     const boxes = door.querySelector('.boxes');
  //     const boxesClone = boxes.cloneNode(false);
  
  //     if (!firstInit) {
  //       const arr = [];
  //       for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
  //         arr.push(...items);
  //       }

  //       pool.push(...items);
  //       boxesClone.addEventListener(
  //         'transitionstart',
  //         async function () {
  //           door.dataset.spinned = '0';
  //           this.querySelectorAll('.box').forEach((box) => {
  //             box.style.filter = 'blur(1px)';
  //           });
  //         },
  //         { once: true }
  //       );

  //       boxesClone.addEventListener(
  //         'transitionend',
  //         async function () {
  //           this.querySelectorAll('.box').forEach((box, index) => {
  //             box.style.filter = 'blur(0)';
  //             if (index > 0) this.removeChild(box);
  //           });
  //         },
  //         { once: true }
  //       );
  //     }
  //     const slots_data = items.length ? items : pool
  //     for (let i = 0; i <= slots_data.length - 1; i++) {
  //       const box = document.createElement('div');
  //       box.classList.add('box');
  //       box.style.width =  'px';
  //       box.style.height = door.clientHeight + 'px';
  //       box.textContent = slots_data[i];
  //       boxesClone.appendChild(box);
  //     }
  //     door.replaceChild(boxesClone, boxes);
  //     boxesClone.style.transitionDuration = `${duration > 2 ? duration : 3}s`;
  //     boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
  //     // shuffle(items)
  //   }
  //  }
   
  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }
  
   
  //  const spin = ()=> {
  //   const doors = document.querySelectorAll('.door');

  //   init(false, 1, 2);
    
  //   for (const door of doors) {
  //     const boxes = door.querySelector('.boxes');
  //     const duration = parseInt(boxes.style.transitionDuration);
  //     boxes.style.transform = 'translateY(0)';
  //     // await new Promise((resolve) => setTimeout(resolve, duration * 100));
  //   }
  //  }

  return (
    <div className="w-full h-full bg-[#1a2b45] border-2 flex flex-col justify-center items-center">
      <div className="doors flex">
      
     
      <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
            <div className="boxes">
            {shuffle(pool).map((item, index) => (
            <div className='box' key={index}>
                {item}
              </div>
              ))
            }
         </div>
        </div>
        <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
            <div className="boxes">
            {shuffle(pool).map((item, index) => (
            <div className='box' key={index}>
                {item}
              </div>
              ))
            }
         </div>
        </div>
        <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
            <div className="boxes">
            {shuffle(pool).map((item, index) => (
              <div className='box' key={index}>
                {item}
              </div>
              ))
            }
         </div>
       </div>
      
      
      </div>
    </div>

  )
}

export default Slots