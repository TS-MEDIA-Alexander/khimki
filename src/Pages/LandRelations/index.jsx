import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './LandRelations.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';


const LandRelations = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Земельные отношения</span>
            </div>
            <div className={`mt24 pageTitle`}>Земельные отношения</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Аукционы и торги<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Муниципальный земельный контроль<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Сообщения о планируемом изъятии земельных участков<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Памятки и разъяснения<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Сообщения о возможном установлении публичных сервитутов в рамках предоставления государственных услуг<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Извещения о проведении собрания о согласовании местоположения границ земельных участков<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default LandRelations;