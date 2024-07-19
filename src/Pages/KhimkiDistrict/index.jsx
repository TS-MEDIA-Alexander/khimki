import React, { useState } from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import Map from '../../Components/Map';
import s from './KhimkiDistrict.module.css';
import DistrictAbout from '../../Components/DistrictAbout';

/* Иконки */
import arrow_btn_link from '../../assets/icons/arrow_btn_link.svg';
import arrow from '../../assets/icons/arrowUppGreen.svg';
import radialDiagram from '../../assets/img/khimkiDistrict/radialDiagram.png';

/* Гербы округов */
import skhodnya from '../../assets/icons/khimkiDistrict/skhodnya.svg';
import podrezkovo from '../../assets/icons/khimkiDistrict/podrezkovo.svg';
import klyazmaStarbeevo from '../../assets/icons/khimkiDistrict/klyazma-starbeevo.svg';
import kutuzovskoye from '../../assets/icons/khimkiDistrict/kutuzovskoye.svg';
import lunyovskoye from '../../assets/icons/khimkiDistrict/lunyovskoye.svg';
import DistrictCard from '../../Components/DistrictCard';

/* Фото */
import videoPreview from '../../assets/img/khimkiDistrict/videoPreview.png';
import mayor from '../../assets/img/khimkiDistrict/mayor.png';
import MunicipalProgramsMini from '../../BannersComopnents/MunicipalProgramsMini';
import Problem from '../../BannersComopnents/Problem';

const KhimkiDistrict = (props) => {

   const [curDistrictId, setCurDistrictId] = useState('skhodnya-firsanovka')

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 ${s.title}`}>Городской округ Химки</div>
            <div className={`mt80 ${s.mapContainer}`}>
               <Map fnSet={setCurDistrictId} />
               <DistrictAbout curDistrictId={curDistrictId} />
            </div>
            <div className="bannerArrowContainer">
               <div className={`mt32 borderMain ${s.districtCard}`}>
                  <DistrictCard title={'Сходня-Фирсановка'} img={skhodnya} src='' />
                  <DistrictCard title={'Новогорск-Планерная'} src='' />
                  <DistrictCard title={'Левобережный'} src='' />
                  <DistrictCard title={'Подрезково'} img={podrezkovo} src='' />
                  <DistrictCard title={'Клязьма-Старбеево'} img={klyazmaStarbeevo} src='' />
                  <DistrictCard title={'Кутузовское'} img={kutuzovskoye} src='' />
                  <DistrictCard title={'Луневское'} img={lunyovskoye} src='' />
               </div>
               <div className={`mt32 borderMain ${s.districtBanner}`}>
                  <div className={s.textContainer}>
                     <div className={s.bannerTitle}><img src={arrow} alt="" />277 185 человек</div>
                     <div className={`mt8 ${s.description}`}>Cуммарная численность населения округа 2023 г.</div>
                  </div>
                  <img className={`mt12 ${s.radialDiagram}`} src={radialDiagram} alt="" />
                  <div className="mt32">
                     <div className={s.districtTextContainer}>
                        <div className={`${s.districtName} ${s.skhodnyaFirsanovka}`}>Сходня-Фирсановка</div>
                        <div className={s.statistiCscount}>30 185</div>
                     </div>
                     <div className={s.districtTextContainer}>
                        <div className={`${s.districtName} ${s.novogorskPlanernaya}`}>Новогорск-Планерная</div>
                        <div className={s.statistiCscount}>5 185</div>
                     </div>
                     <div className={s.districtTextContainer}>
                        <div className={`${s.districtName} ${s.levoberezhniy}`}>Левобережный</div>
                        <div className={s.statistiCscount}>8 195</div>
                     </div>
                     <div className={s.districtTextContainer}>
                        <div className={`${s.districtName} ${s.podrezkovo}`}>Подрезково</div>
                        <div className={s.statistiCscount}>124 109</div>
                     </div>
                     <div className={s.districtTextContainer}>
                        <div className={`${s.districtName} ${s.klyazmaStarbeevo}`}>Клязьма-Старбеево</div>
                        <div className={s.statistiCscount}>12 145</div>
                     </div>
                     <div className={s.districtTextContainer}>
                        <div className={`${s.districtName} ${s.kutuzovskoye}`}>Кутузовское</div>
                        <div className={s.statistiCscount}>6 154</div>
                     </div>
                     <div className={s.districtTextContainer}>
                        <div className={`${s.districtName} ${s.lunevskoye}`}>Луневское</div>
                        <div className={s.statistiCscount}>45 185</div>
                     </div>
                  </div>

               </div>
               <div className={`mt32 borderMain ${s.districtBanner}`}>
                  <div className={s.bannerTitle}>Городской округ Химки</div>
                  <div className={`mt8 ${s.description}`}>В цифрах 2023 г.</div>
                  <div className="mt32">
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.area}`}>Площадь (Г)</div>
                        <div className={s.statistiCscount}>25 777</div>
                     </div>
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.forest}`}>Леса на территории округа (Г)</div>
                        <div className={s.statistiCscount}>9 919</div>
                     </div>
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.schools}`}>Школы</div>
                        <div className={s.statistiCscount}>108</div>
                     </div>
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.outpatientClinics}`}>Амбулатории</div>
                        <div className={s.statistiCscount}>15</div>
                     </div>
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.kindergartens}`}>Детские сады</div>
                        <div className={s.statistiCscount}>86</div>
                     </div>
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.sports}`}>Спортивные комплексы</div>
                        <div className={s.statistiCscount}>23</div>
                     </div>
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.busines}`}>Крупные предприятия</div>
                        <div className={s.statistiCscount}>19</div>
                     </div>
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.flightsStairs}`}>Лестничные пролеты</div>
                        <div className={s.statistiCscount}>167</div>
                     </div>
                     <div className={s.districtLineChart}>
                        <div className={`${s.lineChart} ${s.skyscrapers}`}>Небоскребы</div>
                        <div className={s.statistiCscount}>12</div>
                     </div>

                  </div>

               </div>
            </div>
            <div className="bannerArrowContainer">
               <div className={`mt32 borderMain ${s.districtVideo}`}>
                  <iframe className={s.borderR} src="https://www.youtube.com/embed/xfBzWJyErEc?si=9p-cJfQhW45QsOo3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               </div>
               <div className={`mt32 borderMain ${s.districtBanner}`}>
                  <div className={s.bannerTitle}>Показатели работы</div>
                  <div className={`mt8 ${s.description}`}>Администрации городского округа</div>
                  <img className={`mt24 ${s.borderR}`} src={mayor} alt="" />
                  <div className={`mt32 ${s.text}`}>Мы любим наш город и сделаем все, что бы каждый день он становился лучше!</div>
                  <div className={`mt20 ${s.author}`}>Волошин Д.В.</div>
                  <div className={`btnCircleG ${s.btn}`}><img src={arrow_btn_link} alt="" /></div>
               </div>
            </div>
            <div className="bannerArrowContainer">
               <div className={`mt32 borderMain ${s.sectionMap}`}>
                  <div className={s.sectionMapTitle}>Карта раздела </div>
                  <div className="mt40 bannerArrowContainer">
                     <div className={s.column}>
                        <div className={s.item}>Устав, символика, карта </div>
                        <div className={s.item}>Глава городского округа</div>
                        <div className={s.item}>Руководство </div>
                        <div className={s.item}>Структура Администрации </div>
                        <div className={s.item}>Деятельность</div>
                        <div className={s.item}>Муниципальные программы  </div>
                     </div>
                     <div className={s.column}>
                        <div className={s.item}>Социальные программы  </div>
                        <div className={s.item}>Информационные системы </div>
                        <div className={s.item}>Обращения граждан  </div>
                        <div className={s.item}>Присяжные заседатели  </div>
                        <div className={s.item}>Совет депутатов   </div>
                        <div className={s.item}>ТИК города Химки  </div>
                     </div>
                     <div className={s.column}>
                        <div className={s.item}>Контрольно-счетная палата </div>
                        <div className={s.item}>Общественная палата </div>
                        <div className={s.item}>Наукоград</div>
                        <div className={s.item}>Общество</div>
                        <div className={s.item}>Общественные организации</div>
                        <div className={s.item}>Государственные организации</div>
                     </div>
                     <MunicipalProgramsMini />
                  </div>
               </div>
            </div>

            <div className="mt32 bannerArrowContainer">
               <Problem />
               <Problem />
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default KhimkiDistrict;