import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './BurialFuneralServices.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import CardHuman from '../../Components/CardHuman';


const BurialFuneralServices = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Погребение и похоронное дело</span>
            </div>
            <div className={`mt24 pageTitle`}>Погребение и похоронное дело</div>

            <CardHuman
               jobTitle={'Муниципальное казенное учреждение «Специализированная служба в сфере погребения и похоронного дела»'}
               subtitle={'Руководитель - Брунь Александр Сергеевич; Заместитель руководителя  - Шпаченко Борис Викторович'}
               info={'Московская область, город Химки, проспект Мельникова, дом 18, помещение 7'}
               WorkingHours={'Пн-Чт с 9-00 до 18-00, Пт с 9-00 до 16-45, Сб с 10-00 до 16-00, Перерыв с 13-00 до 13-45'}
               contactsArr={['+7 (495) 123-38-80', '+7 (498) 568-99-99', 'mkuritual@admhimki.ru']}
            />

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Нормативно-правовые акты<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Муниципальные услуги в сфере погребения и похоронного дела<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Перечень кладбищ<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Принудительный демонтаж<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Контактная информация<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Как захоронить и получить выплаты семьям погибших и пострадавшим при теракте в Крокус Сити холл<div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default BurialFuneralServices;