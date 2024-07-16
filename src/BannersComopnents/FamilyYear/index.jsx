import React from 'react';
import icon from '../../assets/iconsBanners/familyYars.svg'
import s from './FamilyYear.module.css';

const FamilyYear = (props) => {
   return (
      <div className={s.bannerContainer}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>2024 год - год</div>
               <div>семьи</div>
            </div>
            <div className={s.textBody}>
               
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Подробнее</span></div>
      </div>
   )
}
export default FamilyYear;