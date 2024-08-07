import React from 'react';
import icon from '../../assets/iconsBanners/khimkiEmblem.svg'
import s from './MunicipalPrograms.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const MunicipalPrograms = (props) => {
   return (
      <NavLink to={ROUTER.activity.municipalPrograms} className={s.bannerContainer}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Муниципальные</div>
               <div>программы</div>
            </div>
            <div className={s.textBody}>
               <div>Перечень муниципальных</div>
               <div>программ городского округа</div>
               <div>Химки</div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Все программы</span></div>
      </NavLink>
   )
}
export default MunicipalPrograms;