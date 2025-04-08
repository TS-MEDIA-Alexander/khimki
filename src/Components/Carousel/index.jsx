import React, { Children, cloneElement, useEffect, useState } from 'react';
import s from './Carousel.module.css';
import BtnCarousel from './btnCarousel';
import btnArrowSlider from '../../assets/icons/btnArrowSlider.svg'
import { useTimeoutProgress } from '../../utils';

const Carousel = ({ children, btnArrText }) => {

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

   const progressRef = useTimeoutProgress(6000, () => {
      flipThroughBtnSlider()
   }, offset);

   const handleBtnSliderClick = (distance) => {
      setOffset(distance)
   }

   //Перелистывание слайдера
   function flipThrough() {
      const newCurrent = offset - 100
      newCurrent < -((btnArrText.length - 7) * 100) ? setOffset(0) : setOffset(newCurrent)
   }

   //Перелистывание кнопок вместе со слайдером
   const flipThroughBtnSlider = () => {
      //запуск "перелистывания слайдера"
      flipThrough()

      setHidden(prev => {
         return offset < -1300 ? 100 : offset //Проверяем, чтобы кнопки не исчезали из UI
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

               <progress ref={progressRef} max={1} value={0} />

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