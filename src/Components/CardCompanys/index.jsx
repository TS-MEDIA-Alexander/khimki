import React from 'react';
import s from './CardCompanys.module.css';
import plug from '../../assets/img/Persons/img.png';

import item1 from '../../assets/icons/items/item_1.svg';
import item2 from '../../assets/icons/items/item_2.svg';
import item3 from '../../assets/icons/items/item_3.svg';
import item4 from '../../assets/icons/items/item_4.svg';
import item5 from '../../assets/icons/items/item_5.svg';
import item6 from '../../assets/icons/items/item_6.svg';
import item7 from '../../assets/icons/items/item_7.svg';
import item8 from '../../assets/icons/items/item_8.svg';
import item9 from '../../assets/icons/items/item_9.svg';
import item10 from '../../assets/icons/items/item_10.svg';
import item11 from '../../assets/icons/items/item_11.svg';

const CardCompanys = ({ jobTitle, img, btn, btnStyle }) => {

   return (
      <div className={`mt80 borderMain ${s.card}`}>
         <div className={s.portrainContainer}>
            <img src={img || plug} alt="" />
         </div>
         <div className={s.rightContainer}>
            <div className={`mt8 ${s.jobTitle}`}>{jobTitle}</div>
            <div className={s.columnContainer}>
               <div className={`mt24 ${s.column}`}>
                  <div className={s.item}>
                     <img src={item1} alt="" />
                     Продуктовые магазины
                  </div>
                  <div className={s.item}>
                     <img src={item2} alt="" />
                     Аптеки
                  </div>
                  <div className={s.item}>
                     <img src={item3} alt="" />
                     Медицинские центры
                  </div>
                  <div className={s.item}>
                     <img src={item4} alt="" />
                     Досуговые центры
                  </div>
                  <div className={s.item}>
                     <img src={item5} alt="" />
                     Химчистки и прачечные
                  </div>
                  <div className={s.item}>
                     <img src={item6} alt="" />
                     Рестораны, кафе и кондитерские
                  </div>
               </div>
               <div className={`mt24 ${s.column}`}>
                  <div className={s.item}>
                     <img src={item7} alt="" />
                     Непродовольственные магазины
                  </div>
                  <div className={s.item}>
                     <img src={item8} alt="" />
                     Ремонтные ателье
                  </div>
                  <div className={s.item}>
                     <img src={item9} alt="" />
                     Мастерские по ремонту одежды
                  </div>
                  <div className={s.item}>
                     <img src={item10} alt="" />
                     Салоны красоты, парикмахерские
                  </div>
                  <div className={s.item}>
                     <img src={item11} alt="" />
                     Мастерские по ремонту обуви
                  </div>
               </div>
            </div>
            {btn && <div style={btnStyle} className={`mt40 ${s.btn}`}>{btn}</div>}
         </div>
      </div>
   )
}
export default CardCompanys;