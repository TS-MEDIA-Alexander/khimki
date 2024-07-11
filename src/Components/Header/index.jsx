import React from 'react';
import s from './Header.module.css';
import ContantContainerMain from '../../utils/ContantContainerMain';
import logo from '../../assets/img/logos/full-logo.svg';
import icon from '../../assets/icons/version_visually_impaired.svg';

const Header = (props) => {
   return (
      <div>
         <div className={s.bgBlock}>
            <ContantContainerMain>
               <div className={s.logoRow}>
                  <div className={s.logoBlock}>
                     <img src={logo} alt="" />
                     <div className={s.textMain}>
                        <div className={s.titleInfo}>Официальный интернет-портал</div>
                        <div className={s.titleAdministration}>АДМИНИСТРАЦИИ ГОРОДСКОГО ОКРУГА ХИМКИ</div>
                        <div className={s.titleInfo}>Московской области</div>
                     </div>
                  </div>
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
                        <ul>
                           <li>Новости</li>
                           <li>Галерея</li>
                           <li>Видео</li>
                        </ul>
                        </div>
                     <div className={`${s.item} ${s.itemArrow}`}>
                        История
                        <ul>
                           <li>История</li>
                           <li>История города Химки </li>
                           <li>Памятники истории и культуры</li>
                           <li>Город-побратим</li>
                           <li>Герб города</li>
                        </ul>
                        </div>
                     <div className={`${s.item} ${s.itemArrow}`} >
                        Округ
                        <ul>
                           <li>Городской округ Химки</li>
                           <li>Структура администрации</li>
                        </ul>
                        </div>
                     <div className={s.item}>Деятельность</div>
                     <div className={s.item}>Документы</div>
                     <div className={s.item}>Прокуратура </div>
                     <div className={`${s.item} ${s.itemArrow}`}>
                        Обращения граждан
                        <ul>
                           <li>Городской округ Химки</li>
                           <li>Структура администрации</li>
                        </ul>
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