import React from 'react';
import s from './Problem.module.css';

const Problem = (props) => {
   return (
      <a href="#" className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Перечень муниципальных </div>
               <div>программ городского округа </div>
               <div>Химки</div>
            </div>
            <div className={s.textBody}>
               <div>Столкнулись с проблемой — сообщите о ней! </div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}>Сообщить о проблеме</div>
      </a>
   )
}
export default Problem;