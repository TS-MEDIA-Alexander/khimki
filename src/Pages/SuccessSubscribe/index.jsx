import React from 'react';
import s from './SuccessSubscribe.module.css';

import ContantContainerMain from '../../total/ContantContainerMain';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

const SuccessSubscribe = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={s.container}>
               <div className={s.text}>Вы успешно подписались на еженедельную рассылку новостей </div>
               <NavLink to={ROUTER.main} className={`mt48 btnRad ${s.btn}`}>Вернуться на страницу новостей </NavLink>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default SuccessSubscribe;