import React from 'react';
import s from './ChannelTG.module.css';

const ChannelTG = (props) => {
   return (
      <a href="https://t.me/adm_himki" target='_blank' className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Официальный канал </div>
               <div>администрации  </div>
            </div>
            <div className={s.textBody}>
               <div>Подписывайтесь на официальный</div>
               <div>канал, чтобы оперативно следить </div>
               <div>за новостями в своем мобильном.</div>
            </div>
         </div>

         <div className={`btnTgBanner ${s.button}`}>Перейти </div>
      </a>
   )
}
export default ChannelTG;