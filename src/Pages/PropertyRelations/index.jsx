import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './PropertyRelations.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';


const PropertyRelations = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Имущественные отношения</span>
            </div>
            <div className={`mt24 pageTitle`}>Имущественные отношения</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Нормативно-правовые акты<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Перечени объектов недвижимости<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Сообщения об изъятии объектов недвижимого имущества<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Новости<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Государственная кадастровая оценка зданий, помещений, сооружений, объектов незавершенного строительства, <br /> машино-мест, расположенных на территории Московской области<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PropertyRelations;