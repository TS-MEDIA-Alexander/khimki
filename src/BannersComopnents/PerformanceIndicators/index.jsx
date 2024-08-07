import React from 'react';
import s from './PerformanceIndicators.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const PerformanceIndicators = (props) => {
   return (
      <NavLink to={ROUTER.khimkiDistrict.performanceIndicators} className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Показатели работы</div>
               <div>администрации </div>
            </div>
            <div className={s.textBody}>
               <div>Ознакомьтесь с результатами работы </div>
               <div>администрации городского округа </div>
               <div>и оставьте свое мнение о проделанной </div>
               <div>работе.</div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}>Перейти </div>
      </NavLink>
   )
}
export default PerformanceIndicators;