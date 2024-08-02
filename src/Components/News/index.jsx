import React from 'react';
import s from './News.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const News = ({ news, rowLength }) => {

   const isWrap = (orderNumber) => {
      return rowLength < (orderNumber + 1) && 'mt20'
   }

   return (
      <div className={s.newsWrapper}>
         {news?.map((el, i) => <NavLink to={`${ROUTER.newsArticle}${el.id}`} key={i}
            className={`${isWrap(i)} ${s.newsContainer} borderMain`}
         >
            <div>
               <div className={s.preview}><img src={el.image_preview} alt="" /></div>
               <div className={s.filterText}>{el.date}</div>
               <div className={s.title}>{el.name}</div>
            </div>
            <div className={s.moreDetails}>Подробнее</div>
         </NavLink>)}
      </div>
   )
}
export default News;