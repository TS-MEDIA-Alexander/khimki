import React from 'react';
import icon from '../../assets/iconsBanners/dev_program.svg'
import s from './DevProgram.module.css';

const DevProgram = (props) => {
   return (
      <a href='https://xn----dtbbfdsqpoccbhkx3p0b.xn--p1ai/' target='_blank' className={s.bannerContainer}>
         <div className={s.topContainer}>
            <img src={icon} alt="" />
            <div className={s.title}>
               <div>Программа развития</div>
               <div>для участников СВО</div>
            </div>
            <div className={s.textBody}>

            </div>
         </div>

         <div className={`btnTgBanner ${s.button}`}>герои-подмосковья.рф</div>
      </a>
   )
}
export default DevProgram;