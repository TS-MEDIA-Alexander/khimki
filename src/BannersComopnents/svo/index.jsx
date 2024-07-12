import React from 'react';
import s from './svo.module.css';

const SVO = (props) => {
   return (
      <div className={`borderMain ${s.bannerContainer}`}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Химчане, Герои СВО</div>
            </div>
            <div className={s.textBody}>
               <div>Гордимся нашими ребятами!</div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Подробнее</span></div>
      </div>
   )
}
export default SVO;