import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './SmallMediumBusinesses.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';


const SmallMediumBusinesses = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Малое и среднее предпринимательство</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Малое и среднее</p>
               предпринимательство
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Правовые и нормативные акты<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Новости<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Муниципальная программа развития МСП<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Формы финансовой поддержки МСП в Московской области<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Имущественная поддержка МСП <div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Информация о свободных местах проведения ярмарок<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Порядок формирования и ведения перечня муниципального имущества (за исключением земельных участков)<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Выкуп имущества (за исключением земельных участков)<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Прием предпринимателей Главой городского округа Химки<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Горячая линия для обращения МСП/книга жалоб и предложений (перенести на основную страницу «Малое и среднее предпринимательство»)<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Коворкинг- центр<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Нестационарные торговые объекты<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Предоставление имущества (за исключением земельных участков)<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Уполномоченный по защите прав предпринимателей в Московской области и его Аппарат<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default SmallMediumBusinesses;