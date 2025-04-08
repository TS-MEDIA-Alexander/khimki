import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './CommunalServices.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import LinkContainer from '../../Components/LinkContainer';


const CommunalServices = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / ЖКХ</span>
            </div>
            <h1 className={`mt24 pageTitle`}>ЖКХ</h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/upravlyayushie-kompanii-normativnye-dokumenty/' text={'Управляющие организации г. о. Химки'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/oplatit-zhilishno-kommunalnye-uslugi/' text={'Оплатить жилищно-коммунальные услуги'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/sodejstvie-upravleniyu-mnogokvartirnymi-domami/' text={'Содействие управлению многоквартирными домами'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/razdelnyj-sbor-musora/' text={'Раздельный сбор мусора'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/ezhemesyachnaya-denezhnaya-kompensaciya/' text={'Ежемесячная денежная компенсация'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/dni-otkrytyh-dverej/' text={'Дни открытых дверей'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/grafik-otklyucheniya-goryachej-vody-na-2020-god/' text={'Графики отключения горячей воды'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/planovye-otklyucheniya-elektroenergii/' text={'Плановые отключения электроэнергии'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/obshee-sobranie-sobstvennikov-pomeshenij-v-mnogokvartirnom-dome-v-forme-zaochnogo-golosovaniya-s-ispolzovaniem-sistemy-eais-zhkh-moskovskoj-oblasti/' text={'Общее собрание собственников помещений в многоквартирном доме в форме заочного голосования с использованием системы (ЕАИС ЖКХ Московской области)'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/grafik-vklyucheniya-otopleniya-na-socialnyh-obektah-gorodskogo-okruga-himki/' text={'График включения отопления в городском округе Химки на 2020 год'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/socialnaya-gazifikaciya/' text={'Социальная газификация'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/remont-podezdov-s-ispolzovaniem-sredstv-subsidij/' text={'Ремонт подъездов с использованием средств субсидий'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zhkh/novosti/' text={'Новости'} /></div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default CommunalServices;
