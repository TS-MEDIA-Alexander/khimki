import React from 'react';
import s from './CityDay.module.css';
import { NavLink } from 'react-router-dom';
import {ROUTER} from '../../config';

const CityDay = (props) => {
   return (
      <NavLink to={ROUTER.events.khimkiCityDay} className={s.bannerVirtual}>
         <div className={s.title}>День города!</div>
         <div className={s.textBody}>
            <div>В этом году Химки отмечают 85-</div>
            <div>летие. Для жителей и гостей</div>
            <div>округа подготовили масштабную</div>
            <div>развлекательную программу.</div>
         </div>
         <div className={`btnWBanner ${s.button}`}>Программа празднования</div>
      </NavLink>
   )
}
export default CityDay;