import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import s from './TIC.module.css';

/* Фото */
import plug from '../../assets/img/khimkiDistrict/Symbolism/plug.svg';

const TIC = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / ТИК города Химки </span>
            </div>
            <div className={`mt24 pageTitle`}>Территориальная избирательная комиссия города химки </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink to={ROUTER.khimkiDistrict.ticDocuments} className={`${s.link}`}>Документы <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink to={ROUTER.khimkiDistrict.contactInformation} className={`${s.link}`}>Контактная информация избирательных участков, образованных на территории городского округа Химки <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>

            <div className={`mt80 borderMain ${s.card}`}>
               <div className={s.portrainContainer}>
                  <img src={plug} alt="" />
               </div>
               <div className={s.rightContainer}>
                  <div className={`mt8 ${s.cardSurname}`}>Территориальная избирательная комиссия города Химки образована на основании Решения Избирательной комиссии Московской области № 3/17-6 от 23.12.2016</div>

                  <div className={`mt24 ${s.subtitle}`}>Количественный состав ТИК – 12 чел.</div>

                  <div className={`mt32 ${s.cardMoreDetails}`}>Московская область, городской округ Химки, Калинина, 4</div>

                  <div className={`mt24 ${s.cardBtnRow}`}>
                     <div className='oval'>+7 (495) 572-64-22</div>
                     <div className='oval ml16'>tik_himki@mail.ru</div>
                  </div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default TIC;