import React from 'react';
import arrow_btn_link from '../../assets/icons/arrow_btn_link.svg';
import s from './HistoryCard.module.css';
import { NavLink } from 'react-router-dom';

const HistoryCard = ({src, img, title, textBody}) => {
   return (
      <NavLink to={src} className={`${s.cardContainer} borderMain`}>
         <img className={s.img} src={img} alt="" />
         <div className={s.textContainer}>
            <div className={s.title}>{title}</div>
            <div className={s.textBody}>{textBody}</div>
         </div>
         <div className={`btnCircleG ${s.btn}`}><img src={arrow_btn_link} alt="" /></div>
      </NavLink>
   )
}
export default HistoryCard;