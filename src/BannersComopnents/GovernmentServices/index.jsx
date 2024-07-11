import React from 'react';
import s from './GovernmentServices.module.css';

const GovernmentServices = (props) => {
   return (
      <div className={`borderMain ${s.bannerContainer}`}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Мой выбор,</div>
               <div>Моё будущее</div>
            </div>
            <div className={s.textBody}>
               <div>Общественное голосование</div>
               <div>на портале Госуслуг</div>
            </div>
         </div>

         <div className={`btnGosBanner ${s.button}`}>Подать обращение</div>
      </div>
   )
}
export default GovernmentServices;