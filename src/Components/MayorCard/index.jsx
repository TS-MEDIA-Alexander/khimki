import React from 'react';
import s from './MayorCard.module.css';

import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

import clock from '../../assets/icons/clock.svg';
import ok from '../../assets/icons/ok.svg';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import mayorPortrain from '../../assets/img/khimkiDistrict/mayorPortrain.png';

const MayorCard = (props) => {
   return (
      <div className={`mt80 borderMain ${s.card}`}>
         <div className={s.portrainContainer}>
            <img src={mayorPortrain} alt="" />
         </div>
         <div className={s.rightContainer}>
            <div className={s.cardSubtitle}>Глава городского округа </div>
            <div className={`mt8 ${s.cardSurname}`}>Волошин</div>
            <div className={s.cardName}>Дмитрий Владимирович</div>
            <div className={`mt8 ${s.citation}`}>Чуткая и открытая власть — принцип, которым мы руководствуемся в нашей командной работе. Наш округ — живой организм. Он развивается, растет, меняется... Возникают новые потребности, что-то приходит в негодность, требует ремонта или замены. Без помощи жителей невозможно сделать действительно комфортный и безопасный для проживания округ. Только вместе мы сможем оперативно решать возникающие проблемы. Комплексный подход ко всему приведет нас к общему успеху. Я прошу использовать все каналы связи для общения: телефоны горячей линии, электронную почту, социальные сети. Мы приняли меры, чтобы обращения жителей решались еще более оперативно. Работает круглосуточная горячая линия во всех микрорайонах округа. Я лично просматриваю свою электронную почту. Мы открыты для общения в любое время. Качественно повысить уровень жизни химчан — наша основная задача. Только реальные дела, только работа на результат!</div>
            <NavLink to={ROUTER.khimkiDistrict.administrationStructureMayor} className={`mt8 ${s.cardMoreDetails}`}>Подробнее</NavLink>
            <div className={`mt48 ${s.cardBtnRow}`}>
               <div className={`btnY ${s.virtualBtn}`}>Виртуальная приемная </div>
               <div className='oval'>+7 (495) 793-01 01
                  <div className={s.cardBtnImgContainer}><img src={clock} alt="" /></div>
                  <div className={s.schedule}>Круглосуточно </div>
               </div>
               <div className={s.cardBtnLink}><img src={ok} alt="" /></div>
               <div className={s.cardBtnLink}><img src={vk} alt="" /></div>
               <div className={s.cardBtnLink}><img src={telegram} alt="" /></div>
            </div>
         </div>
      </div>
   )
}
export default MayorCard;