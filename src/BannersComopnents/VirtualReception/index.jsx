import React from 'react';
import icon from '../../assets/iconsBanners/virtualReceptionMessage.svg';
import s from './VirtualReception.module.css';

const VirtualReception = (props) => {
   return (
      <div className={s.bannerVirtual}>
         <img src={icon} alt="" />
         <div className={s.title}>Виртуальная приёмная</div>
         <div className={s.textBody}>
            <div>Вы можете задать интересующий</div>
            <div>Вас вопрос, который находится в </div>
            <div>пределах полномочий Главы</div> 
            <div>городского округа Химки</div> 
            <div>Московской области.</div>
         </div>
         <div className={`btnWBanner ${s.button}`}>Подать обращение</div>
      </div>
   )
}
export default VirtualReception;