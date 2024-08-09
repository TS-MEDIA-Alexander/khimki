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
                     {/* <div className={s.versionVI}><img src={icon} alt="" />Версия для слабовидящих</div> */}
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
                           <NavLink to={ROUTER.khimkiDistrict.scienceCity} className={s.linkMenu}>
                              Наукоград
                           </NavLink>
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
                           <NavLink to={ROUTER.activity.landRelations} className={s.linkMenu}>
                              Земельные отношения
                           </NavLink>
                           <NavLink to={ROUTER.activity.propertyRelations} className={s.linkMenu}>
                              Имущественные отношения
                           </NavLink>
                           <NavLink to={ROUTER.activity.investities} className={s.linkMenu}>
                              Инвестиции
                           </NavLink>
                           <NavLink to={ROUTER.activity.participatoryBudgeting} className={s.linkMenu}>
                              Инициативное бюджетирование
                           </NavLink>
                           <NavLink to={ROUTER.activity.humanResourcesManagement} className={s.linkMenu}>
                              Кадровое управление
                           </NavLink>
                           <NavLink to={ROUTER.activity.commissionJuvenileAffairs} className={s.linkMenu}>
                              <p>Комиссия по делам несовершеннолетних</p>
                              и защите их прав
                           </NavLink>
                           <NavLink to={ROUTER.activity.smallMediumBusinesses} className={s.linkMenu}>
                              Малое и среднее предпринимательствои
                           </NavLink>
                           <NavLink to={ROUTER.activity.municipalСontrol} className={s.linkMenu}>
                              Муниципальный контроль
                           </NavLink>
                           <NavLink to={ROUTER.activity.municipalPrograms} className={s.linkMenu}>
                              Муниципальные программы
                           </NavLink>
                           <NavLink to={ROUTER.activity.socialPrograms} className={s.linkMenu}>
                              Социальные программы
                           </NavLink>
                           <NavLink to={ROUTER.activity.outdoorAdvertising} className={s.linkMenu}>
                              Наружная реклама
                           </NavLink>
                           <NavLink to={ROUTER.activity.regulatoryImpactAssessment} className={s.linkMenu}>
                              Оценка регулирующего воздействия
                           </NavLink>
                           <NavLink to={ROUTER.activity.burialFuneralServices} className={s.linkMenu}>
                              Погребение и похоронное дело
                           </NavLink>
                           <NavLink to={ROUTER.activity.supportCONPO} className={s.linkMenu}>
                              Поддержка СО НКО
                           </NavLink>
                           <NavLink to={ROUTER.activity.authorityFeldHandlingAnimalsWithoutOwners} className={s.linkMenu}>
                              <p>Полномочия в области обращения с животными</p>
                              без владельцев
                           </NavLink>
                           <div className={s.linkMenu}>
                              <p>Правовое просвещение и правовое</p>
                              информирование
                           </div>
                           <NavLink to={ROUTER.activity.antiCorruption} className={s.linkMenu}>
                              Противодействие коррупции
                           </NavLink>
                           <NavLink to={ROUTER.activity.publicHearingsPublicDiscussions} className={s.linkMenu}>
                              <p>Публичные слушания и общественные</p>
                              обсуждения
                           </NavLink>
                           <NavLink to={ROUTER.activity.construction} className={s.linkMenu}>
                              Строительство
                           </NavLink>
                           <NavLink to={ROUTER.activity.transport} className={s.linkMenu}>
                              Транспорт
                           </NavLink>
                           <div className={s.linkMenu}>
                              Установка шлагбаумов во дворах
                           </div>
                           <NavLink to={ROUTER.activity.ecologyEnvironmentalSafety} className={s.linkMenu}>
                              Экология и экологическая безопасность
                           </NavLink>
                        </div>
                     </div>
                     <div className={s.item}>Документы</div>
                     <div id='prosecutorOffice' className={`${s.item} ${s.itemArrow}`}>
                        Прокуратура
                        <div className={`${s.dropDownMenu} ${activeID === 'prosecutorOffice' && s.dropDownMenuActive}`}>
                           <NavLink to={ROUTER.prosecutorOffice.main} className={s.linkMenu}>
                              Прокуратура (разводная)
                           </NavLink>
                           <NavLink /* to={ROUTER.prosecutorOffice.main} */ className={s.linkMenu}>
                              Химкинская городская прокуратура
                           </NavLink>
                           <NavLink to={ROUTER.prosecutorOffice.militaryProsecutorOfficeSolnechnogorskGarrison} className={s.linkMenu}>
                              Военная прокуратура Солнечногорского гарнизона
                           </NavLink>
                           <NavLink to={ROUTER.prosecutorOffice.moscowInterregionalTransport} className={s.linkMenu}>
                              Московская межрегиональная транспортная прокуратура
                           </NavLink>
                           <NavLink to={ROUTER.prosecutorOffice.correctionalInstitutions} className={s.linkMenu}>
                              <p>Московская прокуратура по надзору за соблюдением</p>
                              <p>законов в исправительных учреждениях Московской</p>
                              области
                           </NavLink>
                           <NavLink to={ROUTER.prosecutorOffice.northernTransportProsecutorOffice} className={s.linkMenu}>
                              Северная транспортная прокуратура
                           </NavLink>
                           <NavLink /* to={ROUTER.prosecutorOffice.main} */ className={s.linkMenu}>
                              Правовое просвещение и правовое информирование
                           </NavLink>
                        </div>
                     </div>
                     <div id='citizensAppeals' className={`${s.item} ${s.itemArrow}`}>
                        Обращения граждан
                        <div className={`${s.dropDownMenu} ${activeID === 'citizensAppeals' && s.dropDownMenuActive}`}>
                           <NavLink to={ROUTER.citizensAppeals.main} className={s.linkMenu}>
                              Работа с обращениями граждан
                           </NavLink>
                           <NavLink to={ROUTER.citizensAppeals.legalRegulation} className={s.linkMenu}>
                              Правовое регулирование
                           </NavLink>
                           <NavLink to={ROUTER.citizensAppeals.virtualReceptionHeadCityDistrict} className={s.linkMenu}>
                              Виртуальная приемная Главы <br /> городского округа
                           </NavLink>
                           <NavLink to={ROUTER.citizensAppeals.resultsConsiderationApplications} className={s.linkMenu}>
                              Результаты рассмотрения обращений
                           </NavLink>
                           <NavLink to={ROUTER.citizensAppeals.writeAdministration} className={s.linkMenu}>
                              Написать в Администрацию
                           </NavLink>
                           <NavLink to={ROUTER.citizensAppeals.receptionProcedureTime} className={s.linkMenu}>
                              Порядок и время приема
                           </NavLink>
                           <NavLink to={ROUTER.citizensAppeals.allRussianDayReceptionCitizens} className={s.linkMenu}>
                              Общероссийский день приёма <br /> граждан в День Конституции <br /> Российской Федерации 12 декабря
                           </NavLink>
                           <NavLink to={ROUTER.citizensAppeals.main} className={s.linkMenu}>
                              Информация для ознакомления <br /> желающим отправить обращениев <br /> форме электронного документа
                           </NavLink>
                           <NavLink to={ROUTER.citizensAppeals.responsesInquiriesIndefiniteNumberPersons} className={s.linkMenu}>
                              Ответы на обращения, <br /> затрагивающие интересы <br /> неопределенного круга лиц
                           </NavLink>
                        </div>
                     </div>
                     <NavLink to={ROUTER.contacts.main} className={s.item}>Контакты</NavLink>
                  </div>

                  {/* <div className={s.searchBlock}>Поиск

                  </div> */}
               </div>
            </ContantContainerMain>
         </div>
      </div >


   )
}
export default Header;