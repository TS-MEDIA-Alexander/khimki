import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './AntiCorruption.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import AntiCorruptionBanner from '../../BannersComopnents/AntiCorruptionBanner';


const AntiCorruption = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Противодействие коррупции</span>
            </div>
            <div className={`mt24 pageTitle`}>Противодействие коррупции</div>

            <div className={s.containtContainer}>
               <div className="mt80">
                  <AntiCorruptionBanner />
               </div>

               <div className={`mt80 borderMain ${s.linkContainer}`}>
                  <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Независимая антикоррупционная экспертиза<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
                  <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Методические материалы<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
                  <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Формы документов, связанные с противодействием коррупции, для заполнения<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
                  <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Комиссия по соблюдению требований к служебному поведению и урегулированию конфликта интересов<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
                  <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Обратная связь для сообщений о фактах коррупции<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
                  <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Главное управление региональной безопасности московской области<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               </div>

               <div className={`mt40 ${s.description}`}>
                  <p>Ссылки размещены в соответствии с обращением Главного управления региональной безопасности Московской области</p>
                   от 30.05.2022 № 09ИСХ-4285/08-01</div>

            </div>
         </ContantContainerMain>
      </div>
   )
}
export default AntiCorruption;