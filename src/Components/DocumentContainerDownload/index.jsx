import React from 'react';
import s from './DocumentContainerDownload.module.css';
import pdf from '../../assets/icons/pdf.svg';
import doc from '../../assets/icons/doc.svg';

const DocumentContainerDownload = ({ document, documentName, text, date, type }) => {
   return (
      <div className={s.documentContainer}>
         <a
         download={documentName}
         href={document} className={s.link}>
            {type === 'DOCX' ? <img className={`${s.documentIcon} ${s.DOCX }`} src={doc} alt="" /> : <img className={`${s.documentIcon} ${s.PDF}`} src={pdf} alt="" />}
            
            <div className={s.textInner}>
               {text}
            </div>
         </a>
         <div className={s.datePublication}>Дата публикации: {date}</div>
      </div>
   )
}
export default DocumentContainerDownload;