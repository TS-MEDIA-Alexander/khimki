import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './SupportCONPO.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import banner1 from '../../assets/img/activity/banner_support_co_npo_1.png';
import banner2 from '../../assets/img/activity/banner_support_co_npo_2.png';
import banner3 from '../../assets/img/activity/banner_support_co_npo_3.png';


const SupportCONPO = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Поддержка СО НКО</span>
            </div>
            <div className={`mt24 pageTitle`}>Поддержка СО НКО</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Поддержка социально ориентированных некоммерческих организаций (и их обособленных подразделений) на уровне муниципального образования<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Включение СО НКО в реестр поставщиков социальных услуг МО<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Понятие СО НКО - исполнители общественно полезных услуг<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Реестр СО НКО в сфере образования<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>

            <div className="mt80">
               <div className={s.imgContainerBlock}>
                  <img src={banner1} alt="" />
               </div>
               <div className={`mt40 ${s.imgContainerBlock}`}>
                  <img src={banner2} alt="" />
               </div>
               <div className={`mt40 ${s.imgContainerBlock}`}>
                  <img src={banner3} alt="" />
               </div>
            </div>


         </ContantContainerMain>
      </div>
   )
}
export default SupportCONPO;