import React from 'react';
import s from './ContactBanner.module.css';

import arrow_btn_link from '../../assets/icons/arrow_btn_link.svg';

const ContactBanner = ({ img, title, name, subtitle, info, WorkingHours, tel, mail }) => {
   return (
      <div className={`borderMain ${s.contactContainer}`}>
         <div className={s.titleRow}>
            <div className={s.imgContainer}><img src={img} alt="" /></div>
            <div className={s.title}>{title}</div>
         </div>

         <div className={s.name}>{name}</div>
         <div className={s.surname}>{subtitle}</div>
         
         <div className={`mt38 ${s.description}`}>{info}</div>
         <div className={s.description}>{WorkingHours}</div>

         <div className="mt16 oval">{tel}</div>
         <div className="mt16 oval">{mail}</div>

         <div className={`btnCircleG ${s.btn}`}><img src={arrow_btn_link} alt="" /></div>
      </div>
   )
}
export default ContactBanner;