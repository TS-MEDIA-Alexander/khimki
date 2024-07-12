import React from 'react';
import icon from '../../assets/iconsBanners/tg_logo.svg'
import s from './TgChannel.module.css';

const TgChannel = (props) => {
   return (
      <div className={`borderMain ${s.bannerContainer}`}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Официальный </div>
               <div>канал администрации </div>
               <div>во Телеграмм </div>
            </div>
            <div className={s.textBody}>

            </div>
         </div>

         <div className={`btnTgBanner ${s.button}`}>Перейти</div>
      </div>
   )
}
export default TgChannel;