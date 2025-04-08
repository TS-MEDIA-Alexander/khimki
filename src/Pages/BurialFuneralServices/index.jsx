import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './BurialFuneralServices.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import CardHuman from '../../Components/CardHuman';

import LinkContainer from '../../Components/LinkContainer';

const BurialFuneralServices = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Погребение и похоронное дело</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Погребение и похоронное дело</h1>

            <CardHuman
               jobTitle={'Муниципальное казенное учреждение «Специализированная служба в сфере погребения и похоронного дела»'}
               subtitle={'Руководитель - Брунь Александр Сергеевич; <br/> Заместитель руководителя - Шпаченко Борис Викторович'}
               info={'Московская обл., г.о. Химки, пр. Мельникова, д. 18, пом. 7'}
               WorkingHours={'Пн-Чт с 9-00 до 18-00, Пт с 9-00 до 16-45, Сб с 10-00 до 16-00, Перерыв с 13-00 до 13-45'}
               contactsArr={['+7 (495) 123-38-80', '+7 (498) 568-99-99', 'mkuritual@admhimki.ru']}
            />

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/pogrebenie-i-pohoronnoe-delo/normativno-pravovye-akty/' text={'Нормативно-правовые акты'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/pogrebenie-i-pohoronnoe-delo/municipalnye-uslugi-v-sfere-pogrebeniya-i-pohoronnogo-dela/' text={'Муниципальные услуги в сфере погребения и похоронного дела'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/pogrebenie-i-pohoronnoe-delo/perechen-kladbish/' text={'Перечень кладбищ'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/pogrebenie-i-pohoronnoe-delo/prinuditelnyj-demontazh/' text={'Принудительный демонтаж'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/pogrebenie-i-pohoronnoe-delo/kontaktnaya-informaciya/' text={'Контактная информация'} /></div>
               <div className="mt24"><LinkContainer link='https://gurb.mosreg.ru/deyatelnost/pogrebenie-i-pokhoronnoe-delo/novosti-po-teme/26-03-2024-12-38-21-kak-zakhoronit-i-poluchit-vyplaty-semyam-pogibshikh' text={'Как захоронить и получить выплаты семьям погибших и пострадавшим при теракте в Крокус Сити холл'} /></div>
               <div className="mt24">
                  <LinkContainer link={ROUTER.activity.burialFuneralServices.memorialServicesCenter} text='Государственное бюджетное учреждение Московской области «Центр мемориальных услуг»' />
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default BurialFuneralServices;
