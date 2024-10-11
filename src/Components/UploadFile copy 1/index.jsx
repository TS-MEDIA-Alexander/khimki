import React, { useEffect, useState } from 'react';
import s from './UploadFile.module.css';
import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import IconWordPdfText from '../IconWordPdfText';
import axios from 'axios';


const UploadFile = ({ value, handler, data }) => {

   /* const [selectedfile, SetSelectedFile] = useState([]);

   const filesizes = (bytes, decimals = 2) => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
   }

   const formData = new FormData();

   const InputChange = (e) => {
      let images = [];
      for (let i = 0; i < e.target.files.length; i++) {
         images.push((e.target.files[i]));
         let reader = new FileReader();
         let file = e.target.files[i];
         reader.onloadend = () => {
            SetSelectedFile((preValue) => {
               return [
                  ...preValue,
                  {
                     id: shortid.generate(),
                     filename: e.target.files[i].name,
                     filetype: e.target.files[i].type,
                     fileimage: reader.result,
                     datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                     filesize: filesizes(e.target.files[i].size)
                  }
               ]
            });
         }
         if (e.target.files[i]) {
            reader.readAsDataURL(file);
         }
         formData.append('file', file);
      }
      handler('file', [...value, formData])
   }


   const DeleteSelectFile = (id) => {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
   }

   const postApi = async () => {
       fetch('https://httpbin.org/post', {
         method: 'POST',
         body: formData,
      });
   } */

   const [files, setFiles] = useState(null);

   const handleFileChange = (e) => {
      if (e.target.files) {
         const formData = new FormData();
         [...e.target.files].forEach((file, i) => {
            formData.append(`files[${[i]}]`, file);
         });

         [...e.target.files].forEach((file, i) => {
            handler(`files[${[i]}]`, e.target.files)
         });

         
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

         console.log(Object.fromEntries(formData))
         console.log(formData)

            /* return axios.post(`https://dev.admhimki.ru/chek_file.php`, { ...data, files: formData }) */
            return axios.post(`https://dev.admhimki.ru/chek_file.php`, formData)
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