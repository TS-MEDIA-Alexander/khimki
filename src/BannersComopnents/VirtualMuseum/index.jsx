import React from 'react';
import s from './VirtualMuseum.module.css';

const VirtualMuseum = (props) => {
   return (
      <a href="#" className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Виртуальный музей </div>
               <div>города Химки</div>
            </div>
            <div className={s.textBody}>
               <div>На портале собраны истории </div>
               <div>ветеранов-фронтовиков, тружеников </div>
               <div>тыла, воспоминания детей войны. </div>
            </div>
         </div>

         <div className={`btnVirtualBanner ${s.button}`}>Перейти на сайт</div>
      </a>
   )
}
export default VirtualMuseum;