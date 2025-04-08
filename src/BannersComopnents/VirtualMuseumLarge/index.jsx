import React from 'react';
import s from './VirtualMuseumLarge.module.css';

const VirtualMuseumLarge = (props) => {
   return (
      <a  href="https://himkipobeda.ru/" target='_blank'  className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Виртуальный музей </div>
               <div>города Химки</div>
            </div>
            <div className={s.textBody}>
               <div>Современная история в любимом</div>
               <div>городе.</div>
            </div>
         </div>

         <div className={`btnVirtualBanner ${s.button}`}>Перейти на сайт</div>
      </a>
   )
}
export default VirtualMuseumLarge;