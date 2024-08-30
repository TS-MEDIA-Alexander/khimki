import React from 'react';
import arrow from '../../assets/iconsBanners/arrowStatic.svg'
import s from './Statistics.module.css';

const Statistics = (props) => {
   return (
      <div className={`borderMain ${s.bannerContainer}`}>
         <div className={s.title}>
            <img src={arrow} alt="" /> 411 000 человек
         </div>
         <div className={s.textBody}>
            <div>Cуммарная численность населения</div>
            <div>территориального округа</div>
         </div>

         <div className={`mt32 ${s.title}`}>
            25 777 га
         </div>
         <div className={s.textBody}>
            <div>Общая площадь территориального </div>
            <div>округа</div>
         </div>
         {/* <div className="mt32">
            <div className={s.rowContainer}>
               <div className={s.tags}>25 Школ</div>
               <div className={s.tags}>100 Больниц </div>
            </div>
            <div className={s.tags}>40 детских площадок</div>
            <div className={s.tags}>20 детских садов</div>
         </div> */}

      </div>
   )
}
export default Statistics;