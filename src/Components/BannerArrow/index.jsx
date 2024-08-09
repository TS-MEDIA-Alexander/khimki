import React from 'react';
import s from './BannerArrow.module.css';

const BannerArrow = ({ mt, imgBanner, src="#" }) => {
   return (
      <div href={src} className={`${mt} ${s.banner}`}>
         <div className={s.bannerContainer}>
           {/*  <div className={`btnCircle ${s.btn}`}></div> */}
         </div>
         <img src={imgBanner} alt="" />
      </div>
   )
}
export default BannerArrow;