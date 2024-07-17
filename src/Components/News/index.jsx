import React from 'react';
import s from './News.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const News = ({ news, rowLength, btnText }) => {

   const isWrap=(orderNumber)=>{
      return rowLength < (orderNumber + 1) && 'mt20'
   }

   return (
      <div className={s.newsWrapper}>
         {news.map((el, i) => <NavLink to={`${ROUTER.newsArticle}${el.id}`} key={i}
            className={`${isWrap(i)} ${s.newsContainer}`}
         >
            <div className={s.preview}><img src={el.imgPreview} alt="" /></div>
            <div className={s.filterText}>{el.filter.subject}, {el.filter.date}</div>
            <div className={s.title}>{el.title}</div>
            <div className={s.moreDetails}>Подробнее</div>
         </NavLink>)}
         <div className={`btnW ${s.showMore}`}>{btnText}</div>
      </div>

   )
}
export default News;