import React from 'react';
import s from './HealthcareBanner.module.css';

const HealthcareBanner = (props) => {
   return (
      <a href="#" className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <p>Государственные медицинские</p>
               <p>учреждения министерства</p>
               <p>здравоохранения московской</p>
               <p>области</p>
            </div>
            <div className={s.textBody}>

            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}>Перейти</div>
      </a>
   )
}
export default HealthcareBanner;