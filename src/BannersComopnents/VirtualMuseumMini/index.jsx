import React from 'react';
import icon from '../../assets/iconsBanners/virtual_museum_mini.svg';
import s from './VirtualMuseumMini.module.css';

const VirtualMuseumMini = (props) => {
   return (
      <a href='https://himkipobeda.ru/' target='_blank' className={s.bannerContainer}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Виртуальный музей</div>
               <div>города Химки</div>
            </div>
         </div>

         <div className={`btnVirtualBanner ${s.button}`}><span className="btnText">Перейти на сайт</span></div>
      </a>
   )
}
export default VirtualMuseumMini;