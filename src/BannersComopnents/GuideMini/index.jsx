import React from 'react';
import icon from '../../assets/iconsBanners/guide_mini.svg'
import s from './GuideMini.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const GuideMini = (props) => {
   return (
      <NavLink to={ROUTER.citizensAppeals.visitingAdministration} className={s.bannerContainer}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Выездная</div>
               <div>администрация </div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Расписание</span></div>
      </NavLink>
   )
}
export default GuideMini;