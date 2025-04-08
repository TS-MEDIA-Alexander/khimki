import React from 'react';
import s from './DistrictAboutCard.module.css';

import img from '../../assets/img/Persons/img.png'

const DistrictAboutCard = ({ title, description, chairman, districtImg, historicalBackground, historicalMonuments }) => {
   return (
      <div className={`${s.districtAboutContainer}`}>
         <div className={`borderMain ${s.container}`}>
            <div className={s.textBlock}>
               <div className={s.title}>{title}</div>
               <div className={`mt8 ${s.description}`}>
                  {description}
               </div>
            </div>
            <div className={s.imgContainerMap}>
               <img src={districtImg} alt="" />
            </div>
            <div className={`mt24 ${s.imgContainer}`}>
               <img className={`${s.imgPerson}`} src={chairman.img || img} alt="" />
               <div className={`mt16 ${s.description}`}>
                  Начальник территориального управления {title}
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

         <div className={`borderMain ${s.container_buttom} ${s.container}`}>
            <div className={s.textBlock}>
               <div className={s.title}>Краткая историческая справка</div>
               <div className={`mt8 ${s.description}`}>
                  {historicalBackground}
               </div>
            </div>

            <div className={`mt24 ${s.imgContainer}`}>
               <div className={s.title}>Памятники на территории</div>
               <ol className={`mt8 ${s.description} ${s.item}`}>
                  {historicalMonuments.map((el, i) => <li key={i}>{el}</li>)}
               </ol>
            </div>
         </div>

      </div>
   )
}
export default DistrictAboutCard;