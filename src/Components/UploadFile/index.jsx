import React, { useEffect, useState } from 'react';
import s from './UploadFile.module.css';
import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import IconWordPdfText from '../IconWordPdfText';
import axios from 'axios';


const UploadFile = ({ value, handler, data }) => {

   const [files, setFiles] = useState(null);

   const handleFileChange = (e) => {
      if (e.target.files) {
         /* const formData = new FormData();
         [...e.target.files].forEach((file, i) => {
            formData.append(`files[${[i]}]`, file);
         }); */

         /* [...e.target.files].forEach((file, i) => {
            handler(`files[${[i]}]`, e.target.files)
         }); */

         
         setFiles(e.target.files);
      }
   };

   const handleUpload = () => {
      if (files) {

         const formData = new FormData();
         [...files].forEach((file, i) => {
            formData.append(`files[${[i]}]`, file);
         });

         for(let key in data){
            formData.append(key, data[key])
         }

            return axios.post(`https://dev.admhimki.ru/delara/public/api/support/ticket/add`, formData)
               .then(response => response.data)
               .catch(() => {
                  console.log('Error')
               })
      }
   };

   const DeleteSelectFile = (name) => {
      const result = Object.values(files).filter((data) => data.name !== name);
      setFiles(result);
   }

   return (
      <div className="kb-data-box">

         <div className="kb-file-upload">
            <div className="file-upload-box">
               <label htmlFor="fileupload" className={s.uploadBtn}>Прикрепить файл (файлы)</label>
               <input type="file" id="fileupload" className={s.dN} onChange={handleFileChange} multiple />
            </div>
         </div>
         <div className="mt48">
            {
               files && [...files].map((data, index) => {
                  return (
                     <div className={s.fileContainer} key={index}>
                        {
                           data.name.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                              <IconWordPdfText type={'IMG'} /> :
                              data.name.match(/.(doc|docx)$/i) ? <IconWordPdfText type={'DOCX'} /> :
                                 data.name.match(/.(PDF)$/i) ? <IconWordPdfText type={'PDF'} /> :
                                    <IconWordPdfText type={'anotherFile'} />
                        }
                        <div className={s.fileInfoBlock}>
                           {data.name}
                           <div type="button" className={s.deleteBtn} onClick={() => DeleteSelectFile(data.name)}>Удалить</div>
                        </div>
                     </div>
                  )
               })
            }
         </div>

         <div className="btnY" onClick={handleUpload}>Отправить</div>

      </div>
   );
}
export default UploadFile;