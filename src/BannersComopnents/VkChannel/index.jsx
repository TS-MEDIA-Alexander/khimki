import React from 'react';
import icon from '../../assets/iconsBanners/vk_logo.svg'
import s from './VkChannel.module.css';

const VkChannel = (props) => {
   return (
      <a href='https://vk.com/gohimkiadm?ysclid=lyoalpdvo9896559218' target='_blank' className={`borderMain ${s.bannerContainer}`}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Официальный </div>
               <div>канал администрации </div>
               <div>Вконтакте </div>
            </div>
            <div className={s.textBody}>

            </div>
         </div>

         <div className={`btnVkBanner ${s.button}`}>Перейти</div>
      </a>
   )
}
export default VkChannel;