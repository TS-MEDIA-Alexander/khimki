import React from 'react';
import s from './News.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const News = ({ news, mobilFullPhoto }) => {

   return (
      <div className={s.newsWrapper}>
         {news?.map((el, i) => <NavLink to={`${ROUTER.newsArticle}${el.id}`} key={i}
            className={`${s.newsContainer} borderMain`}
         >
            <div>
               <div className={`${s.preview} ${mobilFullPhoto || s.previewMobilHidden}`}><img src={el.image_preview} alt="" /></div>
               <div className={`${s.filterText} mt20 `}>{el.dateTime}</div>
               <div className={s.title}>{el.name}</div>
            </div>
            <div className={s.moreDetails}>Подробнее</div>
         </NavLink>)}
      </div>
   )
}
export default News;
