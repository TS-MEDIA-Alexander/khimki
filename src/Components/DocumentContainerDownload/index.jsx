import React from 'react';
import s from './DocumentContainerDownload.module.css';
import IconWordPdfText from '../IconWordPdfText';

const DocumentContainerDownload = ({ document, documentName, text, date, type }) => {
   return (
      <div className={s.documentContainer}>
         <a
            download={documentName}
            href={document} className={s.link}>
            <IconWordPdfText type={type} />
            <div className={s.textInner}>
               {text}
            </div>
         </a>
         {date && <div className={'additionalInformation'}>Дата публикации: {date}</div>}
      </div>
   )
}
export default DocumentContainerDownload;