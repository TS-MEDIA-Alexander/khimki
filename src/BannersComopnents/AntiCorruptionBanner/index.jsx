import React from 'react';
import s from './AntiCorruptionBanner.module.css';

const AntiCorruptionBanner = (props) => {
   return (
      <a href="#" className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <p>Обратная связь для сообщений</p>
               о фактах коррупции
            </div>
            <div className={s.textBody}>

            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}>Написать Администрации</div>
      </a>
   )
}
export default AntiCorruptionBanner;