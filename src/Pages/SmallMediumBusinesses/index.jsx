import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './SmallMediumBusinesses.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import LinkContainer from '../../Components/LinkContainer';

const SmallMediumBusinesses = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Малое и среднее предпринимательство</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Малое и среднее</p>
               предпринимательство
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/normativno-pravovye-akty/' text={'Правовые и нормативные акты'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/novosti/' text={'Новости'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/municipalnye-programmy/predprinimatelstvo/' text={'Муниципальная программа развития МСП'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/formy-finansovoj-podderzhki-msp-v-moskovskoj-oblasti/' text={'Формы финансовой поддержки МСП в Московской области'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/imushestvennaya-podderzhka-subektov-msp/' text={'Имущественная поддержка МСП'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/informaciya-o-svobodnyh-mestah-provedeniya-yarmarok_/' text={'Информация о свободных местах проведения ярмарок'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/poryadok-formirovaniya-i-vedeniya-perechnya-municipalnogo-imushestva-za-isklyucheniem-zemelnyh-uchastkov' text={'Порядок формирования и ведения перечня муниципального имущества (за исключением земельных участков)'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/vykup-imushestva-za-isklyucheniem-zemelnyh-uchastkov' text={'Выкуп имущества (за исключением земельных участков)'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/priem-predprinimatelej-glavoj-gorodskogo-okruga-himki/' text={'Прием предпринимателей Главой городского округа Химки'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/goryachaya-liniya-dlya-obrasheniya-mspkniga-zhalob-i-predlozhenij/' text={'Горячая линия для обращения МСП/книга жалоб и предложений (перенести на основную страницу «Малое и среднее предпринимательство»)'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/kovorking-centr/' text={'Коворкинг- центр'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/nestacionarnye-torgovye-obekty/' text={'Нестационарные торговые объекты'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/predostavlenie-imushestva-za-isklyucheniem-zemelnyh-uchastkov/' text={'Предоставление имущества (за исключением земельных участков)'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/upolnomochennyj-po-zashite-prav-predprinimatelej-v-moskovskoj-oblasti-i-ego-apparat/' text={'Уполномоченный по защите прав предпринимателей в Московской области и его Аппарат'} /></div>
               <div className="mt24"><LinkContainer link={ROUTER.activity.smallMediumBusinesses.contests} text={'Конкурсы на предоставления финансовой поддержки'} /></div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default SmallMediumBusinesses;