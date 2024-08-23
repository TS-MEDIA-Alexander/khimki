import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MunicipalPrograms.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

import VirtualReceptionMin from '../../BannersComopnents/VirtualReceptionMin';
import PerformanceIndicators from '../../BannersComopnents/PerformanceIndicators';
import LinkContainer from '../../Components/LinkContainer';


const MunicipalPrograms = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Муниципальные программы</span>
            </div>
            <div className="mt80 pageTitle">Муниципальные программы</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <div className={s.column}>
                  <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Здравоохранение' />
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Культура' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Образование' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Социальная защита населения городского округа Химки' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Спорт городского округа Химки' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Развитие сельского хозяйства' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Экология и окружающая среда' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Безопасность и обеспечение безопасности жизнедеятельности населения' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Жилище' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Развитие инженерной инфраструктуры, энергоэффективности и отрасли обращения с отходами' />
                  </div>
               </div>
               <div className={s.column}>
                  <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Предпринимательство' />
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Управление имуществом и финансами' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Развитие институтов гражданского общества, повышение эффективности местного самоуправления и реализации молодежной политики' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Развитие и функционирование дорожно-транспортного комплекса' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Цифровое муниципальное образование' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Архитектура и градостроительство' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Формирование современной городской среды' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Строительство объектов социальной инфраструктуры' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Переселение граждан из аварийного жилищного фонда' />
                  </div>
                  <div className="mt20">
                     <LinkContainer /* link={ROUTER.activity.auctionsAndTrades} */ text='Комплексная программа' />
                  </div>
               </div>
            </div>

            <div className={`mt80 rowBlock mobileNoneContainer`}>
               <VirtualReceptionMin />
               <PerformanceIndicators />
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default MunicipalPrograms;