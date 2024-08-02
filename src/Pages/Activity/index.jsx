import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Activity.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';

const Activity = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className="mt80 pageTitle">Деятельность</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <div className={s.column}>
                  <NavLink to={ROUTER.activity.auctionsAndTrades} className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Аукционы и торги</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.safety} className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Безопасность</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.improvement} className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Благоустройство</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.publicPrivatePartnership} className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Государственно-частное партнерство</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink to={ROUTER.activity.communalServices} className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>ЖКХ</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Здравоохранение</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Земельные участки многодетным семьям</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Земельные отношения</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Имущественные отношения</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Инвестиции</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Инициативное бюджетирование</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Кадровое управление</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>
                           <p>Комиссия по делам несовершеннолетних </p>
                           и защите их прав
                        </div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Малое и среднее предпринимательство</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
               </div>
               <div className={s.column}>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Муниципальный контроль</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Социальные программы</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Наружная реклама</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Оценка регулирующего воздействия</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Погребение и похоронное дело</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Поддержка СО НКО</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>
                           <p>Полномочия в области обращения с животными</p>
                           без владельцев
                        </div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Противодействие коррупции</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>
                           <p>Публичные слушания и общественые</p>
                           обсуждения
                        </div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Строительство</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Транспорт</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Экология и экологическая безопасность</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>
                           <p>Комиссия по делам несовершеннолетних </p>
                           и защите их прав
                        </div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
                  <NavLink /* to={ROUTER.activity.unionSummerResidents} */ className={`mt24 ${s.link}`}>
                     <div className={s.textContainer}>
                        <div className={s.radial}></div>
                        <div className={s.text}>Малое и среднее предпринимательство</div>
                     </div> <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div>
                  </NavLink>
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default Activity;