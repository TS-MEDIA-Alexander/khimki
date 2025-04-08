import React from 'react';
import s from './VirtualReceptionMin.module.css';

const VirtualReceptionMin = (props) => {
   return (
      <a className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
            Виртуальная приемная
            </div>
            <div className={s.textBody}>
               <div>Подайте обращение в отдел</div>
               <div>Администрации г.о. Химки - онлайн</div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}>Перейти</div>
      </a>
   )
}
export default VirtualReceptionMin;