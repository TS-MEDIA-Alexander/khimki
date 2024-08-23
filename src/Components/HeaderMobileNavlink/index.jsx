import React, { useState } from 'react';
import s from './HeaderMobileNavlink.module.css';

import arrow_down from '../../assets/icons/arrow_down.svg';

const HeaderMobileNavlink = (props) => {

   const [activeID, setActiveID] = useState();

   return (
      <div className={s.headerMobileContainer}>
         <div className={s.contentContainer}>
            <div className={s.itemContainer} onClick={(e) => e.target.id ? setActiveID(e.target.id) : setActiveID(false)}>
               <div className={s.back}>Назад</div>
               <div id='news' className={`mt24 ${s.item}`}>Новости <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div className={`mt24 ${s.item}`}>История <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div className={`mt24 ${s.item}`}>Округ <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div className={`mt24 ${s.item}`}>Деятельность <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div className={`mt24 ${s.item}`}>Прокуратура <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div className={`mt24 ${s.item}`}>Обращения граждан <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div className={`mt24 ${s.item}`}>Контакты <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
            </div>

            <div className={s.bottomBlock}>
               <button className={s.hotLine}>Горячая линия</button>
            </div>
         </div>
      </div>
   )
}
export default HeaderMobileNavlink;