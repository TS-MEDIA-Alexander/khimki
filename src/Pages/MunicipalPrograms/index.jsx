import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MunicipalPrograms.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';

import VirtualReceptionMin from '../../BannersComopnents/VirtualReceptionMin';
import PerformanceIndicators from '../../BannersComopnents/PerformanceIndicators';
 

const MunicipalPrograms = (props) => {
   return (
      <div>
         <ContantContainerMain>
         <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Муниципальные программы</span>
            </div>
            <div className="mt80 pageTitle">Муниципальные программы</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <div className={s.column}>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Здравоохранение</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Культура</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Образование</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Социальная защита населения городского округа Химки</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Спорт городского округа Химки</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Развитие сельского хозяйства</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Экология и окружающая среда</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Безопасность и обеспечение безопасности жизнедеятельности населения</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Жилище</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Развитие инженерной инфраструктуры, энергоэффективности и отрасли обращения с отходами</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>                 
                  
               </div>
               <div className={s.column}>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Предпринимательство</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Управление имуществом и финансами</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Развитие институтов гражданского общества, повышение эффективности местного самоуправления и реализации молодежной политики</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Развитие и функционирование дорожно-транспортного комплекса</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Цифровое муниципальное образование</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Архитектура и градостроительство</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Формирование современной городской среды</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Строительство объектов социальной инфраструктуры</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Переселение граждан из аварийного жилищного фонда</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.municipalСontrol} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Комплексная программа</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
               </div>
            </div>

            <div className={`mt80 rowBlock`}>
                  <VirtualReceptionMin />
                  <PerformanceIndicators />
               </div>
         </ContantContainerMain>
      </div>
   )
}
export default MunicipalPrograms;