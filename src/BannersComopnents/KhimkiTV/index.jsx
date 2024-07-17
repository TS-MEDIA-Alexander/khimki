import React from 'react';
import s from './KhimkiTV.module.css';

import videoKhimkiTV from '../../backend/bannerKhimkiTV';
import KhimkiTVLogo from '../../assets/img/logos/KhimkiTV.svg'

const KhimkiTV = (props) => {
   return (
      <div className={s.contantContainerKhimkiTV}>
         <div className={s.videoContainer}>
            <div className={s.title}>Свежие сюжеты канала Химки тв</div>
            <div className={`mt32 ${s.rowContainer}`}>
               {videoKhimkiTV.videos.map((el, i) => <a href={el.src} target='_blank' className={s.videoItemContainer} key={i}>
                  <img src={el.imgPreview} alt="" />
                  <div className={s.titleVideo}>{el.title}</div>
               </a>)}
            </div>
         
         </div >
         <img src={KhimkiTVLogo} alt="" />
      </div>
   )
}
export default KhimkiTV;