import React from 'react';
import s from './GovernmentServicesLargeMin.module.css';

const GovernmentServicesLargeMin = (props) => {
   return (
      <div className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Не убран мусор,</div>
               <div>яма на дороге,</div>
               <div>не горит фонарь?</div>
            </div>
            <div className={s.textBody}>
               <div>Столкнулись с проблемой —</div>
               <div>сообщите о ней!</div>
            </div>
         </div>

         <div className={`btnGosBanner ${s.button}`}>Сообщить о проблеме</div>
      </div>
   )
}
export default GovernmentServicesLargeMin;