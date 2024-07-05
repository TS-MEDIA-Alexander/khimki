import React, { Children, cloneElement, useEffect, useState } from 'react';
import s from './Carousel.module.css';
import BtnCarousel from './btnCarousel';

const Carousel = ({ children, btnArrText }) => {

   const [pages, setPages] = useState([])
   const [offset, setOffset] = useState(0)

   useEffect(() => {
      const timeout = setTimeout(() => {
         const newCurrent = offset - 100
         newCurrent < -((btnArrText.length - 1) * 100) ? setOffset(0) : setOffset(newCurrent)
      }, 3000)
      return () => clearTimeout(timeout)
   }, [offset])

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
         </div>
         </div>
         
         <div className={s.btnContainer}>
            {btnArrText.map((el, i) => {
               return <BtnCarousel key={i} current={offset} set={setOffset} text={el} distance={-(i * 100)} />
            })}
         </div>
      </div>
   )
}
export default Carousel;