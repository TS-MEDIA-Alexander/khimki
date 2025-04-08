import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './PublicChamberListCommissions.module.css';
import Table from '../../Components/Table';
import komissii_palat from '../../assets/tables/komissii_palat.json';

const PublicChamberListCommissions = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.publicChamber} className='breadcrumbsFrom'> / Общественная палата</NavLink>
               <span className='breadcrumbsTo'> / Перечень Комиссий Общественной палаты</span>
            </div>
            <h1 className="mt24 pageTitle">
               <p>Перечень Комиссий</p>
               Общественной палаты
            </h1>
            <div className={`mt80 ${s.title}`}>
               <p>Перечень комиссий общественной палаты городского округа</p> Химки Московской области
            </div>

            <div className={`mt38 ${s.text}`}>
               <p>
                  Утверждено решением Общественной палаты городского округа Химки Московской области от 21.02.2025 года.
               </p>
               <ol className={s.targetContainer}>
                  <li className='mt38'>Комиссия по экологии и природопользованию</li>
                  <li>Комиссия по патриотическому воспитанию, работе с молодёжью и работе с интернет сообществом</li>
                  <li>Комиссия по добровольчеству (волонтерству), благотворительности и поддержке семей военнослужающих</li>
                  <li>Комиссия по территориальной безопасности, защите прав граждан, противодействию коррупции, по миграционной политике, межнациональным и межконфессиональным отношениям</li>
                  <li>Комиссия по науке, промышленности, связи и экономическому развитию</li>
                  <li>Комиссия по культуре и образованию</li>
                  <li>Комиссия по социальной политике и трудовым отношениям</li>
                  <li>Комиссия по градостроительной политике и земельным отношениям</li>
                  <li>Комиссия по торговле и предпринимательству</li>
                  <li>Комиссия по ЖКХ, транспорту, дорожному хозяйству и благоустройству</li>
                  <li>Комиссия по здравоохранению</li>
                  <li>Комиссия по сохранению и укреплению традиционных российских духовно-нравственных ценностей</li>
                  <li>Комиссия по развитию спорта и туризма</li>
               </ol>
            </div>

            <div className={`mt38 ${s.title}`}>
               Комиссии общественной палаты г.о. Химки
            </div>

            <div className="mt32">
               <Table table={komissii_palat} style={s} />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default PublicChamberListCommissions;
