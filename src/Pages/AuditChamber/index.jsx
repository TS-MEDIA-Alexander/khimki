import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './AuditChamber.module.css';

/* Фото */
import plug from '../../assets/img/khimkiDistrict/Symbolism/plug.svg';
import CardHuman from '../../Components/CardHuman';

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
            <CardHuman
               jobTitle={'Председатель палаты'}
               name={'Меликова'}
               surname={'Надежда Александровна'}
               info={'ул. Московская, 15'}
               WorkingHours={'Пн-Чт 9:00-18:00, Пт 9:00-16:45, 13:00-13:45'}
               contactsArr={['+7 (495) 572-50-04', 'info@ksphimki.ru', 'ksphimki.ru']}
               img={plug}
            />
         </ContantContainerMain>
      </div>
   )
}
export default AuditChamber;