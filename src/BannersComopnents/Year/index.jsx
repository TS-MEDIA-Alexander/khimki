import React from 'react';
import icon from '../../assets/iconsBanners/yars.svg'
import s from './Year.module.css';

const Year = (props) => {
   return (
      <a href='https://himkipobeda.ru/?type=war' target='_blank' className={s.bannerContainer}>
         <div className={s.topContainer}>
            {/* <img src={icon} alt="" /> */}
            <div className={s.title}>
               <div>2025 - год</div>
               <div>Защитника</div>
               Отечества
            </div>
            <div className={s.textBody}>

            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Виртуальный музей</span></div>
      </a>
   )
}
export default Year;