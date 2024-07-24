import React from 'react';
import { ROUTER } from '../../config';
import s from './Galery.module.css';
import { NavLink } from 'react-router-dom';

const Galery = ({ galery, rowLength }) => {

   const isWrap=(orderNumber)=>{
      return rowLength < (orderNumber + 1) && 'mt20'
   }

   return (
      <div className={s.galeryWrapper}>
         {galery.map((el, i) => <NavLink to={`${ROUTER.galeryArticle}${el.id}`} key={i} className={`${isWrap(i)} ${s.galeryContainer} borderMain`}>
            <div className={s.preview}><img src={el.imgPreview} alt="" /></div>
            <div className={s.filterTitle}>{el.filter.date}</div>
            <div className={s.title}>{el.title}</div>
         </NavLink>)}
         <div className={`btnW ${s.showMore}`}>Загрузить еще</div>
      </div>

   )
}
export default Galery;