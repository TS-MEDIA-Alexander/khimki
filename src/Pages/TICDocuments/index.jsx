import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './TICDocuments.module.css';

import DocumentContainerDownload from '../../Components/DocumentContainerDownload';
import LinkContainer from '../../Components/LinkContainer';

const TICDocuments = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.tic} className='breadcrumbsTo'> / ТИК города Химки </NavLink>
               <span className='breadcrumbsTo'> / Документы</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Документы </h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/dokumenty/resheniya-tik-goroda-himki/' text={'Решения ТИК города Химки'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/pasport-municipalnogo-obrazovaniya/' text={'Паспорт муниципального образования'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/postanovleniya_t_izbir_komis/' text={'Постановления'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/resheniya-izbiratelnoj-komissii-moskovskoj-oblasti/' text={'Решения Избирательной комиссии Московской области'} /></div>
            </div>

            <div className={`mt80 borderMain ${s.documentContainer}`}>
               <DocumentContainerDownload type={'PDF'} text='Постановление Администрации г.о. Химки от 26.07.2021 № 622 "О внесении изменений в постановление Администрации городского округа Химки Московской области от 27.10.2017 № 1086 «Об образовании избирательных участков на территории городского округа Химки' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к постановлению Администрации от 26.07.2021 № 622' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Решение ТИК города Химки от 10.06.2021 № 62 "О приеме предложений по кандидатурам членов молодежной территориальной избирательной комиссии городского округа Химки' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к решению территориальной избирательной комиссии города Химки от 10 июня 2021 г. № 62' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Решение Избирательной комиссии Московской области от 25.02.2021 № 196/1860-6 «О заявлении Степановой Ольги Викторовны – члена территориальной избирательной комиссии города Химки' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'}text='Приложение к постановлению Администрации от 18.06.2020 № 425' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Решение ТИК г. Химки от 17.03.2020 № 11 "Об образовании на территории городского округа Химки Московской области избирательных участков в местах временного пребывания избирателей в день общероссийского голосования' date="06.02.2023" />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default TICDocuments;
