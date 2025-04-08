import React from 'react';
import s from './ReceptionProcedureTime.module.css';

import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

import ContantContainerMain from '../../total/ContantContainerMain';
import MayorCard from '../../Components/MayorCard';
import arrow from '../../assets/icons/arrowYellow.svg';
import arrowBtn from '../../assets/icons/arrow_btn_link.svg';
import Table from '../../Components/Table';
import LinkContainer from '../../Components/LinkContainer';
/* import GovernmentServices from '../../BannersComopnents/GovernmentServices';
import GovernmentServicesLargeMin from '../../BannersComopnents/GovernmentServicesLargeMin'; */

import graphik_glava from '../../assets/tables/graphik_glava/graphik_glava-april.json'

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
            </div>
            <div className="mt80">
               <MayorCard />
            </div>
            <div className="mt80 text">
               <div className="pageSubtitle">
                  График личного приёма граждан Главой городского округа <br />
                  и заместителями Главы городского округа Химки
                  в апреле 2025 года 
               </div>
               <p>
                  Информацию о порядке записи на приём и порядке проведения приёмов можно получить по телефону с 9.00 до 18.00 (пятница с 9.00 до 16.45), кроме выходных и праздничных дней
               </p>
            </div>
            <div className="mt40 flexContainer">
               <div className="oval">+7 (495) 572-73-38</div>
               <a href='https://old.admhimki.ru/dokumenty/poryadok-i-vremya-priema-arhiv/' target="_blank" className={`btnY ${s.virtualBtn}`}>Архив графиков <img src={arrow} alt="" /></a>
            </div>

            {/* <div className="columnContainer">
               <div className="columnLarge">
                  <Table table={graphik_glava} />
               </div>
               <div className="ml20 columnSmal">
                  <GovernmentServicesLargeMin />
                  <div className="mt20">
                     <GovernmentServices />
                  </div>
               </div>
            </div> */}

            <div className="mt40">
               <Table table={graphik_glava} />
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/stranica-nahoditsya-v-stadii-dorabotki-i-napolneniya-/' text={'График встреч жителей городского округа с Администрацией'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/rabota-s-obrasheniyami-grazhdan/poryadok-i-vremya-priema-2/grafik-lichnogo-priyoma-grazhdan-v-obshestvennyh-priyomnyh-organov-ispolnitelnoj-vlasti-moskovskoj-oblasti-i-organov-mestnogo-samoupravleniya-moskovsk/' text={'График личного приёма граждан в общественных приёмных исполнительных органов Московской области'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/stranica-nahoditsya-v-stadii-dorabotki-i-napolneniya-/' text={'График личного приёма граждан Председателем Совета депутатов городского округа'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/rabota-s-obrasheniyami-grazhdan/poryadok-i-vremya-priema-2/grafik-priema-grazhdan-v-priyomnoj-pravitelstva-moskovskoj-oblasti-advokatami-moskovskoj/' text={'График приёма граждан в Приёмной Правительства Московской области'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/rabota-s-obrasheniyami-grazhdan/poryadok-i-vremya-priema-2/den-priema-grafik-priema-sotrudnikami-administraciii-i-podvedomstvennyh-uchrezhdenij-i-predstavitelyami-territorialnyh-organov-gosudarstvennoj-vlasti-/' text={'"День приема" График приема сотрудниками Администрации и подведомственных учреждений и представителями территориальных органов государственной власти в МФЦ городского округа Химки'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/rabota-s-obrasheniyami-grazhdan/poryadok-i-vremya-priema-2/grafik-provedeniya-tematicheskih-priemov-grazhdan/' text={'График проведения тематических и личных приемов граждан'} /></div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default ReceptionProcedureTime;