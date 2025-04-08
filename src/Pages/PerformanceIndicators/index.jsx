import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './PerformanceIndicators.module.css';

/* Компоненты */
import ContantContainerMain from '../../total/ContantContainerMain';
import SpoilerContainer from '../../Components/SpoilerContainer';
import SpoilerItem from '../../Components/SpoilerContainer/SpoilerItem';

/* Иконки */
import arrow from '../../assets/icons/arrowDownSelect.svg';

/* Фото */
import mayor from '../../assets/img/Persons/mayorPortrain.png';
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

import transport from '../../assets/img/khimkiDistrict/transport.png';
import residentialСomplex1 from '../../assets/img/khimkiDistrict/residential-complex-solar-system-1.png';
import residentialСomplex2 from '../../assets/img/khimkiDistrict/residential-complex-solar-system-2.png';
import repinskayaJunction1 from '../../assets/img/khimkiDistrict/repinskaya-junction-1.png';
import repinskayaJunction2 from '../../assets/img/khimkiDistrict/repinskaya-junction-2.png';

import entranceHouseGorshina from '../../assets/img/khimkiDistrict/entrance-to-house-no-8-on-gorshina-street.png';

import modernizationHeatSupply1 from '../../assets/img/khimkiDistrict/modernization-of-heat-supply-1.png';
import modernizationHeatSupply2 from '../../assets/img/khimkiDistrict/modernization-of-heat-supply-2.png';
import modernizationHeatSupply3 from '../../assets/img/khimkiDistrict/modernization-of-heat-supply-3.png';

import polyclinicSovkhoznaya from '../../assets/img/khimkiDistrict/polyclinic-n7-st-sovkhoznaya-21.png';

import polyclinicLavochkina from '../../assets/img/khimkiDistrict/polyclinic-no-2-lavochkina-st-building-22.png';

import medicineCar from '../../assets/img/khimkiDistrict/medicine-car.png';

import school from '../../assets/img/khimkiDistrict/school.png';

import plug from '../../assets/img/khimkiDistrict/plug.png';

import imageEconomy1 from '../../assets/img/khimkiDistrict/imageEconomy1.png';
import imageEconomy2 from '../../assets/img/khimkiDistrict/imageEconomy2.png';
import imageEconomy3 from '../../assets/img/khimkiDistrict/imageEconomy3.png';
import imageEconomy4 from '../../assets/img/khimkiDistrict/imageEconomy4.png';
import imageEconomy5 from '../../assets/img/khimkiDistrict/imageEconomy5.png';
import imageEconomy6 from '../../assets/img/khimkiDistrict/imageEconomy6.png';


const PerformanceIndicators = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Городской округ Химки </span>
            </div>
            <h1 className={`mt80 pageTitle`}>Городской округ Химки</h1>
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
                           Вместе с командой единомышленников мы ежегодно реализуем сотни проектов, чтобы сделать жизнь химчан комфортнее
                        </div>
                        <div className={`mt24 ${s.subtitle}`}>
                           Землякова Е.В.
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

            <div className={`mt80 pageSubtitle`}>Показатели работы Администрации городского округа Химки по направлениям</div>

            <div className={`mt80 bgMain ${s.btnLinkOld}`}>
               Химки 2024 и 2025: итоги и планы
               <a href='https://old.admhimki.ru/itogi-2024-goda/' target='_blank' className={s.btnLink} rel="noreferrer">Посмотреть <img className={s.rotate} src={arrow} alt="" /></a>
            </div>

            <div className="mt80">
               <SpoilerContainer title={'Данные с 2013 по 2023 гг.'}>
                  <SpoilerItem title={'Благоустройство'}>
                     <div className={`mt40 pageSubtitle`}>Дворы</div>
                     <div className={`mt40 borderMain ${s.columnContainerRow}`}>
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
                                 <div className={s.date}>2019-2023 гг.</div>
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

                     <div className={`mt80 pageSubtitle`}>Парки</div>
                     <div className={`mt40 borderMain ${s.columnContainerRow}`}>
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
                                 <div className={s.date}>2019-2023 гг.</div>
                                 <div className={`ml20 ${s.description}`}>Построили новые зоны отдыха</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>28</span> именных скверов</div>
                              <div className={`mt16 ${s.description}`}>«Экоберег», «Подрезково», «Два берега». </div>
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

                     <div className={`mt80 pageSubtitle`}>Масштабная реконструкция парка Толстого</div>
                     <div className={`mt40 borderMain  ${s.columnContainer}`}>
                        <div className={`${s.flexContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.textRow}>
                                 <div className={s.date}>2013-2023 гг.</div>
                                 <div className={`ml20 ${s.description}`}>Первый этап</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>12</span> Га</div>
                              <ul className='mt16'>
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
                              <div className={s.imgDescription}>Парк им. Л.Н. Толстого</div>
                           </div>

                        </div>
                        <div className={`mt20 ${s.flexContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.textRow}>
                                 <div className={s.date}>2013-2023 гг.</div>
                                 <div className={`ml20 ${s.description}`}>Второй этап</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>13</span> Га</div>
                              <ul className='mt16'>
                                 <li className={s.description}>Сцена с амфитеатром</li>
                                 <li className={s.description}>Новая пляжная зона</li>
                                 <li className={s.description}>Смотровые площадки</li>
                              </ul>
                           </div>
                           <div>
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                 <img src={podrezkovoParkLarge} alt="" />
                              </div>
                              <div className={s.imgDescription}>Парк им. Л.Н. Толстого</div>
                           </div>
                        </div>
                     </div>

                     <div className={`mt80 pageSubtitle`}>Благоустройство Химкинского лесопарка  </div>
                     <div className={`mt40 borderMain ${s.columnContainer}`}>
                        <div className={s.indicatorsBlocksContainer}>
                           <div className={s.textRow}>
                              <div className={s.date}>Программа губернатора «Парки в лесу»</div>
                              <div className={`ml20 ${s.description}`}>Самая большая лесопарковая зона в городе </div>
                           </div>
                           <div className={`mt16 ${s.textBody}`}><span>130</span> Га</div>
                        </div>

                        <div className={`mt24 ${s.flexContainerRow}`}>
                           <div>
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                 <img src={ecoberegParkLandscape} alt="" />
                              </div>
                              <div className={s.imgDescription}>Химкинский лес</div>
                           </div>
                           <div>
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                 <img src={podrezkovoParklandscape} alt="" />
                              </div>
                              <div className={s.imgDescription}>Химкинский лес</div>
                           </div>
                        </div>
                     </div>

                     <div className={`mt80 pageSubtitle`}>Планы по благоустройству </div>
                     <div className={`mt40 borderMain ${s.columnContainer}`}>
                        <div className={` ${s.flexContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.textRow}>
                                 <div className={s.date}>Программа губернатора «Парки в лесу»</div>
                                 <div className={`ml20 ${s.description}`}>Планы по благоустройству на</div>
                              </div>
                              <div className={`mt16 ${s.textBody}`}><span>2024-2025</span> гг</div>
                              <ul className='mt16'>
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
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
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
                        <div className={`mt80 pageSubtitle`}>В сентябре 2023 г. в Химках запустили МЦД-3</div>
                        <div className={`mt40 borderMain ${s.columnContainer}`}>
                           <div className={` ${s.flexContainerRow}`}>
                              <div className={s.indicatorsBlocksContainer}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2023 г.</div>
                                    <div className={`ml20 ${s.description}`}>МЦД-3</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>6</span> станций</div>
                                 <ul className={`mt16 ${s.descriptionItemContainer}`}>
                                    <li className={s.description}>«Малино»</li>
                                    <li className={s.description}>«Фирсановская»</li>
                                    <li className={s.description}>«Сходня»</li>
                                    <li className={s.description}>«Подрезково»</li>
                                    <li className={s.description}>«Химки»</li>
                                    <li className={s.description}>«Левобережная»</li>
                                 </ul>
                              </div>
                              <div>
                                 <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                    <img src={transport} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>D3</div>
                              </div>
                           </div>
                        </div>

                        <div className={`mt40 pageSubtitle`}>В 2022 г. открыли Ж/Д переход вблизи ЖК «Солнечная система» </div>
                        <div className={`mt40 borderMain ${s.columnContainer}`}>

                           <div className={`mt24 ${s.flexContainerRow}`}>
                              <div>
                                 <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                    <img src={residentialСomplex1} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>Ж/Д переход</div>
                              </div>
                              <div>
                                 <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                    <img src={residentialСomplex2} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>Ж/Д переход</div>
                              </div>
                           </div>
                        </div>

                        <div className={`mt40 pageSubtitle`}>В 2021 г. открыли Репинскую развязку </div>
                        <div className={`mt40 borderMain ${s.columnContainer}`}>
                           <div className={s.textRow}>
                              <div className={s.date}>2021 г.</div>
                           </div>
                           <div className={`mt16 ${s.description}`}>Объединение Старых и Новых Химок - сокращение времени в дороге для сотен тысяч химчан  </div>
                           <div className={`mt24 ${s.flexContainerRow}`}>
                              <div>
                                 <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                    <img src={repinskayaJunction1} alt="" />
                                 </div>
                              </div>
                              <div>
                                 <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                    <img src={repinskayaJunction2} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>Репинская развязка</div>
                              </div>
                           </div>
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'ЖКХ'}>
                        <div className={`mt40 pageSubtitle`}>Показатели работ за 10 лет</div>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2013-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Капитально отремонтировали </div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>1000</span> домов</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt32 ${s.textRow}`}>
                                    <div className={s.date}>2019-2023 г.</div>
                                    <div className={`ml20 ${s.description}`}>Капитально отремонтировали </div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>3200</span> подъездов</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt32 ${s.textRow}`}>
                                    <div className={s.date}>2021-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Установили</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>5000</span> камер</div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={entranceHouseGorshina} alt="" />
                              </div>
                              <div className={s.imgDescription}>Подъезд дома №8 на улице Горшина</div>
                           </div>
                        </div>

                        <div className={`mt40 pageSubtitle`}>Модернизация теплоснабжения </div>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2023 г.</div>
                                    <div className={`ml20 ${s.description}`}>Отремонтировано </div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>100</span> км. сетей </div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt32 ${s.textRow}`}>
                                    <div className={s.date}>2023 г.</div>
                                    <div className={`ml20 ${s.description}`}>Подключено к участкам  </div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>300</span> домов</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt32 ${s.textRow}`}>
                                    <div className={s.date}>2023 г.</div>
                                    <div className={`ml20 ${s.description}`}>Заменили трубопровода</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>4,2</span> км.</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt32 ${s.textRow}`}>
                                    <div className={s.date}>2023 г.</div>
                                    <div className={`ml20 ${s.description}`}>Модернизировали</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>13</span> котельных</div>
                                 <div className={`mt16 ${s.textBody}`}><span>18</span> тепловых пунктов</div>
                              </div>
                           </div>
                           <div>
                              <div className={`${s.imgContainer} ${s.imgContainer_small}`}>
                                 <img src={modernizationHeatSupply1} alt="" />
                              </div>
                              <div className={`mt20 ${s.imgContainerDuble}`}>
                                 <div>
                                    <div className={s.imgContainer}>
                                       <img src={modernizationHeatSupply2} alt="" />
                                    </div>
                                    <div className={s.imgDescription}></div>
                                 </div>
                                 <div>
                                    <div className={s.imgContainer}>
                                       <img src={modernizationHeatSupply3} alt="" />
                                    </div>
                                    <div className={s.imgDescription}></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Здравоохранение'}>
                        <div className={`mt40 borderMain ${s.columnContainer}`}>
                           <div className={` ${s.flexContainerRow}`}>
                              <div className={s.indicatorsBlocksContainer}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Построено</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>8</span> поликлиник</div>
                                 <ul className={`mt16 ${s.descriptionItemContainer}`}>
                                    <li className={s.description}>Детская поликлиника №4</li>
                                    <li className={s.description}>Взрослая поликлиника №4</li>
                                    <li className={s.description}>Детское стоматологическое отделение</li>
                                    <li className={s.description}>Амбулатория для обслуживания детского населения</li>
                                    <li className={s.description}>Поликлиника №7, ул. Совхозная, д. 21</li>
                                    <li className={s.description}>Взрослая поликлиника №5</li>
                                    <li className={s.description}>Детская поликлиника №5</li>
                                    <li className={s.description}>Поликлиника «Мама и малыш»</li>
                                 </ul>
                              </div>
                              <div>
                                 <div className={s.imgContainer}>
                                    <img src={polyclinicSovkhoznaya} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>Поликлиника №7, ул. Совхозная, д. 21</div>
                              </div>
                           </div>
                        </div>

                        <div className={`mt40 borderMain ${s.columnContainer}`}>
                           <div className={` ${s.flexContainerRow}`}>
                              <div className={s.indicatorsBlocksContainer}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Отремонтировали</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>15</span> медучреждений</div>
                                 <ul className={`mt16 ${s.descriptionItemContainer}`}>
                                    <li className={s.description}>Поликлиника №9 для взрослых и детей</li>
                                    <li className={s.description}>Поликлиника №3 для детей</li>
                                    <li className={s.description}>Химкинская подстанция СМП</li>
                                    <li className={s.description}>Травматологический пункт</li>
                                    <li className={s.description}>Химкинский противотуберкулезный диспансер </li>
                                    <li className={s.description}>Поликлиника №6 для взрослых и детей</li>
                                    <li className={s.description}>Поликлиника №1 для взрослых</li>
                                    <li className={s.description}>Поликлиника №3 для взрослых</li>
                                    <li className={s.description}>Поликлиника №1 для детей</li>
                                    <li className={s.description}>Стационар ГБУЗ МО Психиатрическая больница №22</li>
                                    <li className={s.description}>Сходненский пост скорой помощи </li>
                                    <li className={s.description}>Химкинское отделение ГБУЗ МО «Бюро СМЭ»</li>
                                    <li className={s.description}>Поликлиника №2</li>
                                    <li className={s.description}>Санаторное отделение ГБУЗ МО «Московский областной НИКИ детства»</li>
                                    <li className={s.description}>Детская поликлиника №2</li>
                                 </ul>
                              </div>
                              <div>
                                 <div className={s.imgContainer}>
                                    <img src={polyclinicLavochkina} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>Поликлиника №2, ул. Лавочкина, дом 22</div>
                              </div>
                           </div>
                        </div>

                        <div className={`mt40 borderMain ${s.columnContainer}`}>
                           <div className={` ${s.flexContainerRow}`}>
                              <div className={s.indicatorsBlocksContainer}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Открыли</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>13</span> новых подразделений</div>
                                 <ul className={`mt16 ${s.descriptionItemContainer}`}>
                                    <li className={s.description}>Детское стоматологическое отделение </li>
                                    <li className={s.description}>Детская реанимация педиатрический корпус</li>
                                    <li className={s.description}>Детский травматологический пункт</li>
                                    <li className={s.description}>Отделение для больных с острым нарушением мозгового кровообращения </li>
                                    <li className={s.description}>Центр общественного здоровья </li>
                                    <li className={s.description}>Отделение реабилитации для взрослых в терапевтическом корпусе №2</li>
                                    <li className={s.description}>Центр амбулаторной онкологической помощи в поликлиники №2</li>
                                    <li className={s.description}>Координационный центр паллиативной медицинской помощи Московской области на базе поликлиники №7</li>
                                    <li className={s.description}>Отделение амбулаторной медицинской реабилитации в детской поликлиники №5</li>
                                    <li className={s.description}>Центр рассеянного склероза в терапевтическом корпусе №1</li>
                                    <li className={s.description}>Отделение паллиативной помощи на базе терапевтического корпуса №2</li>
                                    <li className={s.description}>Дневной стационар в ГАУЗ МО «Химкинский кожно-венерологический диспансер»</li>
                                    <li className={s.description}>Отделение реабилитации дневного пребывания в поликлинике №6</li>
                                 </ul>
                              </div>
                              <div>
                                 <div className={s.imgContainer}>
                                    <img src={plug} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>Детская реанимация педиатрический корпус</div>
                                 <div className={`mt20 ${s.imgContainer}`}>
                                    <img src={plug} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>Центр рассеянного склероза в терапевтическом корпусе №1</div>
                              </div>
                           </div>
                        </div>

                        <div className={`mt40 borderMain ${s.columnContainer}`}>
                           <div className={` ${s.flexContainerRow}`}>
                              <div className={s.indicatorsBlocksContainer}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2018-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Обновили мед. оборудование</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>569</span> единиц</div>
                                 <ul className={`mt16 ${s.descriptionItemContainer}`}>
                                    <li className={s.description}>Цифровой флюорограф</li>
                                    <li className={s.description}>Система компьютерной томографии</li>
                                    <li className={s.description}>Маммограф</li>
                                    <li className={s.description}>Электроэнцефалограф</li>
                                    <li className={s.description}>Ультразвуковые сканеры</li>
                                    <li className={s.description}>Эндоскопическое оборудование</li>
                                    <li className={s.description}>Хирургический радиоволновой аппарат</li>
                                 </ul>
                              </div>
                              <div>
                                 <div className={s.imgContainer}>
                                    <img src={plug} alt="" />
                                 </div>
                                 <div className={s.imgDescription}>Текст</div>
                              </div>
                           </div>
                        </div>

                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2013-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Купили </div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>25</span> машин</div>
                                 <div className={`mt16 ${s.description}`}>Скорой помощи </div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt32 ${s.textRow}`}>
                                    <div className={s.date}>2019-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Граждане получили более </div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>3 000 000 000</span> руб.</div>
                                 <div className={`mt16 ${s.description}`}>На медикаменты для льготных категорий граждан </div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={medicineCar} alt="" />
                              </div>
                              <div className={s.imgDescription}>25 машин поступило в распоряжение медицинским службам</div>
                           </div>
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Образование'}>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2013-2023 гг.</div>
                                    <div className={`ml20 ${s.description}`}>Больше </div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>60</span> объектов</div>
                                 <div className={`mt16 ${s.description}`}>образования построили и реконструировали</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt40 ${s.textRow}`}>
                                    <div className={s.date}>9 730 мест</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>15</span> новых школ</div>
                                 <div className={`mt16 ${s.description}`}>построили и реконструировали</div>
                              </div>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>4 154 места</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>37</span> детских садов</div>
                                 <div className={`mt16 ${s.description}`}>построили и реконструировали </div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt40 ${s.textRow}`}>
                                    <div className={s.date}>660 мест</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>9</span> мини-садов</div>
                                 <div className={`mt16 ${s.description}`}>открыли по программе «Палисадики»</div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={school} alt="" />
                              </div>
                              <div className={s.imgDescription}></div>
                              <div className={s.imgContainer}>
                                 <img src={plug} alt="" />
                              </div>
                              <div className={s.imgDescription}>Детский сад в д. Рузино</div>
                           </div>
                        </div>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2013-2023 гг.</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>13</span> школ</div>
                                 <div className={`mt16 ${s.description}`}>по качеству образования </div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt16 ${s.textBody}`}><span>6</span> школ</div>
                                 <div className={`mt16 ${s.description}`}>по количеству выпускников, поступивших в вузы</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt16 ${s.textBody}`}><span>3</span> школы</div>
                                 <div className={`mt16 ${s.description}`}>по конкурентоспособности выпускников</div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={plug} alt="" />
                              </div>
                              <div className={s.imgDescription}>Название</div>
                           </div>
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Социальная поддержка'}>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>с 2016 г.</div>
                                    <div className={`ml20 ${s.description}`}>Восстановили права более </div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>6</span> тыс.</div>
                                 <div className={`mt16 ${s.description}`}>дольщиков</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt16 ${s.textBody}`}><span>5 952</span> дольщика</div>
                                 <div className={`mt16 ${s.description}`}>получили ключи</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt16 ${s.textBody}`}><span>1 356</span> дольщиков</div>
                                 <div className={`mt16 ${s.description}`}>получили денежные компенсации </div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt16 ${s.textBody}`}><span>160</span> детей-сирот</div>
                                 <div className={`mt16 ${s.description}`}>обеспечили жильем</div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={plug} alt="" />
                              </div>
                              <div className={s.imgDescription}>Название</div>
                              <div className={`mt20 ${s.imgContainer}`}>
                                 <img src={plug} alt="" />
                              </div>
                              <div className={s.imgDescription}>Название</div>
                           </div>
                        </div>
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
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2013-2023 гг.</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>10</span> новых спорткомплексов</div>
                                 <div className={`mt16 ${s.description}`}>открыли за 10 лет</div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={plug} alt="" />
                              </div>
                              <div className={s.imgDescription}>Название</div>
                           </div>
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Культура'}>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={`mt16 ${s.textBody}`}><span>2016</span> г.</div>
                                 <div className={`mt16 ${s.description}`}>Построили театру «Наш дом» новую большую сцену</div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt16 ${s.textBody}`}><span>2018</span> г.</div>
                                 <div className={`mt16 ${s.description}`}>Построили музейно-выставочный комплекс «Артишок» в парке Толстого </div>
                              </div>
                              <div className={`mt16 ${s.indicatorsBlock}`}>
                                 <div className={`mt16 ${s.textBody}`}><span>2021</span> г.</div>
                                 <div className={`mt16 ${s.description}`}>Модернизировали центральную городскую библиотеку в рамках президентского проекта «Культура»</div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={plug} alt="" />
                              </div>
                              <div className={s.imgDescription}>Название</div>
                              <div className={`mt20 ${s.imgContainer}`}>
                                 <img src={plug} alt="" />
                              </div>
                              <div className={s.imgDescription}>Название</div>
                           </div>
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Экономика'}>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>1,2</span> трлн</div>
                                 <div className={`mt16 ${s.description}`}>Прибыль крупных и средних предприятий </div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={imageEconomy1} alt="" />
                              </div>
                              <div className={s.imgDescription}></div>
                           </div>
                        </div>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>1</span> трлн</div>
                                 <div className={`mt16 ${s.description}`}>Сальдированный финансовый результат </div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={imageEconomy2} alt="" />
                              </div>
                              <div className={s.imgDescription}></div>
                           </div>
                        </div>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>3,1</span> трлн</div>
                                 <div className={`mt16 ${s.description}`}>Объем отгруженных товаров, оказанных услуг, выполненных работ по крупным и средним предприятиям  </div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={imageEconomy3} alt="" />
                              </div>
                              <div className={s.imgDescription}></div>
                           </div>
                        </div>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>1,4</span> трлн</div>
                                 <div className={`mt16 ${s.description}`}>Оборот розничной торговли по крупным и средним предприятиям </div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={imageEconomy4} alt="" />
                              </div>
                              <div className={s.imgDescription}></div>
                           </div>
                        </div>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}><span>515</span> млрд</div>
                                 <div className={`mt16 ${s.description}`}>Оборот розничной торговли по крупным и средним предприятиям</div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={imageEconomy5} alt="" />
                              </div>
                              <div className={s.imgDescription}></div>
                           </div>
                        </div>
                        <div className={`mt40 borderMain ${s.columnContainerRow}`}>
                           <div className={s.indicatorsBlocksContainer}>
                              <div className={s.indicatorsBlock}>
                                 <div className={s.textRow}>
                                    <div className={s.date}>2014-2023 гг.</div>
                                 </div>
                                 <div className={`mt16 ${s.textBody}`}>рост на <span>52%</span></div>
                                 <div className={`mt16 ${s.description}`}>Среднемесячной заработной платы по крупным и средним предприятиям</div>
                              </div>
                           </div>
                           <div>
                              <div className={s.imgContainer}>
                                 <img src={imageEconomy6} alt="" />
                              </div>
                              <div className={s.imgDescription}></div>
                           </div>
                        </div>
                     </SpoilerItem>
                  </div>

               </SpoilerContainer>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PerformanceIndicators;
