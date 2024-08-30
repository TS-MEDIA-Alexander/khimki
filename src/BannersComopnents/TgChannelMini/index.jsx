import React from 'react';
import icon from '../../assets/iconsBanners/tg_channel_mini.svg'
import s from './TgChannelMini.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const TgChannelMini = (props) => {
   return (
      <a href='https://t.me/adm_himki' target='_blank' className={s.bannerContainer}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Официальный канал</div>
               <div>администрации </div>
               <div>в Телеграм</div>
            </div>
         </div>

         <div className={`btnTgBanner ${s.button}`}><span className="btnText">Перейти</span></div>
      </a>
   )
}
export default TgChannelMini;