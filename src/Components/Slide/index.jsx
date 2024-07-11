import React from 'react';
import s from './Slide.module.css';

const Slide = ({ img, text }) => {
   return (
      <div className={s.slideContainer}>
         <img src={img} alt="" className={s.item} />
         <div className={s.slideTitle}>
            {text.map((el, i) => <div key={i}>{el}</div>)}
         </div>
      </div>
   )
}
export default Slide;