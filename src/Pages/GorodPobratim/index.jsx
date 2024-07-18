import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './GorodPobratim.module.css';

/* Фотографии */
import mainImg from '../../assets/img/history/gorodPobratim/main_img.png';

import icon from '../../assets/icons/btnPlanet.svg'

/* Компоненты */
import VirtualMuseumLarge from '../../BannersComopnents/VirtualMuseumLarge';
import UsefulSourse from '../../Components/UsefulSourse';

/* Баннеры */
import FamilyYear from '../../BannersComopnents/FamilyYear';
import SVO from '../../BannersComopnents/svo';



const GorodPobratim = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 ${s.breadcrumbs}`}>
               <span className={s.breadcrumbsFrom}>Новости</span>
               <span className={s.breadcrumbsTo}> / Город-побратим</span>
            </div>
            <div className={`mt24 ${s.title}`}>Город-побратим</div>
            <div className="mt80 columnContainer">
               <div className="columnLarge">

                  <img className={s.imgMain} src={mainImg} alt="" />
                  <div className={`mt80 ${s.mainTextContainer}`}>
                     <div className={s.subtitle}>Гродно</div>
                     <div className={`mt38 ${s.textBody}`}>
                        <p>
                           Город в Белоруссии, административный центр Гродненской области.
                        </p>
                        <p>
                           Город расположен в западной части области, на берегах Немана, на границе с Польшей и Литвой (в 15 и 30 км соответственно). Узел автомобильных и железнодорожных путей. Население по состоянию на 1 января 2015 года — 361 358 человек. Главой города является председатель городского исполнительного комитета (горисполкома) — Мечислав Брониславович Гой.
                        </p>
                        <p>
                           Гродно — один из самых старых городов Белоруссии. В летописях впервые упоминается в 1005 году. В 1376 году Гродно был присоединен к владениям князя Витовта. Начиная с 1569 года город находится в составе Речи Посполитой. В 1795 году Гродно был присоединен к Российской империи, а в 1801 году стал губернским городом. В 1912 году вокруг города было начато строительство Гродненской крепости. В связи с началом Первой мировой войны, закончить эти работы не удалось. 2 сентября 1915 года город был захвачен германской армией. 23 июня 1941 года Гродно был оккупирован немецкими войсками. Освобождён Красной армией 16 июля 1944 года. 20 сентября 1944 года город стал административным центром вновь созданной Гродненской области. Этот статус сохранил и после образования Республики Беларусь в 1991 году.
                        </p>
                        <p>
                           Ведущими отраслями в городе являются машиностроение и металлообработка, химическая, текстильная, кожевенно-обувная, стройматериалов. Наиболее крупные предприятия — ОАО «Гродно Азот» (в состав которого входит ПТК «Химволокно») и ОАО «Белкард».
                        </p>
                        <div className={s.footnote}>
                           Официальный портал Гродненского городского исполнительного комитета:
                        </div>
                        <a href="" className={`mt38 btnWBanner ${s.btn}`}> <img src={icon} alt="" /> grodno.gov.by</a>
                     </div>
                     
                  </div>



                  <div className="mt120">
                     <VirtualMuseumLarge />
                  </div>
               </div>
               <div className="ml20 columnSmal">
                  <FamilyYear />
                  <div className="mt40">
                     <SVO />
                  </div>
               </div>
            </div>



            <UsefulSourse />

         </ContantContainerMain>
      </div>
   )
}
export default GorodPobratim;