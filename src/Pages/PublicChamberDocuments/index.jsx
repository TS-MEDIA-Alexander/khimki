import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './PublicChamberDocuments.module.css';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

/* Документы */
import resolution292 from '../../assets/documents/khimkiDistrict/15.04.2020_№_292.pdf';
import resolution345 from '../../assets/documents/khimkiDistrict/15.05.2020_№_345.pdf';
import resolution194 from '../../assets/documents/khimkiDistrict/28.02.2020_№_194.pdf';
import appendix_no_2_resolution from '../../assets/documents/khimkiDistrict/appendix_no_2_resolution.docx';

const PublicChamberDocuments = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.publicChamber} className='breadcrumbsFrom'> / Общественная палата</NavLink>
               <span className='breadcrumbsTo'> / Документы</span>
            </div>
            <h1 className={`mt24 pageTitle`}>
               <p>Общественная палата городского</p>
               <p>округа Химки Московской</p>
               <p>области</p>
            </h1>

            <div className={`mt80 borderMain ${s.documentContainer}`}>
               <DocumentContainerDownload type={'PDF'} document={resolution345} documentName={'15.05.2020_№_345.pdf'} text='Постановление Администрации г.о. Химки от 15.05.2020 № 345 "О продлении срока для приема заявлений и документов на кандидатов в члены Общественной палаты городского округа Химки Московской области"' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} document={resolution292} documentName={'15.04.2020_№_292.pdf'}  text='Постановление Администрации г.о. Химки от 15.04.2020 № 292 "О продлении срока для приема заявлений и документов на кандидатов в члены Общественной палаты городского округа Химки Московской области"' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} document={resolution194} documentName={'28.02.2020_№_194.pdf'}  text='Постановление Администрации г.о. Химки от 28.02.2020 № 194 "О формировании нового состава Общественной палаты городского округа Химки Московской области"' date="06.02.2023" />
               <DocumentContainerDownload document={appendix_no_2_resolution} type="DOCX" documentName={'appendix_no_2_resolution.docx'} text='Приложение № 2 к постановлению Администрации от 28.02.2020 № 194' date="06.02.2023" />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default PublicChamberDocuments;
