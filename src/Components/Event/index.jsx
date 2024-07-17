import React from 'react';
import btnArr from '../../assets/icons/arrow_btn_link.svg';
import s from './Event.module.css';

const Event = ({ img, title }) => {
   return (
      <div className={s.container}>
         <div className={s.contantContainer}>
            <div className={s.imgContainer}><img src={img} alt="" /></div>
            <div className={s.title}>{title}</div>
         </div>

         <div className={`btnW ${s.btn}`}>Узнать больше <img src={btnArr} alt="" /></div>
      </div>
   )
}
export default Event;