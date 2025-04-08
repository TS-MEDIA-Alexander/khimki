import React from 'react';
import s from './Slide.module.css';

const Slide = ({ img, imgMobil, title, description, src, btnText, colorMobil }) => {

   const isMobil = window.innerWidth > 500;

   return (
      <div className={s.slideContainer}>
         <div className={s.slideContantContainer}>
            <img src={isMobil ? img : imgMobil} alt="" className={s.item} />
            <div className={s.slideTitle} style={{ 'color': !isMobil ? colorMobil || '#212121' : '#212121' }}>
               {title.map((el, i) => <div key={i}>{el}</div>)}
            </div>
            <div className={s.slideDescription} style={{ 'color': !isMobil ? colorMobil : '#212121' }}>
               {description}
            </div>
         </div>

         {(btnText || src) && <a href={src} target='_blank' className={s.btn}>{btnText}</a>}

      </div>
   )
}
export default Slide;