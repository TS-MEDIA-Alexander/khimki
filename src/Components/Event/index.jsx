import React from 'react';
import btnArr from '../../assets/icons/arrow_btn_link.svg';
import s from './Event.module.css';
import { NavLink } from 'react-router-dom';

const Event = ({ img, title, url }) => {
   return (
      <NavLink to={url} className={`${s.container} borderMain`}>
         <div className={s.contantContainer}>
            <div className={s.imgContainer}><img src={img} alt="" /></div>
            <div className={s.title}>{title}</div>
         </div>

         <div className={`btnW ${s.btn}`}>Узнать больше <img src={btnArr} alt="" /></div>
      </NavLink>
   )
}
export default Event;