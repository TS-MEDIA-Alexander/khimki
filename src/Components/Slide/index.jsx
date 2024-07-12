import React from 'react';
import s from './Slide.module.css';

const Slide = ({ img, title, description }) => {
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

         <div className={s.btn}>Подать обращение</div>

      </div>
   )
}
export default Slide;