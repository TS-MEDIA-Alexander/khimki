import React, { useState } from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import Map from '../../Components/Map';
import s from './KhimkiDistrict.module.css';
import DistrictAbout from '../../Components/DistrictAbout';
import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

/* Иконки */
import arrow_btn_link from '../../assets/icons/arrow_btn_link.svg';
import arrow from '../../assets/icons/arrowUppGreen.svg';
import radialDiagram from '../../assets/img/khimkiDistrict/radialDiagram.png';

/* Гербы округов и Химок*/
import gerb from '../../assets/img/khimkiDistrict/Symbolism/gerb.png';
import skhodnya from '../../assets/icons/khimkiDistrict/skhodnya.svg';
import podrezkovo from '../../assets/icons/khimkiDistrict/podrezkovo.svg';
import klyazmaStarbeevo from '../../assets/icons/khimkiDistrict/klyazma-starbeevo.svg';
import kutuzovskoye from '../../assets/icons/khimkiDistrict/kutuzovskoye.svg';
import lunyovskoye from '../../assets/icons/khimkiDistrict/lunyovskoye.svg';
import DistrictCard from '../../Components/DistrictCard';

/* Фото */
import mayor from '../../assets/img/Persons/mayorPortrain.png';

/* Баннеры */
import MunicipalProgramsMini from '../../BannersComopnents/MunicipalProgramsMini';
import Problem from '../../BannersComopnents/Problem';

/* Нужно решить баг с видео (в консоле вылетают ошибки) */
/* import ReactPlayer from 'react-player'; */

const KhimkiDistrict = (props) => {

   const [curDistrictId, setCurDistrictId] = useState('skhodnya-firsanovka')

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 pageTitle`}>Городской округ Химки</div>
            <div className={`mt80 ${s.mapContainer}`}>
               <Map fnSet={setCurDistrictId} />
               <DistrictAbout curDistrictId={curDistrictId} />
            </div>
            <div className="bannerArrowContainer">
               <div className={`mt32 borderMain ${s.districtCard}`}>
                  <DistrictCard fnSet={setCurDistrictId} id={'skhodnya-firsanovka'} title={'Сходня-Фирсановка'} img={skhodnya} src='' />
                  <DistrictCard fnSet={setCurDistrictId} id={'novogorsk-planernaya'} title={'Новогорск-Планерная'} src='' />
                  <DistrictCard fnSet={setCurDistrictId} id={'levoberezhniy'} title={'Левобережный'} src='' />
                  <DistrictCard fnSet={setCurDistrictId} id={'podrezkovo'} title={'Подрезково'} img={podrezkovo} src='' />
               </div>
               <div className={`mt32 borderMain ${s.districtCard}`}>
                  <DistrictCard fnSet={setCurDistrictId} id={'klyazma-starbeevo'} title={'Клязьма-Старбеево'} img={klyazmaStarbeevo} src='' />
                  <DistrictCard fnSet={setCurDistrictId} id={'kutuzovskoye'} title={'Кутузовское'} img={kutuzovskoye} src='' />
                  <DistrictCard fnSet={setCurDistrictId} id={'lunyovskoye'} title={'Лунёвское'} img={lunyovskoye} src='' />
               </div>
               {/* <div className={`mt32 borderMain ${s.districtBanner}`}>
                  <div className={s.textContainer}>
                     <div className={s.bannerTitle}><img src={arrow} alt="" />411 000 человек</div>
                     <div className={`mt8 ${s.description} ${s.description_center}`}>Cуммарная численность населения округа в 2023 г.</div>
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
               </div> */}
               {/* <div className={`mt32 borderMain ${s.districtBanner}`}>
                  <div className={s.bannerTitle}>Городской округ Химки</div>
                  <div className={`mt8 ${s.description}`}>В цифрах 2023 г.</div>
                  <div className={`mt32 ${s.container}`}>
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
               </div> */}
            </div>
            <div className="bannerArrowContainer">
               <div className={`mt32 borderMain ${s.districtVideo}`}>
                  {/* <iframe className={s.borderR} src="https://www.youtube.com/embed/xfBzWJyErEc?si=9p-cJfQhW45QsOo3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

                  <iframe className={s.borderR} src="https://rutube.ru/play/embed/d6076888fa49c5cc7f021c8516b9b70c/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

                  {/* В консоли вылетают ошибки, а также подгружается много информации из-за ютубовского iframe. Есть решение с ReactPlayer */}
                  {/* <ReactPlayer
                  light
                  url={"https://www.youtube.com/embed/xfBzWJyErEc?si=9p-cJfQhW45QsOo3"}
                  width="100%"
                  height={"240px"}
                  /> */}

               </div>
               <NavLink to={ROUTER.khimkiDistrict.performanceIndicators} className={`mt32 borderMain ${s.districtBanner}`}>
                  <div className={s.bannerTitle}>Показатели работы</div>
                  <div className={`mt48 ${s.imgContainerMayor}`}>
                     <img className={s.borderR} src={mayor} /* src={gerb} */ alt="" />
                  </div>
                  <div className={`mt32 ${s.text}`}>Мы любим наш город и сделаем все, что бы каждый день он становился лучше!</div>
                  <div className={`mt20 ${s.author}`}>Землякова Е. В.</div>
                  <br />
                  <br />
                  <br />
                  
                  <div className={`btnCircleG ${s.btn}`}><img src={arrow_btn_link} alt="" /></div>
               </NavLink>
            </div>
            <div className="bannerArrowContainer">
               <div className={`mt32 borderMain ${s.sectionMap}`}>
                  <div className={s.sectionMapTitle}>Карта раздела </div>
                  <div className={`mt40 bannerArrowContainer ${s.mobilArrowContainer}`}>
                     <div className={s.column}>
                        <NavLink to={ROUTER.khimkiDistrict.symbolism}  className={s.item}>Устав, символика, карта </NavLink>
                        <NavLink to={ROUTER.khimkiDistrict.administrationStructure} className={s.item}>Структура Администрации </NavLink>
                        <NavLink to={ROUTER.activity.municipalPrograms} className={s.item}>Муниципальные программы </NavLink>
                        <NavLink to={ROUTER.khimkiDistrict.auditChamber} className={s.item}>Контрольно-счетная палата </NavLink>
                     </div>
                     <div className={s.column}>
                        <a href='https://sdhimki.ru/' target='_blank' className={s.item}>Совет депутатов </a>
                        <NavLink to={ROUTER.khimkiDistrict.tic} className={s.item}>ТИК города Химки </NavLink>
                        <NavLink to={ROUTER.khimkiDistrict.publicOrganizations} className={s.item}>Общественные организации  </NavLink>
                     </div>
                     <div className={s.column}>
                        <NavLink to={ROUTER.khimkiDistrict.governmentAgency} className={s.item}>Государственные организации</NavLink>
                        <NavLink to={ROUTER.khimkiDistrict.scienceCity} className={s.item}>Наукоград</NavLink>
                        <NavLink to={ROUTER.khimkiDistrict.informationSystems} className={s.item}>Информационные системы</NavLink>
                     </div>
                     <div className={s.mobilMt24}>
                        <MunicipalProgramsMini />
                     </div>
                  </div>
               </div>
            </div>

            {/* <div className={`mt32 bannerArrowContainer mobileNoneContainer ${s.mobilBannerArrowContainer}`}>
               <Problem />
               <Problem />
            </div> */}
         </ContantContainerMain>
      </div>
   )
}
export default KhimkiDistrict;