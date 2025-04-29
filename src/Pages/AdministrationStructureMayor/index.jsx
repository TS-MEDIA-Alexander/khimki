import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './AdministrationStructureMayor.module.css';

/* Фото */
import mayorPortrain from '/home/frontend/Рабочий/khimki/src/assets/img/Persons/zev_structure_of_dist.png';
import clock from '../../assets/icons/clock.svg';
import ok from '../../assets/icons/ok.svg';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';

import FamilyYear from '../../BannersComopnents/Year';
import SVO from '../../BannersComopnents/svo';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';



const AdministrationStructureMayor = (props) => {
   return (
      <div>
         <ContantContainerMain>

            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.administrationStructure} className='breadcrumbsTo'> / Структура администрации </NavLink>
               <span className='breadcrumbsTo'> / Глава городского округа </span>
            </div>
            <h1 className={`mt24 pageTitle`}>Глава городского округа </h1>
            <div className="columnContainer">
               <div className="columnLarge">
                  <div className={`mt80  ${s.card}`}>
                     <div className={s.portrainContainer}>
                        <img src={mayorPortrain} alt="" />
                     </div>
                     <div className={s.rightContainer}>
                        <div className={`mt8 ${s.cardSurname}`}>Землякова</div>
                        <div className={s.cardName}>Елена Владимировна</div>

                        <NavLink to={ROUTER.citizensAppeals.virtualReceptionHeadCityDistrict} className={`mt48 btnY ${s.virtualBtn}`}>Виртуальная приемная </NavLink>

                        <div className={`mt24 ${s.cardBtnRow}`}>
                           <div className={`oval`}>+7 (495) 793-01-01
                              <div className={s.cardBtnImgContainer}><img src={clock} alt="" /></div>
                              <div className={s.schedule}>Круглосуточно </div>
                           </div>
                           <a href='https://vk.com/gohimkiadm' target='_blank' className={s.cardBtnLink} rel="noreferrer"><img src={ok} alt="" /></a>
                           <a href='https://t.me/adm_himki' target='_blank' className={s.cardBtnLink} rel="noreferrer"><img src={vk} alt="" /></a>
                           <a href='https://ok.ru/profile/580707341478' className={s.cardBtnLink}><img src={telegram} alt="" /></a>
                        </div>
                     </div>
                  </div>

                  <div className={`mt80 text`}>
                     Чуткая и открытая власть — принцип, которым мы руководствуемся в нашей командной работе. Наш округ — живой организм. Он развивается, растет, меняется... Возникают новые потребности, что-то приходит в негодность, требует ремонта или замены. Без помощи жителей невозможно сделать действительно комфортный и безопасный для проживания округ. Только вместе мы сможем оперативно решать возникающие проблемы. Комплексный подход ко всему приведет нас к общему успеху. Я прошу использовать все каналы связи для общения: телефоны горячей линии, электронную почту, социальные сети. Мы приняли меры, чтобы обращения жителей решались еще более оперативно. Работает круглосуточная горячая линия во всех микрорайонах округа. Я лично просматриваю свою электронную почту. Мы открыты для общения в любое время. Качественно повысить уровень жизни химчан — наша основная задача. Только реальные дела, только работа на результат!

                     <div className={`mt32 fw600`}>Дата рождения</div>
                     7 ноября 1979 года

                     <div className={`mt32 fw600`}>Образование</div>
                     <p>2005-2010: Академия народного хозяйства при Президенте РФ</p>
                     <p>Факультет: международного бизнеса и делового администрирования.</p>

                     <div className={`mt32 fw600`}>Специальность:</div>
                     <p>Экономика и управление.</p>
                     <p>2010-2012: Российская академия народного хозяйства и государственной службы при</p>
                     <p>Президенте РФ (магистратура).</p>
                     Специальность: Земельно-имущественные отношения.

                     <div className={`mt32 fw600`}>Трудовая деятельность</div>
                     <p>С 2002-2008: в коммерческих структурах, на различных должностях.</p>
                     <p>Август 2008 – август 2009: Департамент жилищной политики и жилищного фонда города Москвы, Управление ЮЗАО, ведущий специалист отдела по работе с населением.</p>
                     <p>Август 2009 – февраль 2011: Департамент жилищной политики и жилищного фонда города Москвы, заместитель начальника Управления ЮЗАО.</p>
                     <p>Апрель 2011 – ноябрь 2014: Российская академия народного хозяйства и государственной службы при Президенте РФ, заместитель декана факультета экономики и недвижимости по административной работе. Директор экспертного центра ФЭН РАНХиГС.</p>
                  </div>
               </div>
               <div className="mt80 columnSmal">
                  <FamilyYear />
                  <div className="mt20">
                     <SVO />
                  </div>
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default AdministrationStructureMayor;
