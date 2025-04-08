import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import s from "./SchoolMuseumFestival.module.css";
import ContantContainerMain from "../../total/ContantContainerMain";
import { NavLink } from "react-router-dom";

import imgBg from "../../assets/img/events/SchoolMuseumFestival/bg/school-museum-festival.png";
import VkChannel from "../../BannersComopnents/VkChannel";
import TgChannel from "../../BannersComopnents/DevProgram";
import { ROUTER } from "../../config";

const images = require.context(
   "../../assets/img/events/SchoolMuseumFestival/event",
   false,
   /\.(png|jpe?g|svg)$/i
);

const importedImages = images.keys().map(images);

const SchoolMuseumFestival = () => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.news} className="breadcrumbsFrom">
                  Новости
               </NavLink>
               <span className="breadcrumbsTo"> / Фестиваль школьных музеев</span>
            </div>
            <div className={`mt40 columnContainer ${s.mobileContainer}`}>
               <div className="columnLarge">
                  <img className={s.imgMain} src={imgBg} alt="" />
                  <div className={s.mainTextContainer}>
                     <div className={`mt40 ${s.filterText}`}>
                        Мероприятия, 15 ноября, 11:50
                     </div>
                     <div className={`mt48 pageSubtitle ${s.mobilMt32}`}>
                        В Химках стартовал масштабный фестиваль школьных музеев
                     </div>
                     <div className={`mt38 text ${s.textBody}`}>
                        <p>
                           В городском округе Химки проходит масштабный фестиваль
                           школьных музеев. В одном пространстве собрали выставку
                           экспонатов времён Великой Отечественной войны, специальной
                           военной операции и истории города. В экспозиции – 500
                           уникальных предметов из 19 школ города.
                        </p>

                        <div className={`mt38 ${s.citationConatiner}`}>
                           <div className={`${s.citationTextBody} borderLeftMain`}>
                              «Мы делаем всё для того, чтобы школьный музей был не просто площадкой для экскурсий, а новым современным образовательным пространством. Местом, где переплетаются история и герои, которые внесли значимый вклад в развитие нашей Великой страны»
                           </div>
                           <div className={`mt20 ${s.authorInfoContainer}`}>
                              <div className={s.author}>Землякова Е. В.</div>
                              <div className={s.jobTitle}>Глава городского округа</div>
                           </div>
                        </div>

                        <p>
                           Экспонаты для выставки представили 19 школьных музеев
                           городского округа:
                        </p>
                        <br />
                        <br />
                        <ul>
                           <li>Школа №1</li>
                           <li>Лицей №7</li>
                           <li>Школа №8</li>
                           <li>Школа «Наследие»</li>
                           <li>Гимназия №9</li>
                           <li>Лицей №10</li>
                           <li>Лицей №12</li>
                           <li>Школа «Триумф»</li>
                           <li>«Аэрокосмический лицей»</li>
                           <li>Школа №14</li>
                           <li>Лицей №15</li>
                           <li>Школа №19</li>
                           <li>Школа №20</li>
                           <li>Лицей № 21</li>
                           <li>Гимназия №23</li>
                           <li>Школа «Флагман»</li>
                           <li>Школа «Лига первых»</li>
                           <li>Школа №30</li>
                           <li>Школа «Лидер»</li>
                        </ul>

                        <p>Проводниками по фестивалю стали представители Общества краеведов, а также юные экскурсоводы — школьники.</p>

                        <p>
                           Даты фестиваля выбраны неслучайно. Выставка стартовала 7 ноября – в День проведения военного парада на Красной площади в 1941 году. Это историческое событие имело огромное значение, способствовало укреплению морального духа народа и Вооружённых Сил, продемонстрировало всему миру решимость отстоять Москву и разгромить врага. Символично, что окончание фестиваля выбрали так же в значимую для страны дату – 5 декабря, в День начала контрнаступления советских войск в битве под Москвой.
                        </p>

                        <p>
                           Выставка работает до 5 декабря в выставочном комплексе
                           «Артишок».
                           <br />
                           Вход – свободный со среды по воскресенье с
                           10:00-18:00.
                        </p>
                        <div className={s.imgContainer}>
                           <PhotoProvider>
                              {importedImages.map((src, index) => (
                                 <PhotoView key={index} src={src}>
                                    <img src={src} alt="" className={s.img} />
                                 </PhotoView>
                              ))}
                           </PhotoProvider>
                        </div>
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
   );
};

export default SchoolMuseumFestival;
