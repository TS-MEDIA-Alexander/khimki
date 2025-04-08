import React from 'react';
import s from './BannerArrow.module.css';

const BannerArrow = ({ imgBanner, imgBannerMobil, src="#" }) => {

   const isMobil = window.innerWidth > 750;

   return (
      <div href={src} className={`${s.banner}`}>
         <div className={s.bannerContainer}>
           {/*  <div className={`btnCircle ${s.btn}`}></div> */}
         </div>
         <img src={isMobil ? imgBanner : imgBannerMobil} alt="" />
      </div>
   )
}
export default BannerArrow;