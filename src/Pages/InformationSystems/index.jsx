import React, { useEffect, useState } from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import Table from '../../Components/Table';
import s from './InformationSystems.module.css';
import cifrovie_resurs from '../../assets/tables/cifrovie_resurs.json';
import information_systems from '../../assets/tables/information_systems';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const InformationSystems = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Информационные системы</span>
            </div>
            <div className={`mt24 pageTitle`}>Информационные системы</div>

            <div className="mt80 pageSubtitle">
               <p>Перечень информационных систем, находящихся в ведении администрации городского</p>
               округа, её структурных подразделений, подведомственных учреждений
            </div>
            <div className={`mt38 text`}>В ведении администрации городского округа химки московской области находятся информационные системы (ис):</div>
            <div className="mt40">
               <Table table={information_systems} style={s} />
            </div>

            <div className="mt80 pageSubtitle">
               <p>Перечень цифровых информационных ресурсов в сфере культуры городского округа</p>
               химки московской области
            </div>
            <div className={`mt38 text`}>
               Утвержден Постановлением Администрации городкого округа Химки Московской области от 26.02.2019 № 128 "Об
               утверждении Перечня цифровых информационных ресурсов в сфере культуры городского округа Химки 
               Московской области"</div>
            <div className="mt40">
               <Table table={cifrovie_resurs} style={s} />
            </div>

            <div className="mt80 pageSubtitle">
               Политика в отношении обработки персональных данных
            </div>
            <div className={`mt40 borderMain ${s.documentContainer}`}>
               <DocumentContainerDownload type={'PDF'} text='Постановление администрации г.о. химки от 18.03.2021 № 235 "об утверждении политики администрации городского округа химки московской области в отношении обработки персональных данных"' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к постановлению администрации городского округа химки московской области от 18.03.2021 № 235 "политика администрации городского округа химки московской области в отношении обработки персональных данных"' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Распоряжение министерства государственного управления, информационных технологий и связи московской области от 1 декабря 2015 г. n 10-33/рв' date="06.02.2023" />
            </div>

            <div className="mt80 pageSubtitle">
               Документы администрации городского округа в сфере защиты информации
            </div>
            <div className={`mt40 borderMain ${s.documentContainer}`}>
               <DocumentContainerDownload type={'PDF'} text='Распоряжение Администрации г.о. Химки от 22.04.2020 № 40-р "Об утверждении Плана по обеспечению защиты информации в Администрации городского округа Химки Московской области на 2020 год"' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к распоряжению Администрации от 22.04.2020 № 40-р "План по обеспечению защиты информации в Администрации городского округа Химки Московской области, органах Администрации, наделенных правами юридического лица, на 2020 год"' date="06.02.2023" />
            </div>




         </ContantContainerMain>
      </div>
   )
}
export default InformationSystems;