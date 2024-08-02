import React, { useState } from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import logo from '../../assets/img/logos/full-logo.svg';
import icon from '../../assets/icons/version_visually_impaired.svg';

const Header = (props) => {

   const [activeID, setActiveID] = useState()

   return (
      <div onMouseOver={(e) => setActiveID(false)} >
         <div className={`bgMain ${s.bgBlock}`}>
            <ContantContainerMain>
               <div className={s.logoRow}>
                  <NavLink to={ROUTER.main} className={s.logoBlock}>
                     <img src={logo} alt="" />
                     <div className={s.textMain}>
                        <div className={s.titleInfo}>Официальный интернет-сайат</div>
                        <div className={s.titleAdministration}>АДМИНИСТРАЦИИ ГОРОДСКОГО ОКРУГА ХИМКИ</div>
                        <div className={s.titleInfo}>Московской области</div>
                     </div>
                  </NavLink>
                  <div className={s.settingsContainer}>
                     <div className={s.versionVI}><img src={icon} alt="" />Версия для слабовидящих</div>
                     <button className={s.hotLine}>Горячая линия</button>
                  </div>
               </div>
            </ContantContainerMain>
         </div>
         <div className={s.mainMenuContainer}>
            <ContantContainerMain>
               <div className={s.mainMenu}>
                  <div onMouseOver={e => e.stopPropagation()} onClick={(e) => e.target.id ? setActiveID(e.target.id) : setActiveID(false)} className={s.itemsContainer}>
                     <div id='news' className={`${s.item} ${s.itemArrow}`}>
                        Новости
                        <div className={`${s.dropDownMenu} ${activeID === 'news' && s.dropDownMenuActive}`}>
                           <NavLink className={s.linkMenu} to={ROUTER.news}>
                              Новости
                           </NavLink>
                           {/* <NavLink className={s.linkMenu} to={ROUTER.galery}>
                              Галерея
                           </NavLink> */}
                           {/* <NavLink className={s.linkMenu} to={ROUTER.video}>
                              Видео
                           </NavLink> */}
                        </div>
                     </div>
                     <div id='history' className={`${s.item} ${s.itemArrow}`}>
                        История
                        <div className={`${s.dropDownMenu} ${activeID === 'history' && s.dropDownMenuActive}`}>
                           <NavLink to={ROUTER.history.main} className={s.linkMenu} >
                              История
                           </NavLink>
                           <NavLink to={ROUTER.history.khimki} className={s.linkMenu} >
                              История города Химки
                           </NavLink>
                           <NavLink to={ROUTER.history.greatPatrioticWar} className={s.linkMenu} >
                              Великая Отечественная война 1941-1945 гг.
                           </NavLink>
                           <NavLink to={ROUTER.history.pamyatnikiIstoriiKultury} className={s.linkMenu} >
                              Памятники истории и культуры
                           </NavLink>
                           <NavLink to={ROUTER.history.gorodPobratim} className={s.linkMenu} >
                              Город побратим
                           </NavLink>
                           <NavLink to={ROUTER.history.cityCoatOfArms} className={s.linkMenu} >
                              Герб города
                           </NavLink>
                        </div>
                     </div>
                     <div id='khimkiDistrict' className={`${s.item} ${s.itemArrow}`} >
                        Округ
                        <div className={`${s.dropDownMenu} ${activeID === 'khimkiDistrict' && s.dropDownMenuActive}`}>
                           <NavLink to={ROUTER.khimkiDistrict.main} className={s.linkMenu}>
                              Городской округ Химки
                           </NavLink>
                           <NavLink to={ROUTER.khimkiDistrict.performanceIndicators} className={s.linkMenu}>
                              Показатели работы
                           </NavLink>
                           <NavLink to={ROUTER.khimkiDistrict.symbolism} className={s.linkMenu}>
                              Устав и символика
                           </NavLink>
                           <NavLink to={ROUTER.khimkiDistrict.administrationStructure} className={s.linkMenu}>
                              Структура администрации
                           </NavLink>
                           <NavLink to={ROUTER.khimkiDistrict.publicChamber} className={s.linkMenu}>
                              Общественная палата
                           </NavLink>
                           <NavLink to={ROUTER.khimkiDistrict.auditChamber} className={s.linkMenu}>
                              Контрольно-счетная палата
                           </NavLink>
                           <NavLink to={ROUTER.khimkiDistrict.tic} className={s.linkMenu}>
                              ТИК города Химки
                           </NavLink>
                           <NavLink to={ROUTER.khimkiDistrict.publicOrganizations} className={s.linkMenu}>
                              Общественные организации
                           </NavLink>
                           <NavLink to={ROUTER.khimkiDistrict.governmentAgency} className={s.linkMenu}>
                              Государственные организации
                           </NavLink>
                           <div className={s.linkMenu}>
                              Наукоград
                           </div>
                           <NavLink to={ROUTER.khimkiDistrict.informationSystems} className={s.linkMenu}>
                              Информационные системы
                           </NavLink>
                        </div>
                     </div>
                     <div id='activity' className={`${s.item} ${s.itemArrow}`}>
                        Деятельность
                        <div className={`${s.dropDownMenu} ${activeID === 'activity' && s.dropDownMenuActive}`}>
                           <NavLink to={ROUTER.activity.main} className={s.linkMenu}>
                              Деятельность
                           </NavLink>
                           <NavLink to={ROUTER.activity.auctionsAndTrades} className={s.linkMenu}>
                              Аукционы и торги
                           </NavLink>
                           <NavLink to={ROUTER.activity.safety} className={s.linkMenu}>
                              Безопасность
                           </NavLink>
                           <NavLink to={ROUTER.activity.improvement} className={s.linkMenu}>
                              Благоустройство
                           </NavLink>
                           <NavLink to={ROUTER.activity.publicPrivatePartnership} className={s.linkMenu}>
                              Государственно-частное партнерство
                           </NavLink>
                           <NavLink to={ROUTER.activity.communalServices} className={s.linkMenu}>
                              ЖКХ
                           </NavLink>
                           <NavLink to={ROUTER.activity.healthcare} className={s.linkMenu}>
                              Здравоохранение
                           </NavLink>
                           <NavLink to={ROUTER.activity.land} className={s.linkMenu}>
                              Земельные участки многодетным семьям
                           </NavLink>
                           <div className={s.linkMenu}>
                              Земельные отношения
                           </div>
                           <div className={s.linkMenu}>
                              Имущественные отношения
                           </div>
                           <div className={s.linkMenu}>
                              Инвестиции
                           </div>
                           <div className={s.linkMenu}>
                              Инициативное бюджетирование
                           </div>
                           <div className={s.linkMenu}>
                              Кадровое управление
                           </div>
                           <div className={s.linkMenu}>
                              <p>Комиссия по делам несовершеннолетних</p>
                              и защите их прав
                           </div>
                           <div className={s.linkMenu}>
                              Малое и среднее предпринимательствои
                           </div>
                           <div className={s.linkMenu}>
                              Муниципальный контроль
                           </div>
                           <NavLink /* to={ROUTER.khimkiDistrict.informationSystems} */ className={s.linkMenu}>
                              Муниципальные программы
                           </NavLink>
                           <NavLink /* to={ROUTER.khimkiDistrict.informationSystems} */ className={s.linkMenu}>
                              Социальные программы
                           </NavLink>
                           <div className={s.linkMenu}>
                              Наружная реклама
                           </div>
                           <div className={s.linkMenu}>
                              Оценка регулирующего воздействия
                           </div>
                           <div className={s.linkMenu}>
                              Погребение и похоронное дело
                           </div>
                           <div className={s.linkMenu}>
                              Поддержка СО НКО
                           </div>
                           <NavLink /* to={ROUTER.khimkiDistrict.informationSystems} */ className={s.linkMenu}>
                              <p>Полномочия в области обращения с животными</p>
                              без владельцев
                           </NavLink>
                           <div className={s.linkMenu}>
                              <p>Правовое просвещение и правовое</p>
                              информирование
                           </div>
                           <div className={s.linkMenu}>
                              Противодействие коррупции
                           </div>
                           <div className={s.linkMenu}>
                              <p>Публичные слушания и общественные</p>
                              обсуждения
                           </div>
                           <div className={s.linkMenu}>
                              Строительство
                           </div>
                           <div className={s.linkMenu}>
                              Транспорт
                           </div>
                           <div className={s.linkMenu}>
                              Установка шлагбаумов во дворах
                           </div>
                           <div className={s.linkMenu}>
                              Экология и экологическая безопасность
                           </div>
                        </div>
                     </div>
                     <div className={s.item}>Документы</div>
                     <div className={s.item}>Прокуратура </div>
                     <div className={`${s.item}`}>
                        Обращения граждан
                        {/* <div className={s.dropDownMenu}>
                           <div className={s.linkMenu}>
                              Городской округ Химки
                           </div>
                           <div className={s.linkMenu}>
                              Структура администрации
                           </div>
                        </div> */}
                     </div>
                     <div className={s.item}>Контакты</div>
                  </div>

                  <div className={s.searchBlock}>Поиск

                     {/* <input type="text" placeholder='Поиск' className={s.search} /> */}
                  </div>
               </div>
            </ContantContainerMain>
         </div>
      </div >


   )
}
export default Header;