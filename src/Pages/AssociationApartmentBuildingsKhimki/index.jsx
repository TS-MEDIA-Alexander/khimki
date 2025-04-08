import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import atakhanova from '../../assets/img/Persons/atakhanova.png';
import s from './AssociationApartmentBuildingsKhimki.module.css';

const AssociationApartmentBuildingsKhimki = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.publicOrganizations} className='breadcrumbsTo'>Общественные организации</NavLink>
               <span className='breadcrumbsTo'> / Ассоциация МКД Химок</span>
            </div>
            <h1 className="mt24 pageTitle">Ассоциация МКД Химок</h1>

            <div className={`mt80 ${s.title}`}>
               <p>Отделение ассоциации председателей советов</p>
               многоквартирных домов московской области по г.о. Химки
            </div>

            <div className={`mt80 ${s.subTitle}`}>Для чего нужен совет многоквартирного дома (МКД)? </div>

            <div className={`mt38 ${s.text}`}>Совет МКД необходим:</div>
            <ul className={`mt38 ${s.targetContainer}`}>
               <li>Для определения задач по управлению многоквартирным домом</li>
               <li>Для представления интересов собственников МКД </li>
               <li>Для эффективного и оперативного решения проблем с управляющей компанией</li>
            </ul>

            <div className={`mt38 ${s.text}`}>Как избрать совет МКД?</div>
            <ul className={`mt38 ${s.targetContainer}`}>
               <li>Создание инициативной группы;</li>
               <li>Подготовка информации и документов, необходимых для проведения общего собрания собственников;</li>
               <li>Оповещение собственников о проведении общего собрания в очной форме (путем совместного присутствия);</li>
               <li>Проведение общего собрания собственников путем совместного присутствия;</li>
               <li>Подведение итогов общего собрания;</li>
               <li>Оповещение собственников об итогах общего собрания;</li>
               <li>Оповещение управляющей компании о проведенном общем собрании собственников и о его итогах.</li>
            </ul>

            <div className={`mt38 ${s.subTitle}`}>Единый общественный центр по вопросам ЖКХ</div>

            <div className={`mt38 ${s.text}`}>Консультации по вопросам:</div>
            <ul className={`mt38 ${s.targetContainer}`}>
               <li>организации взаимодействия с управляющими компаниями</li>
               <li>управления МКД и обслуживания общедомового имущества </li>
               <li>поддержки деятельности советов МКД</li>
            </ul>

            <div className={`mt38 ${s.btnContainerRow}`}>
               <div className={`${s.btnText}`}>+7 (495) 230-52-54</div>
               <div className={`ml16 ${s.btnText}`}>info@op-khimki.ru</div>
            </div>

            <div className={`mt80 borderMain ${s.card}`}>
               <div className={s.portrainContainer}>
                  <img src={atakhanova} alt="" />
               </div>
               <div className={s.rightContainer}>
                  <div className={`mt8 ${s.cardSurname}`}>Руководитель отделения Ассоциации в г.о. Химки</div>
                  <div className={`mt24 ${s.cardName}`}>Атаханова</div>
                  <div className={s.cardSurname}>Зульфия Тойчиевна</div>

                  <div className={`mt40 ${s.cardMoreDetails}`}>г.о. Химки, ул. Энгельса, д. 21.</div>
                  <div className={s.time}><div className={`${s.cardMoreDetails}`}>Прием населения: </div>Ср 10:00–15:00</div>

                  <div className={`mt24 ${s.cardBtnRow}`}>
                     <div className={`oval ${s.cardTel}`}>+7 (495) 572-33-14</div>
                     <div className={`oval ${s.cardTel}`}><a className={s.link} href="https://upravdommo.ru/">upravdommo.ru</a></div>
                  </div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default AssociationApartmentBuildingsKhimki;
