import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './GorodPobratim.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

/* Фотографии */
import mainImg from '../../assets/img/history/gorodPobratim/main_img.png';

import icon from '../../assets/icons/btnPlanet.svg'

/* Компоненты */
import VirtualMuseumLarge from '../../BannersComopnents/VirtualMuseumLarge';

/* Баннеры */
import FamilyYear from '../../BannersComopnents/Year';
import SVO from '../../BannersComopnents/svo';



const GorodPobratim = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.history.main} className='breadcrumbsFrom'>История</NavLink>
               <span className={'breadcrumbsTo'}> / Город-побратим</span>
            </div>
            <div className={`mt24 pageTitle`}>Город-побратим</div>
            <div className="mt80 columnContainer">
               <div className="columnLarge">

                  <img className={s.imgMain} src={mainImg} alt="" />
                  <div className={`mt80 ${s.mainTextContainer}`}>
                     <div className={`pageSubtitle`}>Гродно</div>
                     <div className={`mt38 text`}>
                        <p>
                           Город в Белоруссии, административный центр Гродненской области.
                        </p>
                        <p>
                           Город расположен в западной части области на берегах Немана. Узел автомобильных и железнодорожных путей. Население по состоянию на 1 января 2024 года — 361 115 человек. Главой города является председатель городского исполнительного комитета Андрей Валерьевич Хмель.
                        </p>
                        <p>
                           Гродно — центр Гродненской области и одни из старейших городов Беларуси. Сегодня Гродно — это современный город, крупный административный, промышленный, научный и культурный центр республики.
                        </p>
                        <p>
                           Гродно — единственный город в Беларуси, где на территории исторического центра, который занимает площадь более 300 гектаров, сохранили памятники древнерусского зодчества, готики, ренессанса, барокко, классицизма и других направлений. Гродно по праву называют городом-музеем под открытым небом.
                        </p>
                        <p>
                           В культурном наследии Гродно ведущую роль играют архитектурные ансамбли. Гродно — единственный город в Беларуси, в котором сохранились два замка — резиденции князей и королей времен Гродненского княжества, Великого княжества Литовского и Речи Посполитой. Более чем 300-летний замковый въездной мост — один из самых древних в Беларуси. Сейчас активно проводятся работы по объекту «Реставрация и приспособление под историко-археологический музей комплекса Старого замка». Скоро уникальный памятник получит вторую жизнь.
                        </p>
                        <div className={`mt38 ${s.footnote}`}>
                           Официальный портал Гродненского городского исполнительного комитета:
                        </div>
                        <a href="http://grodno.gov.by/" target='_blank' className={`mt38 btnWBanner ${s.btn}`}> <img src={icon} alt="" /> grodno.gov.by</a>
                     </div>

                  </div>

                  <div className="mt120 mobileNoneContainer">
                     <VirtualMuseumLarge />
                  </div>
               </div>
               <div className="ml20 columnSmal mobileNoneContainer">
                  <FamilyYear />
                  <div className="mt40">
                     <SVO />
                  </div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default GorodPobratim;