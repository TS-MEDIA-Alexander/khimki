import React from 'react';
import s from './AdministrationPerformance.module.css';

const AdministrationPerformance = (props) => {
   return (
      <a href="https://t.me/adm_himki" target='_blank' className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Показатели работы </div>
               <div>администрации  </div>
            </div>
            <div className={s.textBody}>
               <div>Ознакомьтесь с результатами работы</div>
               <div>администрации городского округа  </div>
               <div>и оставьте свое мнение о проделанной</div>
               <div>работе.</div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Перейти</span></div>
      </a>
   )
}
export default AdministrationPerformance;