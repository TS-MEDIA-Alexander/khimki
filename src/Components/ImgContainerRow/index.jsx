import React from 'react';
import s from './ImgContainerRow.module.css';

const ImgContainerRow = ({ imgArr }) => {
   return (
      <div className={s.imgContainer}>
         {imgArr.map((el, i) => <img key={i} className={s.img} src={el} alt="" />)}
      </div>
   )
}
export default ImgContainerRow;