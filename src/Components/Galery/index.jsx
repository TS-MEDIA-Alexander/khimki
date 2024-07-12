import React from 'react';
import s from './Galery.module.css';

const Galery = ({ galery }) => {
   return (
      <div className={s.galeryWrapper}>
         {galery.map((el, i) => <div key={i} className={s.galeryContainer}>
            <div className={s.preview}><img src={el.imgPreview} alt="" /></div>
            <div className={s.filterTitle}>{el.filter.date}</div>
            <div className={s.title}>{el.title}</div>
         </div>)}
         <div className={`btnW ${s.showMore}`}>Загрузить еще</div>
      </div>

   )
}
export default Galery;