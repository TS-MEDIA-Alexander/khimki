import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './ScienceCity.module.css';

import FamilyYear from '../../BannersComopnents/Year';
import SVO from '../../BannersComopnents/svo';

import img from '../../assets/img/khimkiDistrict/science_city.png'

const ScienceCity = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Наукоград</span>
            </div>
            <div className="mt24 columnContainer">
               <div className="columnLarge">
                  <h1 className="pageTitle">Наукоград</h1>
                  <img className={`mt40 ${s.imgMain}`} src={img} alt="" />
                  <div className="mt80 pageSubtitle">Развитие городского округа химки как наукограда</div>
                  <div className="mt38 text">
                     <p>
                        Химки – крупный промышленный центр. Исторически Химки являются центром научно-промышленного производства. У нас распложены знаменитые предприятия аэрокосмического комплекса России, имеющие важнейшее государственное стратегическое значение.
                     </p>
                     <p>
                        Ведущую роль в научной деятельности, промышленном производстве и экономике занимают предприятия и организации научно-производственного комплекса и, в первую очередь, ФГУП «НПО им. С.А. Лавочкина», ОАО «НПО «Энергомаш» им. академика
                     </p>
                     <p>
                        В.П. Глушко», ОАО «МКБ «Факел» им. академика П.Д. Грушина», ОАО «МКБ Искра им. И.И. Картукова».
                     </p>
                     <p>
                        По оценке научно производственного комплекса городской округ Химки уже на протяжении нескольких лет соответствует показателям наукограда Российской Федерации, определенным Федеральным законом от 7 апреля 1999 г. № 70-ФЗ «О статусе наукограда Российской Федерации» и сегодня ведется работа по утверждению данного статуса на региональном и Федеральном уровнях.
                     </p>
                  </div>

                  <div className={`mt38 ${s.description}`}>Решение Совета депутатов от 30.07.2014 №11-2 НАУКОГРАД</div>

                  <div className="mt38 oval">Правовое регулирование</div>

               </div>
               <div className="ml20 mt80 columnSmal mobileNoneContainer">
                  <div className="mt32">
                     <FamilyYear />
                  </div>
                  <div className="mt40">
                     <SVO />
                  </div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default ScienceCity;
