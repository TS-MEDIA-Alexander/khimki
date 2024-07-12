import React from 'react';
import icon from '../../assets/iconsBanners/vk_logo.svg'
import s from './VkChannel.module.css';

const VkChannel = (props) => {
   return (
      <div className={`borderMain ${s.bannerContainer}`}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Официальный </div>
               <div>канал администрации </div>
               <div>в Вконтакте </div>
            </div>
            <div className={s.textBody}>

            </div>
         </div>

         <div className={`btnVkBanner ${s.button}`}>Перейти</div>
      </div>
   )
}
export default VkChannel;