import React from 'react';
import s from './Slide.module.css';

const Slide = ({ img, title, description, src, btnText }) => {
   return (
      <div className={s.slideContainer}>
         <div className={s.slideContantContainer}>
            <img src={img} alt="" className={s.item} />
            <div className={s.slideTitle}>
               {title.map((el, i) => <div key={i}>{el}</div>)}
            </div>
            <div className={s.slideDescription}>
               {description}
            </div>
         </div>

         <a href={src} target='_blank' className={s.btn}>{btnText}</a>

      </div>
   )
}
export default Slide;