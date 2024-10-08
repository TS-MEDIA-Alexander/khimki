import React from 'react';
import icon from '../../assets/iconsBanners/guide_mini.svg'
import s from './GuideMini.module.css';

const GuideMini = (props) => {
   return (
      <a href='https://welcome.mosreg.ru/' target='_blank' className={s.bannerContainer}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Путеводитель</div>
               <div>по Московской </div>
               <div>области</div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Перейти на сайт</span></div>
      </a>
   )
}
export default GuideMini;