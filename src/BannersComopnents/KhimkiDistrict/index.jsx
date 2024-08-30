import React from 'react';
import arrowBtn from '../../assets/icons/arrowYellow.svg'
import s from './KhimkiDistrict.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const KhimkiDistrict = (props) => {
   return (
      <NavLink to={ROUTER.khimkiDistrict.main} className={`${s.bannerContainer} borderMain`}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Городской округ Химки</div>
            </div>
            <div className={s.textBody}>
               <div>В состав городского округа входят 36</div>
               <div>сельских поселений и 1 город.</div>
            </div>
         </div>

         <div className={`btnY ${s.button}`}>Подробнее <img src={arrowBtn} alt="" /></div>
      </NavLink>
   )
}
export default KhimkiDistrict;