import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './AuditChamber.module.css';

/* Фото */
import CardHuman from '../../Components/CardHuman';

const AuditChamber = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Контрольно-счетная палата </span>
            </div>
            <h1 className={`mt24 pageTitle`}>Контрольно-счетная палата </h1>

            <div className={`mt80 pageSubtitle`}>Деятельность палаты</div>
            <div className={`mt38 text`}>
               Контрольно-счетная палата городского округа Химки Московской области является постоянно действующим органом внешнего муниципального финансового контроля и призвана осуществлять контроль за законным и эффективным использованием средств бюджета городского округа Химки.
            </div>
            <CardHuman
               jobTitle={'Председатель палаты'}
               name={'Барабенов'}
               surname={'Павел Александрович'}
               info={'г. Химки, ул. Кирова, д.24'}
               WorkingHours={'Пн-Чт 9:00-18:00, Пт 9:00-16:45, 13:00-13:45'}
               contactsArr={['+7 (495) 572-50-04', 'info@ksphimki.ru', 'ksphimki.ru']}
            />
         </ContantContainerMain>
      </div>
   )
}
export default AuditChamber;
