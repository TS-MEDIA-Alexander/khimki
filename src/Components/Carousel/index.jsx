import React, { Children, cloneElement, useEffect, useState } from 'react';
import s from './Carousel.module.css';
import BtnCarousel from './btnCarousel';
import btnArrowSlider from '../../assets/icons/btnArrowSlider.svg'

const Carousel = ({ children, btnArrText }) => {

   const [count, setCount] = useState(0);

   const [pages, setPages] = useState([])
   const [offset, setOffset] = useState(0)

   useEffect(() => {
      setPages(
         Children.map(children, child => {
            return cloneElement(child, {
               style: {
                  height: '100%',
                  minWidth: '100%',
                  maxWidth: '100%',
               }
            })
         })
      )
   }, [])

   useEffect(() => {
      const timeout = setTimeout(() => {

         /* Остановка прогрессбара */
         setCount(0);

         /* запуск "перелистывания слайдера" */
         flipThroughBtnSlider()

      }, 6000)
      return () => clearTimeout(timeout)
   }, [offset])

   useEffect(() => {
      const to = setInterval(() => {
         setCount((c) => {
            if (c > 60) {
               return 0;
            }
            return c + 1;
         });
      }, 100);
      return () => clearInterval(to);
   }, [])

   const handleBtnSliderClick = (distance) => {
      setOffset(distance)
      setCount(0);
   }

   //Перелистывание слайдера
   function flipThrough() {
      const newCurrent = offset - 100
      newCurrent < -((btnArrText.length - 1) * 100) ? setOffset(0) : setOffset(newCurrent)
      setCount(0);
   }

   //Перелистывание кнопок вместе со слайдером
   const flipThroughBtnSlider = () => {
      /* запуск "перелистывания слайдера" */
      flipThrough()
      
      setHidden(prev => {
         return offset < -1200 ? 100 : offset //Проверяем, чтобы кнопки не исчезали из UI
      })
   }

   const [hidden, setHidden] = useState(100)

   return (
      <div>
         <div className={s.mainContainer}>
            <div className={s.window}>
               <div className={s.allPagesContainer}
                  style={{
                     transform: `translateX(${offset}%)`
                  }}
               >
                  {pages}
               </div>

               <progress max="100" value={(100 * count) / 60}></progress>

            </div>
         </div>

         <div className={s.btnContainer}>
            {btnArrText.map((el, i) => {
               return hidden > -(i * 100) &&
                  <BtnCarousel key={i} current={offset} set={handleBtnSliderClick} text={el} distance={-(i * 100)} />
            })}
            <div onClick={flipThroughBtnSlider} className={`btnY ${s.btnArrowSlider}`}><img src={btnArrowSlider} alt="" /></div>
         </div>
      </div>
   )
}
export default Carousel;