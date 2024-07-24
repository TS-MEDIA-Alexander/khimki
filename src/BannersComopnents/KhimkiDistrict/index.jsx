import React from 'react';
import arrowBtn from '../../assets/icons/arrowYellow.svg'
import s from './KhimkiDistrict.module.css';

const KhimkiDistrict = (props) => {
   return (
      <div className={`${s.bannerContainer} borderMain`}>
         <div className={s.topContainer}>
            <div className={s.title}>
               <div>Городской округ Химки</div>
            </div>
            <div className={s.textBody}>
               <div>В состав городского округа входят 37</div>
               <div>населённых пунктов, в том числе 1 город</div>
               <div>и 36 сельских населённых пунктов</div>
            </div>
         </div>

         <div className={`btnY ${s.button}`}>Все программы <img src={arrowBtn} alt="" /></div>
      </div>
   )
}
export default KhimkiDistrict;