import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './PublicPrivatePartnership.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import ministry_economic_development from '../../assets/img/activity/ministry_economic_development.png';
import ministryInvestment from '../../assets/img/activity/ministry_investment.png';

import LinkContainer from '../../Components/LinkContainer';

const PublicPrivatePartnership = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Государственно-частное партнерство</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Государственно-частное партнерство</h1>

            <div className="mt80 text">
               <p>
                  Государственно-частное партнерство вступает в силу 1 января 2016 г. Федеральный закон от 13 июля 2015 г. N 224-ФЗ "О государственно-частном партнёрстве, муниципально-частном партнёрстве в Российской Федерации и внесении изменений в отдельные законодательные акты Российской Федерации" (за исключением статьи 46, которая вступила в силу 14 июля 2015 г.).
               </p>
               <p>
                  Статья 1. Цели настоящего Федерального закона <br />
                  Статья 2. Основные принципы государственно-частного партнерства  <br />
                  Статья 3. Правовое регулирование государственно-частного партнерства  <br />
                  Статья 4. Участники государственно-частного партнерства <br />
                  Статья 5. Предмет государственно-частного партнерства <br />
                  Статья 6. Основания и порядок возникновения государственно-частного партнерства <br />
                  Статья 7. Регулирование государственно-частного партнерства на федеральном уровне <br />
                  Статья 8. Регулирование государственно-частного партнерства на региональном уровне <br />
               </p>
            </div>

            <div className={`mt80  ${s.linkContainerColumn}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`borderMain ${s.link} ${s.link_min} ${s.mobilCardLink}`}>
                  <div className={s.logoContainer}><img src={ministry_economic_development} alt="" /></div>
                  <div className={s.textContainer}>
                     <div className={s.description}>Полезный ресурс</div>
                     <div className={s.text}>Министерство
                        экономического развития
                        Российской Федерации</div>
                  </div>
                  <div className={`btnCircleG imgContainerArrow ${s.mobilArrowNone}`}><img src={arrow} alt="" /></div>
               </NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`borderMain ${s.link} ${s.link_min} ${s.mobilCardLink}`}>
                  <div className={s.logoContainer}><img src={ministryInvestment} alt="" /></div>
                  <div className={s.textContainer}>
                     <div className={s.description}>Полезный ресурс</div>
                     <div className={s.text}>Министерство
                        экономического развития
                        Российской Федерации</div>
                  </div>
                  <div className={`btnCircleG imgContainerArrow ${s.mobilArrowNone}`}><img src={arrow} alt="" /></div>
               </NavLink>
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/gosudarstvenno-chastnoe-partnerstvo/normativnaya-baza/' text={'Нормативная база'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/investicii/proekty/' text={'Проекты'} /></div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PublicPrivatePartnership;
