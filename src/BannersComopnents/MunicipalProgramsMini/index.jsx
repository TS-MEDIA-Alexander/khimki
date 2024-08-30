import React from 'react';
import s from './MunicipalProgramsMini.module.css';

import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

const MunicipalProgramsMini = (props) => {
   return (
      <NavLink to={ROUTER.activity.municipalPrograms} className={s.bannerContainer}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Муниципальные</div>
               <div>программы</div>
            </div>
            <div className={s.textBody}>
               <div>Перечень всех муниципальных</div>
               <div>программ</div>
            </div>
         </div>

         <div className={`btnWBanner ${s.button}`}><span className="btnText">Все программы</span></div>
      </NavLink>
   )
}
export default MunicipalProgramsMini;