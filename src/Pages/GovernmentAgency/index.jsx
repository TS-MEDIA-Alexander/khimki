import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './GovernmentAgency.module.css';

import FamilyYear from '../../BannersComopnents/FamilyYear';
import state_organizations from '../../assets/img/khimkiDistrict/state_organizations.png';
import department_civil from '../../assets/img/khimkiDistrict/department_civil.png';
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
                     <div className={`${s.title}`}>Химкинское управление загс главного управления ЗАГС московской области</div>

                     <div className={`mt38 ${s.textBody}`} >
                        Деятельность населения Отдела № 1 Межрайонного управления ЗАГС по городским округам Химки и Долгопрудный Главного управления ЗАГС Московской области осуществляется в соответствии требованиями Федерального закона
                     </div>

                  </div>


               </div>
               <div className="ml20 mt40 columnSmal">
                  <FamilyYear />
               </div>
            </div>

            <div className="mt40 borderMain">
               <DocumentContainerDownload text='Федеральный закон от 15 ноября 1997 г. № 143-ФЗ «Об актах гражданского состояния»' date="06.02.2023" />
            </div>

            <div className={`mt80 borderMain ${s.card}`}>
               <div className={s.portrainContainer}>
                  <img src={department_civil} alt="" />
               </div>
               <div className={s.rightContainer}>
                  <div className={`mt8 ${s.title}`}>Отдел № 1 Управления ЗАГС по городским округам Химки и Долгопрудный</div>

                  <div>
                     <div className={`mt40 ${s.cardMoreDetails}`}>г. Химки, ул. Московская, д. 30 </div>
                     <div className={s.time}><div className={`${s.cardMoreDetails}`}>Режим работы: </div>Вт-Пт 09:00–18:00, перерыв 13:00–14:00; Сб 09:00–17:30, перерыв 13:00–13:30</div>
                     <div className={`mt24 ${s.cardBtnRow}`}>
                        <div className={`oval ${s.cardTel}`}>+7 (495) 573-27-18</div>
                        <div className={`oval ${s.cardTel}`}>+7 (495) 572-65-66</div>
                        <div className={`oval ${s.cardTel}`}><a className={s.link} target='_blank' href="https://zags.mosreg.ru/">zags.mosreg.ru</a></div>
                     </div>
                  </div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default GovernmentAgency;