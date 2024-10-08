import React from 'react';
import s from './LinkContainer.module.css';

import { NavLink } from 'react-router-dom';

import arrow from '../../assets/icons/arrow_btn_link.svg';

const LinkContainer = ({ link, text, radial }) => {
   return (
      <NavLink to={link || '*'} className={`${s.link}`}>
         <div className={`${s.textContainer}`}>{/* ${text.length > 45 && s.longText} */}
            {radial && <div className={s.radial}></div>}
            <div className={`${s.text}`}>
               {text}
            </div>
         </div> <div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div>
      </NavLink>
   )
}
export default LinkContainer;