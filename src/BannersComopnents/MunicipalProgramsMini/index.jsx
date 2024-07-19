import React from 'react';
import s from './MunicipalProgramsMini.module.css';

const MunicipalProgramsMini = (props) => {
   return (
      <div className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Муниципальные</div>
               <div>программы</div>
            </div>
            <div className={s.textBody}>
               <div>Перечеь муниципальных</div>
               <div>программ городского округа</div>
               <div>Химки</div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Все программы</span></div>
      </div>
   )
}
export default MunicipalProgramsMini;