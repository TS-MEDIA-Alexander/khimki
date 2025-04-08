import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './PublicChamberCandidates.module.css';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const PublicChamberCandidates = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.publicChamber} className='breadcrumbsFrom'> / Общественная палата</NavLink>
               <span className='breadcrumbsTo'> / Кандидаты в члены муниципальной общественной палаты</span>
            </div>
            <h1 className="mt24 pageTitle">
               <p>Кандидаты в члены</p>
               <p>муниципальной общественной</p>
               палаты
            </h1>
            <div className={`mt80 borderMain ${s.border}`}>
               <DocumentContainerDownload type={'PDF'} text='Список кандидатов в члены общественной палаты городского округа Химки' date="21.06.2024" />
            </div>
            <div className={`mt80 ${s.title}`}>Вниманию кандидатов в Общественную палату г.о. Химки! </div>

            <div className={`mt38 ${s.text}`}>
               <p>
                  29 июля с 10.00 до 12.00 состоятся консультации с кандидатами в члены Общественной палаты городского округа Химки в онлайн-формате (конференция ZOOM).
               </p>
               <p>
                  К консультациям привлекаются:
               </p>
               <ul className={s.targetContainer}>
                  <li className='mt38'>выдвинутые кандидаты в члены нового состава муниципальной ОП;</li>
                  <li>члены Рабочей группы Общественной палаты Московской области;</li>
                  <li>представитель ГУСК МО;</li>
                  <li>представитель Совета депутатов г.о. Химки.</li>
               </ul>
               <p>
                  В ходе консультаций каждый кандидат получит возможность коротко рассказать о себе (профессиональная и общественная деятельность за последние 3 года) и своих планах (проектах, программах), предполагаемых для реализации в случае избрания в состав муниципальной общественной палаты.
               </p>
               <p>
                  Расчетная продолжительность консультации с каждым кандидатом составляет от 3 до 5 минут.
               </p>
               <p>
                  Для принятия участия в онлайн-консультации кандидатам необходимо в срок до 24 июля 2020 г.сообщить о своем желании в Администрацию г.о. Химки{/*  по телефону: <br /> 8-495-572-32-58. */}
               </p>
            </div>
            <div className={`mt38 ${s.btnText}`}>+7 (495) 572-32-58</div>

            <div className={`mt80 ${s.title}`}>
               <p>Онлайн-голосование по выборам в общественную палату г.о.</p>
               Химки назначено на 18 июля
            </div>

            <div className={`mt38 ${s.text}`}>
               <p>
                  Администрация г.о.Химки совместно с Общественной палатой городского округа и Общественной палатой Московской области завершает подготовку к проведению на территории городского округа Единого в Московской области дня голосования по выборам в муниципальные общественные палаты.
               </p>
               <p>
                  Мероприятие пройдет 18 июля 2020 года в формате онлайн-голосования, организованном на сайте Общественной палаты Московской области.
               </p>
            </div>

            <div className={`mt80 borderMain ${s.border}`}>
               <DocumentContainerDownload type={'PDF'} text='Список кандидатов в члены Общественной палаты городского округа Химки Московской области' date="21.06.2024" />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default PublicChamberCandidates;
