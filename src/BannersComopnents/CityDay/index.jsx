import React from 'react';
import s from './CityDay.module.css';

const CityDay = (props) => {
   return (
      <div className={s.bannerVirtual}>
         <div className={s.title}>День города!</div>
         <div className={s.textBody}>
            <div>Вы можете задать интересующий</div>
            <div>Вас вопрос, который находится в  </div>
            <div>пределах полномочий Главы </div>
            <div>городского округа Химки </div>
            <div>Московской области.</div>
         </div>
         <div className={`btnWBanner ${s.button}`}>Программа празднования</div>
      </div>
   )
}
export default CityDay;