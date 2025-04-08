import React from 'react';
import s from './AntiCorruptionBanner.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';


const AntiCorruptionBanner = (props) => {
   return (
      <NavLink to={ROUTER.citizensAppeals.writeAdministration} href="#" className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <p>Обратная связь для сообщений</p>
               о фактах коррупции
            </div>
            <div className={s.textBody}>

            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}>Написать Администрации</div>
      </NavLink>
   )
}
export default AntiCorruptionBanner;