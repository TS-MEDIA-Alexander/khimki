import React, { useState } from 'react';
import s from './HeaderMobile.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import arrow_down from '../../assets/icons/arrow_down.svg';

const HeaderMobile = ({ setMobilMenu }) => {

   const [activeID, setActiveID] = useState();

   return (
      <div onClick={(e) => e.target.href ? setMobilMenu(false) : false} className={s.headerMobileContainer}>
         <div className={s.contentContainer}>
            <div className={s.itemContainer} onClick={(e) => e.target.id ? setActiveID(e.target.id) : setActiveID(false)}>
               <div onClick={() => setMobilMenu(false)} className={s.back}>Назад</div>
               <div id='news' className={`mt24 ${s.item}`}>Новости <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div id='history' className={`mt24 ${s.item}`}>История <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div id='khimkiDistrict' className={`mt24 ${s.item}`}>Округ <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <div id='activity' className={`mt24 ${s.item}`}>Деятельность <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <a href='https://old.admhimki.ru/dokumenty/' className={`mt24 ${s.item}`}>Документы <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></a>
               <div id='citizensAppeals' className={`mt24 ${s.item}`}>Обращения граждан <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></div>
               <NavLink to={ROUTER.contacts.main} className={`mt24 ${s.item}`}>Контакты <div className={s.imgContainer}><img src={arrow_down} alt="" /></div></NavLink>
            </div>

            <div className={s.bottomBlock}>
               <NavLink to={ROUTER.citizensAppeals.writeAdministration} className={s.hotLine}>Горячая линия</NavLink>
            </div>
         </div>

         <div className={`${s.dropDownMenu} ${activeID && s.active}`}>
            <div onClick={() => setActiveID()} className={s.back}>Назад</div>

            <div className={` ${activeID === 'news' && s.linkMenuContainerActive} ${s.linkMenuContainer}`}>
               <NavLink className={`${s.linkMenu}`} to={ROUTER.news}>
                  Новости
               </NavLink>
            </div>

            <div className={` ${activeID === 'history' && s.linkMenuContainerActive} ${s.linkMenuContainer}`}>
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

            <div className={` ${activeID === 'khimkiDistrict' && s.linkMenuContainerActive} ${s.linkMenuContainer}`}>
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
               <a href="https://sdhimki.ru/" target='_blank' className={s.linkMenu}>Совет депутатов</a>
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

            <div className={` ${activeID === 'activity' && s.linkMenuContainerActive} ${s.linkMenuContainer}`}>
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
                  Комиссия по делам несовершеннолетних
                  и защите их прав
               </NavLink>
               <NavLink to={ROUTER.activity.smallMediumBusinesses} className={s.linkMenu}>
                  Малое и среднее предпринимательство
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
                  Полномочия в области обращения с животными
                  без владельцев
               </NavLink>
               <a href='https://old.admhimki.ru/okrug/deyatelnost/pravovoe-prosveshenie-i-pravovoe-informirovanie/' className={s.linkMenu}>
                  Правовое просвещение и правовое
                  информирование
               </a>
               <NavLink to={ROUTER.activity.antiCorruption} className={s.linkMenu}>
                  Противодействие коррупции
               </NavLink>
               <NavLink to={ROUTER.activity.publicHearingsPublicDiscussions} className={s.linkMenu}>
                  Публичные слушания и общественные
                  обсуждения
               </NavLink>
               <a href="https://old.admhimki.ru/okrug/deyatelnost/rekvizity-dohodov/" target='_blank' /* to={ROUTER.activity.publicHearingsPublicDiscussions} */ className={s.linkMenu}>
                  Реквизиты доходов городского округа
               </a>
               <NavLink to={ROUTER.activity.construction} className={s.linkMenu}>
                  Строительство
               </NavLink>
               <NavLink to={ROUTER.activity.transport} className={s.linkMenu}>
                  Транспорт
               </NavLink>
               <NavLink to={ROUTER.activity.ecologyEnvironmentalSafety} className={s.linkMenu}>
                  Экология и экологическая безопасность
               </NavLink>
            </div>

            {/* <div className={` ${activeID === 'prosecutorOffice' && s.linkMenuContainerActive} ${s.linkMenuContainer}`}>
               <NavLink to={ROUTER.prosecutorOffice.main} className={s.linkMenu}>
                  Прокуратура
               </NavLink>
               <NavLink className={s.linkMenu}>
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
               <NavLink className={s.linkMenu}>
                  Правовое просвещение и правовое информирование
               </NavLink>
            </div> */}

            <div className={` ${activeID === 'citizensAppeals' && s.linkMenuContainerActive} ${s.linkMenuContainer}`}>
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
               <NavLink to={ROUTER.citizensAppeals.informationForReview} className={s.linkMenu}>
                  Информация для ознакомления <br /> желающим отправить обращение в <br /> форме электронного документа
               </NavLink>
               <NavLink to={ROUTER.citizensAppeals.responsesInquiriesIndefiniteNumberPersons} className={s.linkMenu}>
                  Ответы на обращения, <br /> затрагивающие интересы <br /> неопределенного круга лиц
               </NavLink>
            </div>

         </div>

      </div>
   )
}
export default HeaderMobile;