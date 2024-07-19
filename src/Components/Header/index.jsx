import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import {ROUTER} from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import logo from '../../assets/img/logos/full-logo.svg';
import icon from '../../assets/icons/version_visually_impaired.svg';

const Header = (props) => {
   return (
      <div>
         <div className={s.bgBlock}>
            <ContantContainerMain>
               <div className={s.logoRow}>
                  <NavLink to={ROUTER.main} className={s.logoBlock}>
                     <img src={logo} alt="" />
                     <div className={s.textMain}>
                        <div className={s.titleInfo}>Официальный интернет-портал</div>
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
                  <div className={s.itemsContainer}>
                     <div className={`${s.item} ${s.itemArrow}`}>
                        Новости
                        <div className={s.dropDownMenu}>
                           <NavLink className={s.linkMenu} to={ROUTER.news}>
                              Новости
                           </NavLink>
                           <NavLink className={s.linkMenu} to={ROUTER.galery}>
                              Галерея
                           </NavLink>
                           <NavLink className={s.linkMenu} to={ROUTER.video}>
                              Видео
                           </NavLink>
                        </div>
                     </div>
                     <div className={`${s.item} ${s.itemArrow}`}>
                        История
                        <div className={s.dropDownMenu}>
                           <NavLink to={ROUTER.history.src} className={s.linkMenu} >
                              История
                           </NavLink>
                           <NavLink to={ROUTER.history.khimki} className={s.linkMenu} >
                              История города Химки
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
                     <div className={`${s.item} ${s.itemArrow}`} >
                        Округ
                        <div className={s.dropDownMenu}>
                           <NavLink to={ROUTER.khimkiDistrict} className={s.linkMenu}>
                              Городской округ Химки
                           </NavLink>
                           <div className={s.linkMenu}>
                              Структура администрации
                           </div>
                           <div className={s.linkMenu}>
                              Социальные программы
                           </div>
                           <div className={s.linkMenu}>
                              Наукоград
                           </div>
                           <div className={s.linkMenu}>
                              Общественные организации
                           </div>
                           <div className={s.linkMenu}>
                              Контрольно-счетная палата
                           </div>
                           <div className={s.linkMenu}>
                              Государственные организации
                           </div>
                           <div className={s.linkMenu}>
                              Территориальная избирательная комиссия города химки
                           </div>
                        </div>
                     </div>
                     <div className={s.item}>Деятельность</div>
                     <div className={s.item}>Документы</div>
                     <div className={s.item}>Прокуратура </div>
                     <div className={`${s.item} ${s.itemArrow}`}>
                        Обращения граждан
                        <div className={s.dropDownMenu}>
                           <div className={s.linkMenu}>
                              Городской округ Химки
                           </div>
                           <div className={s.linkMenu}>
                              Структура администрации
                           </div>
                        </div>
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