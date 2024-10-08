import React from 'react';
import arrow_btn_link from '../../assets/icons/arrow_btn_link.svg';
import s from './DistrictCard.module.css';
import pattern from '../../assets/icons/khimkiDistrict/pattern.svg'

const DistrictCard = ({ title, img, fnSet, id }) => {
   return (
      <div onClick={() => fnSet(id)} className={s.navLinkContainer}>
         <div className={s.contantContainer}>
            <div className={s.imgContainer}>
               <img src={img || pattern} alt="" />
            </div>
            <div className={s.navLinkTitle}>{title}</div>
         </div>
         <div className={`btnCircleG ${s.btn}`}><img src={arrow_btn_link} alt="" /></div>
      </div>
   )
}
export default DistrictCard;