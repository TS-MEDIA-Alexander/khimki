import React from 'react';
import s from './CardHuman.module.css';
import plug from '../../assets/img/Persons/img.png';

const CardHuman = ({jobTitle, name, surname, subtitle, info, adress, WorkingHours, contactsArr,  img, btn, btnStyle}) => {
   
   return (
      <div className={`mt80 borderMain ${s.card}`}>
         <div className={s.portrainContainer}>
            <img src={img || plug} alt="" />
         </div>
         <div className={s.rightContainer}>
            <div className={`mt8 ${s.jobTitle}`}>{jobTitle}</div>
            <div className={`mt24 ${s.cardName}`}>{name}</div>
            <div className={s.cardSurname}>{surname}</div>
            <div className={s.subtitle}>{subtitle}</div>

            <div className={`mt40 ${s.cardMoreDetails}`}>{info}</div>
            <div className={`${s.cardMoreDetails}`}>{adress}</div>
            {WorkingHours && <div className={s.time}><div className={`${s.cardMoreDetails}`}>Режим работы: </div>{`${WorkingHours}`}</div>}

            <div className={`mt24 ${s.cardBtnRow}`}>
               {contactsArr?.map((el, i)=> typeof el=== "string"? <div key={i} className={`oval ${s.cardTel}`}>{el}</div>:<div key={i} className={` ${s.imgContainer}`}>{el}</div>)}
            </div>

            {btn && <div style={btnStyle} className={`mt16 ${s.btn}`}>{btn}</div>}
         </div>
      </div>
   )
}
export default CardHuman;