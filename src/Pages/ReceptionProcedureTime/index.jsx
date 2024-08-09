import React from 'react';
import s from './ReceptionProcedureTime.module.css';

import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

import ContantContainerMain from '../../total/ContantContainerMain';
import MayorCard from '../../Components/MayorCard';
import arrow from '../../assets/icons/arrowYellow.svg'
import Table from '../../Components/Table';
import GovernmentServices from '../../BannersComopnents/GovernmentServices';
import GovernmentServicesLargeMin from '../../BannersComopnents/GovernmentServicesLargeMin';

const ReceptionProcedureTime = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.citizensAppeals.main} className='breadcrumbsFrom'>Обращения граждан</NavLink>
               <span className='breadcrumbsTo'> / Порядок и время приема</span>
            </div>
            <div className="mt24 pageTitle">
               <p>График личного приёма граждан</p>
               <p>Главой городского округа</p>
               <p>и заместителями Главы</p>
            </div>
            <div className="mt80">
               <MayorCard />
            </div>
            <div className="mt80 text">
               <div className="pageSubtitle">
                  График личного приёма граждан Главой городского округа <br />
                  и заместителями Главы городского округа Химки <br />
                  в июле 2024 года
               </div>
               <p>
                  Информацию о порядке записи на приём и порядке проведения приёмов
                  можно получить по телефону с 9.00 до 18.00 (пятница с 9.00 до 16.45), кроме выходных и праздничных дней
               </p>
            </div>
            <div className="mt40 flexContainer">
               <div className="oval">+7 (495) 572-73-38</div>
               <div className={`btnY ${s.virtualBtn}`}>Архив графиков <img src={arrow} alt="" /></div>
            </div>

            <div className="columnContainer">
               <div className="columnLarge">
                  {/* <Table table={} /> */}
               </div>
               <div className="ml20 columnSmal">
                  <GovernmentServicesLargeMin />
                  <div className="mt20">
                     <GovernmentServices />
                  </div>
               </div>
            </div>

            <div className={`mt280 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>График встреч жителей городского округа с Администрацией<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>График личного приёма граждан в общественных приёмных исполнительных органов Московской области<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>График личного приёма граждан Председателем Совета депутатов городского округа<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>График приёма граждан в Приёмной Правительства Московской области<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>"День приема" График приема сотрудниками Администрации и подведомственных учреждений и представителями территориальных органов государственной власти в МФЦ городского округа Химки<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.mooAgainstCorruption} */ className={`mt24 ${s.link}`}>График проведения тематических и личных приемов граждан<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default ReceptionProcedureTime;