import React from 'react';
import s from './DocumentContainerDownloadMini.module.css';
import pdf from '../../assets/icons/pdf.svg';
import doc from '../../assets/icons/doc.svg';

const DocumentContainerDownloadMini = ({ document, documentName, text, date, type }) => {
   return (
      <a
         download={documentName}
         href={document} className={s.documentContainer}>
         {type === 'DOCX' ? <img className={`${s.documentIcon} ${s.DOCX}`} src={doc} alt="" /> : <img className={`${s.documentIcon} ${s.PDF}`} src={pdf} alt="" />}
         <div className={s.link}>
            <div className={s.textInner}>
               {text}
            </div>
            <div className={s.datePublication}>Дата публикации: {date}</div>
         </div>

      </a>
   )
}
export default DocumentContainerDownloadMini;