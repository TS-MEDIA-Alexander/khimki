import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import CardHuman from '../../Components/CardHuman';
import s from './GovernmentAgency.module.css';

import FamilyYear from '../../BannersComopnents/Year';
import state_organizations from '../../assets/img/khimkiDistrict/state_organizations.png';
import department_civil from '../../assets/img/khimkiDistrict/department_civil.png';
import department_civil_mob from '../../assets/img/khimkiDistrict/department_civil_mob.png';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const GovernmentAgency = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Государственные организации</span>
            </div>
            <div className="mt24 pageTitle">Государственные организации</div>

            <div className="columnContainer">
               <div className="columnLarge">
                  <img className={`mt40 ${s.imgMain}`} src={state_organizations} alt="" />
                  <div className={`mt80 ${s.mainTextContainer}`}>
                     <div className={`pageSubtitle`}>Химкинское управление загс главного управления ЗАГС московской области</div>

                     <div className={`mt38 ${s.textBody}`} >
                        Деятельность населения Отдела № 1 Межрайонного управления ЗАГС по городским округам Химки и Долгопрудный Главного управления ЗАГС Московской области осуществляется в соответствии требованиями Федерального закона
                     </div>

                  </div>

               </div>
               <div className="ml20 mt40 columnSmal mobileNoneContainer">
                  <FamilyYear />
               </div>
            </div>

            <div className="mt40 borderMain">
               <DocumentContainerDownload type={'PDF'} text='Федеральный закон от 15 ноября 1997 г. № 143-ФЗ «Об актах гражданского состояния»' date="06.02.2023" />
            </div>

            <div className="mt80">
               <CardHuman
                  jobTitle={'Отдел № 1 Управления ЗАГС по городским округам Химки и Долгопрудный'}
                  info={'г. Химки, ул. Московская, д. 30'}
                  adress={'Режим работы: Вт-Пт 09:00–18:00, перерыв 13:00–14:00; Сб 09:00–17:30, перерыв 13:00–13:30'}
                  contactsArr={['+7 (495) 573-27-18', '+7 (495) 572-65-66', {text: 'zags.mosreg.ru', link: 'https://zags.mosreg.ru/'}]}
                  img={department_civil}
                  imgMob={department_civil_mob}
               />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default GovernmentAgency;