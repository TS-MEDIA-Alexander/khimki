import React from 'react';
import s from './LegalRegulation.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import ContantContainerMain from '../../total/ContantContainerMain';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const LegalRegulation = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.citizensAppeals.main} className='breadcrumbsFrom'>Обращения граждан </NavLink>
               <span className='breadcrumbsTo'> / Правовое регулирование</span>
            </div>

            <div className="mt24 pageTitle">Правовое регулирование</div>
            <div className="mt80 text">
               <p>
                  Прием, рассмотрение, подготовка ответов и предоставление или направление ответов на обращения граждан осуществляются в соответствии с федеральным законодательством, законодательством Московской области, а также правовыми и нормативными документами городского округа Химки.
               </p>
            </div>
            <div className={`mt40 borderMain borderDocumentContainer`}>
               <DocumentContainerDownload type={'PDF'} text='Конституция Российской Федерации' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='От 11 февраля 1993 г. № 4462-1 «Основы законодательства Российской Федерации о нотариате» (Ст. 59)' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Федеральный закон от 6 октября 2003 г. № 131-ФЗ «Об общих принципах организации местного самоуправления в Российской Федерации»  (Ст. 38)' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Федеральный закон от 27 июля 2006 г. № 149-ФЗ "Об информации, информационных технологиях и о защите информации»' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Федеральный закон от 27 июля 2006 г. № 152-ФЗ «О персональных данных»' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Федеральный закон от 9 февраля 2009 г № 8-ФЗ «Об обеспечении доступа к информации о деятельности государственных органов и органов местного самоуправления»' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Закон Московской области от 5 октября 2006 г. № 164/2006-ОЗ «О рассмотрении обращений граждан»' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Устав городского округа Химки Московской области ' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Постановление Администрации г.о. Химки от 01.07.2024 № 1070 "Об утверждении регламента  рассмотрения обращений граждан в Администрации  городского округа Химки Московской области"' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Регламент рассмотрения обращений граждан  в Администрации городского округа Химки Московской области' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Приложение 1 к Регламенту рассмотрения обращений граждан в Администрации городского округа Химки Московской области "Сведения о местонахождении, почтовом адресе и адресе электронной почты администрации городского округа Химки Московской области, справочных телефонах"' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Приложение 2 к Регламенту рассмотрения обращений граждан в Администрации городского округа Химки Московской области "Карточка личного приема"' date='06.02.2023' />
            </div>

            <div className="mt80 pageSubtitle">Архив</div>
            <div className={`mt40 borderMain borderDocumentContainer`}>
               <DocumentContainerDownload type={'PDF'} text='Постановление Администрации г.о. Химки Московской области от 20.01.2022 № 33 "Об утверждении регламента рассмотрения обращений граждан в Администрации городского округа Химки Московской области" утратил силу Постановление Администрации г.о. Химки от 01.07.2024 № 1070' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Регламент рассмотрения обращений граждан в Администрации городского округа Химки Московской области' date='06.02.2023' />
               <DocumentContainerDownload type={'PDF'} text='Приложение к Регламенту рассмотрения обращений граждан в Администрации городского округа Химки Московской области «Сведения о местонахождении, почтовом адресе и адресе электронной почты Администрации городского округа Химки Московской области, справочных телефонах»' date='06.02.2023' />
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default LegalRegulation;