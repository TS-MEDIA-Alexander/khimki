import React from 'react';
import s from './ContactBanner.module.css';

import arrow_btn_link from '../../assets/icons/arrow_btn_link.svg';
import pattern from '../../assets/icons/khimkiDistrict/pattern.svg';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';


const ContactBanner = ({ img, title, name, subtitle, info, WorkingHours, tel, mail, url }) => {
   return (
      <div className={`borderMain ${s.contactContainer}`}>
         <div className={s.titleRow}>
            <div className={s.imgContainer}><img src={img || pattern} alt="" /></div>
            <div className={s.title}>{title}</div>
         </div>

         <div className={`mt24 ${s.name}`}>{name}</div>
         <div className={s.surname}>{subtitle}</div>

         <div className={`mt38 ${s.description}`}>{info}</div>
         <div className={s.description}>Режим работы: <span className={s.date}>{WorkingHours}</span></div>

         <div className={s.btnContainer}>
            {tel.map((el, i)=><a href={`tel: ${tel}`} className={`mt16 oval ${s.tel} ${s.mobilMt8}`} key={i}>{el}</a>)}
            
            <div className={`mt16 oval ${s.mobilMt8}`}>{mail}</div>
         </div>

         <NavLink to={`${ROUTER.khimkiDistrict.administrationStructurePerson}${url}`} className={`btnCircleG ${s.btn}`}><img src={arrow_btn_link} alt="" /></NavLink>
      </div>
   )
}
export default ContactBanner;