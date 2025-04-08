import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './SavePast.module.css';

import imgBg from '../../assets/img/events/save_past.png';

import VkChannel from '../../BannersComopnents/VkChannel';
import TgChannel from '../../BannersComopnents/DevProgram';

const SavePast = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.news} className='breadcrumbsFrom'>Новости</NavLink>
               <span className='breadcrumbsTo'> / Сохраняя прошлое — защищаем будущее</span>
            </div>
            <div className={`mt40 columnContainer ${s.mobileContainer}`}>
               <div className="columnLarge">
                  <img className={s.imgMain} src={imgBg} alt="" />
                  <div className={s.mainTextContainer}>
                     {/* Фильтры, на будущее */}
                     <div className={`mt40 ${s.filterText}`}>Мероприятия, 4 сентября, 11:50</div>

                     <div className={`mt48 pageSubtitle ${s.mobilMt32}`}>В День города в Химках открыли мемориал героям-защитникам Отечества. Это первый подобный монумент в округе.</div>

                     {/* Цитаты, если есть */}


                     <div className={`mt38 text ${s.textBody}`} >
                        <p>
                           Композиция состоит из фигур двух воинов разных эпох — героя Великой Отечественной войны и бойца специальной военной операции. Постамент дополняет надпись «Сохраняя прошлое – защищаем будущее!», которую выбрали жители округа по итогам общенародного голосования.
                        </p>
                        <p>
                           Мемориал изготовлен коллективом мастерской «Римский мастер» в Ставропольском крае и символизирует связь поколений.
                        </p>

                        <div className={`mt38 ${s.citationConatiner}`}>
                           <div className={`${s.citationTextBody} borderLeftMain`}>
                              «Идея создания принадлежит работникам градообразующих предприятий и жителям Химок. Проект поддержали десятки тысяч единомышленников, участники СВО и их семьи, местные депутаты, общественники, активисты и глава округа.»
                           </div>
                           <div className={`mt20 ${s.authorInfoContainer}`}>
                              <div className={s.author}>Землякова Е. В.</div>
                              <div className={s.jobTitle}>Глава городского округа</div>
                           </div>
                        </div>

                        <p>
                           Символично, что капсулу с посланием потомкам в основание будущего мемориала глава округа и жители Химок заложили в День Победы — 9 мая 2024 года. В планах на будущее — создание аллеи защитников Родины, которая станет продолжением архитектурного ансамбля.
                        </p>
                        <p>
                           Мемориал расположен в особо значимом для города месте — на площади у Вечного огня, обелисков «Отстоявшим Отчизну» и «Химчанам, отдавшим жизнь за Родину». Окружают территорию тематические аллеи. Одна из них — аллея героев трудовой славы, которая состоит из арок, символизирующих градообразующие предприятия Химок. Дополняют архитектурный ансамбль бюсты заслуженных героев Отечества вдоль прогулочной зоны на проспекте Мира.
                        </p>
                     </div>
                  </div>

               </div>
               <div className="ml20 columnSmal mobileNoneContainer">
                  <VkChannel />
                  <div className="mt40">
                     <TgChannel />
                  </div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default SavePast;