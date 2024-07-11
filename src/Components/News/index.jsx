import React from 'react';
import s from './News.module.css';

const News = ({ news }) => {
   return (
      <div className={s.newsWrapper}>
         {news.map((el, i) => <div key={i} className={s.newsContainer}>
            <div className={s.preview}><img src={el.imgPreview} alt="" /></div>
            <div className={s.filter}>{el.filter.subject}, {el.filter.date}</div>
            <div className={s.title}>{el.title}</div>
            <div className={s.moreDetails}>Подробнее</div>
         </div>)}
         <div className={`btnW ${s.showMore}`}>Все новости</div>
      </div>

   )
}
export default News;