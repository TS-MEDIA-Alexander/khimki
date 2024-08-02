import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Safety.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';


const Safety = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Безопасность</span>
            </div>
            <div className={`mt24 pageTitle`}>Безопасность</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Муниципальная программа "Безопасность и обеспечение безопасности жизнедеятельности населения"<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Объекты безопасности городского округа<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Охрана труда<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Пожарный надзор<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Полиция<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Профилактика распространения наркотиков и наркомании<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Химкинский отдел вневедомственной охраны<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>Антитеррористическая деятельность<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>

            <div className="mt80 pageSubtitle">Cделаем подмосковье безопасным вместе! </div>
            <div className={`mt38 text`}>
               <p>
                  В 2023 году в Химках дополнительно установят 2000 камер видеонаблюдения, подключенные к системе «Безопасный регион». В первую очередь более 700 видеокамер установят на детских и спортивных площадках. Видеофиксация будет работать непрерывно, а видеоархив доступен не менее 30 суток, что позволит существенно снизить уровень преступности и повысить безопасность.
               </p>
               <p>
                  Всего в округе установлены более 5000 камер – на улицах, контейнерных площадках, во дворах, парках, скверах, на входных группа подъездов многоквартирных домов, у социально значимых объектов и торговых центров. В планах администрации Химок покрыть видеонаблюдением всю территорию города, включая поселения Луневское и Кутузовское, которые вошли в состав округа с 1 января 2023 года.
               </p>
               <p>
                  За 2022 год с помощью камер видеонаблюдения, подключенных к системе «Безопасный регион», раскрыто 198 преступлений и зафиксировано 2500 правонарушений
               </p>

            </div>


         </ContantContainerMain>
      </div>
   )
}
export default Safety;