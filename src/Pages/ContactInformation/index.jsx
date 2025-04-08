import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import Table from '../../Components/Table';
import uchastkiTable from '../../assets/tables/uchastki.json';
import s from './ContactInformation.module.css';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const ContactInformation = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.tic} className='breadcrumbsTo'> / ТИК города Химки </NavLink>
               <span className='breadcrumbsTo'> / Контактная информация избирательных участков, образованных на территории городского округа Химки</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Контактная информация</p>
               <p>избирательных участков, </p>
               <p>образованных на территории</p>
               <p>городского округа Химки</p>
            </div>

            <div className={`mt80 borderMain ${s.documentContainer}`}>
               <DocumentContainerDownload type={'PDF'} text='Постановление Администрации городского округа Химки Московской области от 14.12.2023 № 2010 «О внесении изменения в постановление Администрации городского округа Химки Московской области от 27.10.2017 № 1086 «Об образовании избирательных участков на территории городского округа Химки Московской области' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к постановлению Администрации от 14.12.2023 № 2010 «Приложение к постановлению Администрации от 27.10.2017 № 1086. Границы избирательных участков на территории городского округа Химки»' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Постановление Администрации городского округа Химки Московской области от 06.04.2023 № 527 «О внесении изменений в постановление Администрации городского округа Химки Московской области от 27.10.2017 № 1086 «Об образовании избирательных участков на территории городского округа Химки Московской области»»' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к постановлению Администрации от 06.04.2023 № 527 «Границы избирательных участков на территории городского округа Химки»' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Постановление Администрации городского округа Химки Московской области от 27.10.2017 № 1086 «Об образовании избирательных участков на территории городского округа Химки Московской области»' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к постановлению Администрации от 27.10.2017 № 1086 «Границы избирательных участков на территории городского округа Химки»' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к постановлению Администрации от 18.06.2020 № 425' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Решение ТИК г. Химки от 17.03.2020 № 11 "Об образовании на территории городского округа Химки Московской области избирательных участков в местах временного пребывания избирателей в день общероссийского голосования' date="06.02.2023" />

     
            </div>

            <div className={`mt80 ${s.subtitle}`}>Границы избирательных участков на территории городского округа Химки</div>
            <div className="mt40">
               <Table table={uchastkiTable} style={s} />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default ContactInformation;