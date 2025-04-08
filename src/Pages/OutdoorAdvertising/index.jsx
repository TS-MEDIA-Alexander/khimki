import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './OutdoorAdvertising.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import CardHuman from '../../Components/CardHuman';

import LinkContainer from '../../Components/LinkContainer';

const OutdoorAdvertising = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Наружная реклама</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Отдел рекламы МКУ «Управление</p>
               делами администрации»
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/naruzhnaya-reklama/normativno-pravovye-akty/' text={'Правовые и нормативные акты'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/naruzhnaya-reklama/shema-razmesheniya-reklamnyh-konstrukcij-gorodskogo-okruga-himki/' text={'Схема размещения рекламных конструкций городского округа Химки'} /></div>
            </div>

            <div className="mt80 pageSubtitle">Начальник управления</div>
            <CardHuman
               jobTitle={'Заместитель руководителя – начальник отдела рекламы'}
               name={'Дуденков'}
               surname={'Юрий Викторович'}
               adress={'г. Химки, ул. Пролетарская, 6'}
               WorkingHours={'Пн-Чт с 9-00 до 18-00, Пт с 9-00 до 16-45, Перерыв с 13-00 до 13-45'}
               contactsArr={['+7 (495) 572-00-96', 'reklama@admhimki.ru']}
            />

         </ContantContainerMain>
      </div>
   )
}
export default OutdoorAdvertising;