import React from 'react';
import arrow from '../../assets/icons/arrowUppBlue.svg'
import s from './DistrictAboutCard.module.css';

const DistrictAboutCard = ({ title, description, countPeaple, km, chairman, districtImg }) => {
   return (
      <div className={`borderMain ${s.districtAboutContainer}`}>
         <div className={s.InfoFlexContainer}>
            <div className={s.textBlock}>
               <div className={s.title}>{title}</div>
               <div className={`mt8 ${s.description}`}>
                  {description}
               </div>
            </div>
            <img className={s.img} src={districtImg} alt="" />
         </div>
         <div className={`mt75 ${s.InfoFlexContainer}`}>
            <div className={s.textBlock}>
               <div className={s.title}><img src={arrow} alt="" /> {countPeaple} человек</div>
               <div className={`mt8 ${s.description}`}>
                  Cуммарная численность населения территориального округа
               </div>
               <div className={`mt32 ${s.title}`}>{km} км<sup>2</sup></div>
               <div className={`mt8 ${s.description}`}>
                  Общая площадь территориального округа
               </div>
               <div className={`mt32 ${s.tgContainer}`}>
                  <div className={s.tg}>25 Школ</div>
                  <div className={s.tg}>100 Больниц </div>
                  <div className={`mt8 ${s.tg}`}>40 детских площадок</div>
                  <div className={`mt8 ${s.tg}`}>20 детских садов</div>
               </div>
            </div>
            <div className={s.imgContainer}>
               <img className={`${s.imgPerson}`} src={chairman.img} alt="" />
               <div className={`mt16 ${s.description}`}>
                  Председатель территориального управления {title}
               </div>
               <div className={`mt16 ${s.textName}`}>
                  <span>{chairman.surname} </span><br />
                  {chairman.name}
               </div>
               <div className={`mt12 ${s.description}`}>
                  Информация
               </div>
            </div>
         </div>

      </div>
   )
}
export default DistrictAboutCard;