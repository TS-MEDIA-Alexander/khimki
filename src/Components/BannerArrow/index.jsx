import React from 'react';
import s from './BannerArrow.module.css';

const BannerArrow = ({ mt, imgBanner, src="#" }) => {
   return (
      <a href={src} className={`${mt} ${s.banner}`}>
         <div className={s.bannerContainer}>
            <div className={`btnCircle ${s.btn}`}></div>
         </div>
         <img src={imgBanner} alt="" />
      </a>
   )
}
export default BannerArrow;