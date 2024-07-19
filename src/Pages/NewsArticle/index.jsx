import React, { useEffect, useState } from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './NewsArticle.module.css';
import { useParams } from 'react-router-dom';

import FamilyYear from '../../BannersComopnents/FamilyYear';
import TgChannel from '../../BannersComopnents/TgChannel';

import news from '../../backend/news/news';
import News from '../../Components/News';

const NewsArticle = (props) => {

   const newsNew = news.slice(0, 4)

   const userID = useParams().id.slice(3);

   const [currentNews, setCurrentNews] = useState({})

   useEffect(() => {
      setCurrentNews(news.filter(el => el.id == userID)[0])
   }, [userID])

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 ${s.breadcrumbs}`}>
               <span className={s.breadcrumbsFrom}>Новости</span>
               <span className={s.breadcrumbsTo}> / {currentNews.title}</span>
            </div>
            <div className="mt40 columnContainer">
               <div className="columnLarge">
                  <img className={s.imgMain} src={currentNews.imgPreview} alt="" />
                  <div className={s.mainTextContainer}>
                     <div className={`mt40 ${s.filterText}`}>{currentNews?.filter?.subject}, {currentNews?.filter?.date}</div>
                     <div className={`mt48 ${s.title}`}>{currentNews.title}</div>
                     <div className={`mt48 ${s.subtitle}`}>{currentNews.subtitle}</div>
                     {currentNews.citation?.textBody && <div className={`mt38 ${s.citationConatiner}`}>
                        <div className={s.citationTextBody}>
                           «{currentNews.citation?.textBody}»
                        </div>
                        <div className={`mt20 ${s.authorInfoContainer}`}>
                           <div className={s.author}>{currentNews.citation?.author}</div>
                           <div className={s.jobTitle}>{currentNews.citation?.jobTitle}</div>
                        </div>
                     </div>}

                     <div className={`mt38 ${s.textBody}`}>
                        {currentNews.text}
                     </div>
                     <div className={`mt38 ${s.mediaTitle}`}>
                        {currentNews.media?.title}
                     </div>
                  </div>
                  <div className={s.imgContainer}>
                     {currentNews.media?.images.map((el, i) => <div key={i} className={s.maskContainer}>
                        <div className={s.pattern}></div>
                        <img className={s.img} src={el} alt="" />
                     </div>)}
                  </div>

               </div>
               <div className="ml20 columnSmal">
                  <FamilyYear />
                  <div className="mt40">
                     <TgChannel />
                  </div>
               </div>
            </div>

            {/* Последние новости */}
            <section className={s.lastNewsContainer}>
               <div className="mt80 subTitle">Последние новости</div>

               <div className="mt40 bannerArrowContainer">
                  <News rowLength={4} news={newsNew} />
               </div>

            </section>

         </ContantContainerMain>
      </div>
   )
}
export default NewsArticle;