import React from 'react';
import { ROUTER } from '../../config';
import s from './Video.module.css';
import { NavLink } from 'react-router-dom';

const Video = ({ video, rowLength }) => {

   const isWrap=(orderNumber)=>{
      return rowLength < (orderNumber + 1) && 'mt20'
   }

   return (
      <div className={s.galeryWrapper}>
         {video.map((el, i) => <div /* to={`${ROUTER.galeryArticle}${el.id}`} */ key={i} className={`${isWrap(i)} ${s.galeryContainer}`}>
            <div className={s.preview}><img src={el.imgPreview} alt="" /></div>
            <div className={s.title}>{el.title}</div>
         </div>)}
      </div>

   )
}
export default Video;