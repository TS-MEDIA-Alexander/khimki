import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import s from './CommissionJuvenileAffairs.module.css';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const CommissionJuvenileAffairs = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Комиссия по делам несовершеннолетних и защите их прав</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Комиссия по делам</p>
               <p>несовершеннолетних и защите</p>
               их прав
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Состав Комиссии по делам несовершеннолетних и защите их прав городско-го округа Химки <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Учреждения системы профилактики безнадзорности и правонарушений несовершеннолетних<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Нормативные документы<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Контакты (перенести на основную страницу “Комиссия по делам несовершеннолетних и защите их прав”)<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>


            <div className={`mt80 text`}>
               <p>
                  Комиссия по делам несовершеннолетних и защите их прав городского округа Химки является постоянно действующим межведомственным коллегиальным органом системы профилактики безнадзорности и правонарушений несовершеннолетних в городском округе Химки
               </p>
               <div className="mt38 pageSubtitle">Основными задачами Комиссии являются:</div>


               <ul className='mt38'>
                  <li>
                     предупреждение безнадзорности, беспризорности, правонарушений и антиобщественных действий, выявление причин и условий, этому способствующих, принятие мер по их устранению, социально-педагогическая реабилитация несовершеннолетних, находящихся в социально опасном положении;
                  </li>
                  <li>
                     содействие несовершеннолетним в реализации, защите и восстановлении прав и законных интересов в пределах своей компетенции, осуществление их защиты от всех форм дискриминации, физического или психического насилия, оскорбления, грубого обращения, сексуальной и иной эксплуатации;
                  </li>
                  <li>
                     выявление фактов жестокого обращения с несовершеннолетними, предупреждение преступлений против семьи и несовершеннолетних;
                  </li>
                  <li>
                     координация деятельности органов и учреждений системы профилактики безнадзорности и правонарушений несовершеннолетних и обеспечение взаимодействия органов и учреждений, занимающихся проблемами семьи и детства в вопросах про-филактики безнадзорности, беспризорности, правонарушений и антиобщественных действий несовершеннолетних, защиты их прав.
                  </li>
               </ul>
            </div>

            <div className="mt80 pageSubtitle">Деятельность Комиссии</div>

            <div className={`mt40 borderMain borderDocumentContainer`}>
               <DocumentContainerDownload text='Отчет о состоянии и мерах по предупреждению беспризорности, безнадзорности, наркомании, токсикомании, алкоголизма, правонарушений несовершеннолетних и защите их прав на территории городского округа Химки в 2022 году' />
               <DocumentContainerDownload text='Отчет о состоянии и мерах по предупреждению беспризорности, безнадзорности, наркомании, токсикомании, алкоголизма, правонарушений несовершеннолетних и защите их прав на территории городского округа Химки в 2021 году' />
               <DocumentContainerDownload text='Комплексный план мероприятий по профилактике безнадзорности, беспризорности, наркомании, токсикомании,  алкоголизма, суицидов, правонарушений несовершеннолетних, защите их прав на территории городского округа Химки Московской области на 2023 год ' />
               <DocumentContainerDownload text='План работы Комиссии по делам несовершеннолетних и защите их прав городского округа Химки на II полугодие 2020 года ' />
               <DocumentContainerDownload text='Комплексный план мероприятий по профилактике безнадзорности, беспризорности, наркомании, токсикомании, алкоголизма, суицидов, правонарушений несовершеннолетних, защите их прав на территории городского округа Химки Московской области на 2020 год' />
               <DocumentContainerDownload text='План работы Комиссии по делам несовершеннолетних и защите их прав городского округа Химки на I полугодие 2020 года ' />
               <DocumentContainerDownload text='Сведения о деятельности комиссии по делам несовершеннолетних и защите их прав по профилактике безнадзорности и правонарушений несовершеннолетних за 2019 год ' />
               <DocumentContainerDownload text='Комплексный план работы по профилактике безнадзорности, беспризорности, наркомании, алкоголизма, суицидов, правонарушений несовершеннолетних, защите их прав на 2018 год   ' />
               <DocumentContainerDownload text='План работы Комиссии по делам несовершеннолетних и защите их прав городского округа Химки на II полугодие 2018 года' />
               <DocumentContainerDownload text='Отчет о работе Комиссии по делам несовершеннолетних и защите их прав городского округа Химки за I полугодие 2018 года ' />

            </div>
         </ContantContainerMain>
      </div>
   )
}
export default CommissionJuvenileAffairs;