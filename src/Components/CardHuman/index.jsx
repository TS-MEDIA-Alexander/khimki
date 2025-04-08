import React from 'react';
import s from './CardHuman.module.css';
import plug from '../../assets/img/Persons/img.png';
import plugMob from '../../assets/img/Persons/img_mobil.png';

const CardHuman = ({ jobTitle, name, surname, subtitle, info, adress, WorkingHours, contactsArr, img, imgMob, btn, btnSrc, btnStyle }) => {

   const isMobil = window.innerWidth < 400;

   const isMobilFn = (mob, desktop) => isMobil ? (mob || desktop) : desktop

   return (
      <div className={`mt80 borderMain ${s.card}`}>
         <div className={s.portrainContainer}>
            <img src={isMobilFn(imgMob, img) || isMobilFn(plugMob, plug)} alt="" />
         </div>
         <div className={s.rightContainer}>
            <div className={`mt8 ${s.jobTitle}`}>{jobTitle}</div>
            <div className={`mt24 ${s.cardName}`}>{name}</div>
            <div className={s.cardSurname}>{surname}</div>
            <div dangerouslySetInnerHTML={{__html: subtitle}} className={s.subtitle}/>

            <div className={`mt40 ${s.cardMoreDetails}`}>{info}</div>
            <div className={`${s.cardMoreDetails}`}>{adress}</div>
            {WorkingHours && <div className={s.time}><div className={`${s.cardMoreDetails}`}>Режим работы: </div>{`${WorkingHours}`}</div>}

            <div className={`mt24 ${s.cardBtnRow}`}>
               {contactsArr?.map((el, i) => typeof el === "string" ?
                  <div key={i} className={`oval ${s.cardTel}`}>{el}</div>
                  : typeof el === "object" ?
                     <div key={i} className={`oval ${s.cardTel}`}><a className={s.link} target='_blank' href={el.link}>{el.text}</a></div>
                     : <div key={i} className={` ${s.imgContainer}`}>{el}</div>)}
            </div>

            {btn && <a href={btnSrc} style={btnStyle} target='_blank' className={`mt16 ${s.btn}`}>{btn}</a>}
         </div>
      </div>
   )
}
export default CardHuman;