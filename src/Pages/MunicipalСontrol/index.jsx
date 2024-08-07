import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MunicipalСontrol.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';


const MunicipalСontrol = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Муниципальный контроль</span>
            </div>
            <div className={`mt24 pageTitle`}>Муниципальный контроль</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>
               Муниципальный контроль на автомобильном транспорте, городском наземном электрическом транспорте <br /> и в дорожном хозяйстве
               <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Пресечение самовольного строительства<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Муниципальный земельный контроль<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>
            
         </ContantContainerMain>
      </div>
   )
}
export default MunicipalСontrol;