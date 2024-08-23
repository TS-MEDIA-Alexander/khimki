import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './PerformanceIndicators.module.css';

/* Компоненты */
import ContantContainerMain from '../../total/ContantContainerMain';
import SpoilerContainer from '../../Components/SpoilerContainer';
import SpoilerItem from '../../Components/SpoilerContainer/SpoilerItem';

/* Фото */
import mayor from '../../assets/img/khimkiDistrict/mayorPortrain.png';
import map from '../../assets/img/khimkiDistrict/map.png';
import playground from '../../assets/img/khimkiDistrict/playground.png';
import ecoberegPark from '../../assets/img/khimkiDistrict/EcoberegPark.png';
import ecoberegParkLarge from '../../assets/img/khimkiDistrict/EcoberegParkLarge.png';
import ecoberegParkLandscape from '../../assets/img/khimkiDistrict/ecoberegParkLandscape.png';
import podrezkovoPark from '../../assets/img/khimkiDistrict/PodrezkovoPark.png';
import podrezkovoParkLarge from '../../assets/img/khimkiDistrict/podrezkovoParkLarge.png';
import podrezkovoParklandscape from '../../assets/img/khimkiDistrict/podrezkovoParklandscape.png';
import podrezkovoParkSmall from '../../assets/img/khimkiDistrict/PodrezkovoParkSmall.png';
import BarashkinskyPond from '../../assets/img/khimkiDistrict/BarashkinskyPond.png';
import yakovlevoPark from '../../assets/img/khimkiDistrict/YakovlevoPark.png';

const PerformanceIndicators = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Городской округ Химки </span>
            </div>
            <div className={`mt80 pageTitle`}>Городской округ Химки</div>
            <div className={`mt80 ${s.mapContainer}`}>

               <div className={`borderMain ${s.mapBlock}`}>
                  <div className={s.textBlock}>
                     <div className={s.subtitle}>Городской округ Химки</div>
                     <div className={`mt8 ${s.mapDescription}`}>
                        В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов
                     </div>
                  </div>
                  <div className={s.mapImgContainer}>
                     <img src={map} alt="" />
                  </div>
               </div>
               <div className={s.blockContainerColumn}>
                  <div className={`borderMain ${s.mayorBlock}`}>
                     <div className={s.imgMayorContainer}>
                        <img src={mayor} alt="" />
                     </div>
                     <div className={s.textBlock}>
                        <div className={`mt12 ${s.subtitle}`}>
                           Наша главная цель развивать и улучшать все в нашем округе.
                        </div>
                        <div className={`mt24 ${s.subtitle}`}>
                           Волошин Д.В.
                        </div>
                        <div className={`mt8 ${s.description}`}>
                           Глава городского округа Химки
                        </div>
                     </div>
                  </div>

                  <div className={`borderMain ${s.infoBlock}`}>

                  </div>
               </div>
            </div>

            <div className={`mt80 ${s.pageTitle}`}>Показатели работы Администрации городского округа Химки по направлениям</div>

            <div className="mt40">
               <SpoilerContainer title={'Данные с 2016 по 2023  г.'}>
                  <SpoilerItem title={'Благоустройство'}>
                     <div className={`mt40 ${s.pageTitle}`}>Дворы</div>
                     <div className={`mt40 borderMain ${s.columnContainer}`}>
                        <div className={s.indicatorsBlocksContainer}>
                           <div className={s.indicatorsBlock}>
                              <div className={s.textRow}>
                                 <div className={s.date}>2013-2023 гг.</div>
                                 <div className={`ml20 ${s.description}`}>Комплексно благоустроили</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>406</span> дворов</div>
                           </div>
                           <div className={`mt16 ${s.indicatorsBlock}`}>
                              <div className={`mt32 ${s.textRow}`}>
                                 <div className={s.date}>2019-2023 г.</div>
                                 <div className={`ml20 ${s.description}`}>Установили по программе губернатора</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>20</span> детских площадок</div>
                           </div>
                           <div className={`mt16 ${s.indicatorsBlock}`}>
                              <div className={`mt32 ${s.textRow}`}>
                                 <div className={s.date}>2021-2023 гг.</div>
                                 <div className={`ml20 ${s.description}`}>Благоустроили</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>52</span> народные тропы</div>
                           </div>
                        </div>
                        <div>
                           <div className={s.imgContainer}>
                              <img src={playground} alt="" />
                           </div>
                           <div className={s.imgDescription}>Обустройство детской площадки, ул. Берёзовая аллея, д. 3</div>
                        </div>
                     </div>

                     <div className={`mt80 ${s.pageTitle}`}>Парки</div>
                     <div className={`mt40 borderMain ${s.columnContainer}`}>
                        <div className={s.indicatorsBlocksContainer}>
                           <div className={s.indicatorsBlock}>
                              <div className={s.textRow}>
                                 <div className={s.date}>2013-2023 гг.</div>
                                 <div className={`ml20 ${s.description}`}>Благоустроили</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>11</span> парковых зон</div>
                              <div className={`mt16 ${s.description}`}>Площадью более 100 Га</div>
                           </div>
                           <div className={`mt16 ${s.indicatorsBlock}`}>
                              <div className={`mt32 ${s.textRow}`}>
                                 <div className={s.date}>2019-2023 г.</div>
                                 <div className={`ml20 ${s.description}`}>Построили новые зоны отдыха</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>20</span> детских площадок</div>
                              <div className={`mt16 ${s.description}`}>«Экоберег», «Подрезково», «Два берега», </div>
                           </div>
                        </div>
                        <div className={s.imgContainerDuble}>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={ecoberegPark} alt="" />
                              </div>
                              <div className={s.imgDescription}>Парк «Экоберег»</div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={podrezkovoPark} alt="" />
                              </div>
                              <div className={s.imgDescription}>Парк «Подрезково»</div>
                           </div>
                        </div>
                     </div>

                     <div className={`mt80 ${s.pageTitle}`}>Масштабная реконструкция парка Толстого</div>
                     <div className="mt40 borderMain">
                        <div className={` ${s.columnContainer}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.textRow}>
                                 <div className={s.date}>2013-2023 гг.</div>
                                 <div className={`ml20 ${s.description}`}>Первый этап</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>12</span> Га</div>
                              <ul>
                                 <li className={s.description}>Новые пешеходные дорожки</li>
                                 <li className={s.description}>Сухой фонтан</li>
                                 <li className={s.description}>Новая музейная площадь</li>
                                 <li className={s.description}>Первая линия велодорожек</li>
                                 <li className={s.description}>Детская площадка</li>
                              </ul>
                           </div>
                           <div>
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                 <img src={ecoberegParkLarge} alt="" />
                              </div>
                              <div className={s.imgDescription}>Парк «Экоберег»</div>
                           </div>

                        </div>
                        <div className={`mt20 ${s.columnContainer}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.textRow}>
                                 <div className={s.date}>2013-2023 гг.</div>
                                 <div className={`ml20 ${s.description}`}>Второй этап</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>13</span> Га</div>
                              <ul>
                                 <li className={s.description}>Сцена с амфитеатром</li>
                                 <li className={s.description}>Новая пляжная зона</li>
                                 <li className={s.description}>Смотровые площадки</li>
                              </ul>
                           </div>
                           <div>
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                 <img src={podrezkovoParkLarge} alt="" />
                              </div>
                              <div className={s.imgDescription}>Парк «Подрезково»</div>
                           </div>
                        </div>
                     </div>

                     <div className={`mt80 ${s.pageTitle}`}>Планы по благоустройству </div>
                     <div className="mt40 borderMain">

                        <div className={s.indicatorsBlocksContainer}>
                           <div className={s.textRow}>
                              <div className={s.date}>Программа губернатора «Парки в лесу»</div>
                              <div className={`ml20 ${s.description}`}>Самая большая лесопарковая зона в городе </div>
                           </div>
                           <div className={`mt16 ${s.textBody}`}><span>130</span> Га</div>
                        </div>

                        <div className={`mt24 ${s.columnContainer}`}>
                           <div>
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                 <img src={ecoberegParkLandscape} alt="" />
                              </div>
                              <div className={s.imgDescription}>Парк «Экоберег»</div>
                           </div>
                           <div>
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                 <img src={podrezkovoParklandscape} alt="" />
                              </div>
                              <div className={s.imgDescription}>Парк «Подрезково»</div>
                           </div>
                        </div>
                     </div>

                     <div className={`mt80 ${s.pageTitle}`}>Планы по благоустройству </div>
                     <div className="mt40 borderMain">
                        <div className={` ${s.columnContainer}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.textRow}>
                                 <div className={s.date}>Программа губернатора «Парки в лесу»</div>
                                 <div className={`ml20 ${s.description}`}>Планы по благоустройству на</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>2024-2025</span> гг</div>
                              <ul>
                                 <li className={s.description}>Парк «Яковлево»</li>
                                 <li className={s.description}>Набережная «Васко да гама»</li>
                                 <li className={s.description}>Барашкинский пруд</li>
                                 <li className={s.description}>Сквер «Юбилейный»</li>
                                 <li className={s.description}>Сквер «Юность»</li>
                                 <li className={s.description}>Экоберег</li>
                                 <li className={s.description}>Парк «Подрезково»</li>
                              </ul>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={BarashkinskyPond} alt="" />
                              </div>
                              <div className={s.imgDescription}>Барашкинский пруд</div>
                              <div className={`mt20 ${s.imgContainerDuble}`}>
                                 <div>
                                    <div className={s.imgContainer}>
                                       <img src={yakovlevoPark} alt="" />
                                    </div>
                                    <div className={s.imgDescription}>Парк «Яковлево»</div>
                                 </div>
                                 <div>
                                    <div className={s.imgContainer}>
                                       <img src={podrezkovoParkSmall} alt="" />
                                    </div>
                                    <div className={s.imgDescription}>Парк «Подрезково»</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SpoilerItem>

                  <div className="mt24">
                     <SpoilerItem title={'Транспорт'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'ЖКХ'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Здравоохранение'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Образование'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Социальная поддержка'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Безопасность'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Жилье'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Новые территории'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Спорт'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Культура'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Экономика'}>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Спорт'}>
                     </SpoilerItem>
                  </div>

               </SpoilerContainer>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PerformanceIndicators;