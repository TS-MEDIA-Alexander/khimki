import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './PublicHearingsPublicDiscussions.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';


const PublicHearingsPublicDiscussions = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Публичные слушания и общественные обсуждения</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Публичные слушания и</p>
               общественные обсуждения
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Протоколы и заключения<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Назначение публичных слушаний и общественных обсуждений<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default PublicHearingsPublicDiscussions;