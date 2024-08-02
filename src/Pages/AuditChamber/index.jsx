import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './AuditChamber.module.css';

/* Фото */
import plug from '../../assets/img/khimkiDistrict/Symbolism/plug.svg';

const AuditChamber = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Контрольно-счетная палата </span>
            </div>
            <div className={`mt24 pageTitle`}>Контрольно-счетная палата </div>

            <div className={`mt80 ${s.title}`}>Деятельность палаты</div>
            <div className={`mt38 ${s.text}`}>
               Контрольно-счетная палата городского округа Химки Московской области является постоянно действующим органом внешнего муниципального финансового контроля и призвана осуществлять контроль за законным и эффективным использованием средств бюджета городского округа Химки.
            </div>
            <div className={`mt80 borderMain ${s.card}`}>
               <div className={s.portrainContainer}>
                  <img src={plug} alt="" />
               </div>
               <div className={s.rightContainer}>
                  <div className={`mt8 ${s.cardSurname}`}>Председатель палаты</div>
                  <div className={`mt24 ${s.cardName}`}>Меликова</div>
                  <div className={s.cardSurname}>Надежда Александровна</div>

                  <div className={`mt40 ${s.cardMoreDetails}`}>ул. Московская, 15</div>
                  <div className={s.time}><div className={`${s.cardMoreDetails}`}>Режим работы: </div> Пн-Чт 9:00-18:00, Пт 9:00-16:45, 13:00-13:45</div>

                  <div className={`mt24 ${s.cardBtnRow}`}>
                     <div className={`oval ${s.cardTel}`}>+7 (495) 572-50-04</div>
                     <div className={`oval ${s.cardTel}`}>info@ksphimki.ru</div>
                     <div className={`oval ${s.cardTel}`}>ksphimki.ru</div>
                  </div>
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default AuditChamber;