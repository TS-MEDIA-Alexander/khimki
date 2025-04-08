import React from 'react';
import icon from '../../assets/iconsBanners/vk_channel_mini.svg'
import s from './VkChannelMini.module.css';

const VkChannelMini = (props) => {
   return (
      <a href='https://vk.com/gohimkiadm?ysclid=lyoalpdvo9896559218' target='_blank' className={s.bannerContainer}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Официальный канал</div>
               <div>администрации</div>
               <div>Вконтакте</div>
            </div>
         </div>

         <div className={`btnGosBanner ${s.button}`}><span className="btnText">Перейти на сайт</span></div>
      </a>
   )
}
export default VkChannelMini;