import React from 'react';
import s from './СardAdministratiorStructureLink.module.css';
import { NavLink } from 'react-router-dom';

import imgTotal from '../../assets/img/Persons/img.png';
import { ROUTER } from '../../config';

const СardAdministratiorStructureLink = ({ url, img = imgTotal, jobTitle, surname, name, jobTitleTop }) => {
   return (
      <NavLink to={`${ROUTER.khimkiDistrict.administrationStructurePerson}${url}` } className={`borderMain ${s.card}`}>
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
            <div className={`mt8 ${s.info}`}>Информация</div>
         </div>
      </NavLink>
   )
}
export default СardAdministratiorStructureLink;