import React, { useState } from 'react';

const UploadFileNew = () => {
   const [files, setFiles] = useState(null);

   const handleFileChange = (e) => {
      if (e.target.files) {
         setFiles(e.target.files);
      }
   };

   const handleUpload = async () => {
      if (files) {

         const formData = new FormData();
         [...files].forEach((file) => {
            formData.append('files', file);
         });

         console.log(formData)

         try {
            const result = await fetch('https://httpbin.org/post', {
               method: 'POST',
               body: formData,
            });

            const data = await result.json();

            console.log(data);
         } catch (error) {
            console.error(error);
         }
      }
   };

   return (
      <>
         <div className="input-group">
            <input id="file" type="file" multiple onChange={handleFileChange} />
         </div>

         {files && [...files].map((file, index) => (
            <section key={file.name}>
               File number {index + 1} details:
               <ul>
                  <li>Name: {file.name}</li>
                  <li>Type: {file.type}</li>
                  <li>Size: {file.size} bytes</li>
               </ul>
            </section>
         ))}

         {files && (
            <button
               onClick={handleUpload}
               className="submit"
            >
               Upload {files.length > 1 ? 'files' : 'a file'}
            </button>
         )}

      </>
   );
};



export default UploadFileNew;