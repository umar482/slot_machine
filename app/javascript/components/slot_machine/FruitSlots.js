import React, { useEffect, useRef } from 'react'

function FruitSlots() {
  const items = ['🍭', '❌', '⛄️', '🦄', '🍌', '💩', '👻', '😻', '💵', '🤡', '🦖', '🍎', '😂', '🖕'];
  const ref = React.useRef();
  useEffect(() => {
    init()
  }, init())
  
  function init(firstInit = true, groups = 1, duration = 1) {
  const doors = document.querySelectorAll('.door');

    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = '0';
      } else if (door.dataset.spinned === '1') {
        return;
      }

      const boxes = door.querySelector('.boxes');
      const boxesClone = boxes.cloneNode(false);
      const pool = ['❓'];

      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));

        boxesClone.addEventListener(
          'transitionstart',
          function () {
            door.dataset.spinned = '1';
            this.querySelectorAll('.box').forEach((box) => {
              box.style.filter = 'blur(1px)';
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          'transitionend',
          function () {
            this.querySelectorAll('.box').forEach((box, index) => {
              box.style.filter = 'blur(0)';
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = door.clientWidth + 'px';
        box.style.height = door.clientHeight + 'px';
        box.textContent = pool[i];
        boxesClone.appendChild(box);
      }
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
      door.replaceChild(boxesClone, boxes);
    }
  }

  return (
    <div className="w-full h-full bg-[#1a2b45] border-2 flex flex-col justify-center items-center">
      <div className="doors flex">
        <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
          <div className="boxes" style={{transition: "transform 1s ease-in-out"}}>
            
          </div>
        </div>

        <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
          <div className="boxes" style={{transition: "transform 1s ease-in-out"}}>
            
          </div>
        </div>

        <div className="door bg-[#fafafa] w-24 h-24 overflow-hidden rounded m-2.5">
          <div className="boxes" style={{transition: "transform 1s ease-in-out"}}>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default FruitSlots