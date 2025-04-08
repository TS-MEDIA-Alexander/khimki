import React from 'react';
import s from './СardAdministratiorStructure.module.css';

import imgTotal from '../../assets/img/Persons/img.png';

const СardAdministratiorStructure = ({ img = imgTotal, jobTitle, surname, name, jobTitleTop }) => {
   return (
      <div className={`borderMain ${s.card}`}>
         {jobTitleTop && <div className={`mt24 ${s.jobTitle} ${s.jobTitleTop}`}>{jobTitleTop}</div>}
         <div className={`mt24 ${s.imgContainer}`}>
            <img src={img} alt="" />
         </div>
         <div className={`mt24 ${s.textContainer}`}>
            {jobTitle && <div className={`mt20 ${s.jobTitle}`}>{jobTitle}</div>}
            <div className={`mt8 ${s.nameContainer}`}>
               <div className={s.surname}>{surname}</div>
               <div className={s.name}>{name}</div>
            </div>
         </div>
      </div>
   )
}
export default СardAdministratiorStructure;