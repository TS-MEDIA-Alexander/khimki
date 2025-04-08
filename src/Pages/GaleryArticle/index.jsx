import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './GaleryArticle.module.css';
import { useParams } from 'react-router-dom';

import FamilyYear from '../../BannersComopnents/FamilyYear';
import TgChannel from '../../BannersComopnents/TgChannel';

/* Галерея */
import galery from '../../backend/galery/galery';
import Galery from '../../Components/Galery';

const GaleryArticle = (props) => {

   const galeryNew = galery.slice(0, 4);

   const userID = useParams().id.slice(3);

   const [currentGalery, setCurrentGalery] = useState({});

   useEffect(() => {
      setCurrentGalery(galery.filter(el => el.id == userID)[0]);
   }, [userID])

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 ${s.breadcrumbs}`}>
               <NavLink to={ROUTER.galery} className='breadcrumbsFrom'>Галерея</NavLink>
               <span className={s.breadcrumbsTo}> / {currentGalery.title}</span>
            </div>
            <div className="mt40 columnContainer">
               <div className="columnLarge">
                  <img className={s.imgMain} src={currentGalery.imgPreview} alt="" />
                  <div className={s.mainTextContainer}>
                     <div className={`mt40 ${s.filterText}`}>{currentGalery?.filter?.subject}, {currentGalery?.filter?.date}</div>
                     <div className={`mt48 ${s.title}`}>{currentGalery.title}</div>
                     <div className={`mt48 ${s.subtitle}`}>{currentGalery.subtitle}</div>

                     <div className={`mt38 ${s.textBody}`}>
                        {currentGalery.text}
                     </div>
                     <div className={`mt38 ${s.mediaTitle}`}>
                        {currentGalery.media?.title}
                     </div>
                  </div>
                  <div className={s.imgContainer}>
                     {currentGalery.media?.images.map((el, i) => <div key={i} className={s.maskContainer}>
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

            {/* Последние обновления  */}
            <section className={s.lastGaleryContainer}>
               <div className="mt80 subTitle">Последние обновления </div>

               <div className="mt40 bannerArrowContainer">
                  <Galery rowLength={4} galery={galeryNew} />
               </div>

            </section>

         </ContantContainerMain>
      </div>
   )
}
export default GaleryArticle;