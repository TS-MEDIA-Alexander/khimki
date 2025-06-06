import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './ParticipatoryBudgeting.module.css';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

import LinkContainer from '../../Components/LinkContainer';

const ParticipatoryBudgeting = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Инициативное бюджетирование</span>
            </div>
            <h1 className={`mt24 pageTitle`}>
               Инициативное бюджетирование
            </h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/dokumenty/protokoly-konkursnoj-komissii-go-himki-po-otboru-p/' text={'Протоколы Конкурсной комиссии г.о. Химки по отбору проектов инициативного бюджетирования'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/otchety-o-realizacii-proektov-iniciativnogo-byudzh/' text={'Отчеты о реализации проектов инициативного бюджетирования'} /></div>
            </div>


            <div className={`mt80 text`}>
               <div className={`pageSubtitle`}>О проекте «Инициативное бюджетирование»</div>

               <div className="mt38 fw600">Идея проекта:</div>
               <p className='mt38'>
                  Проект «Инициативное бюджетирование» является инициативой Губернатора Московской области А. Ю. Воробьева, который на муниципальном уровне в городском округе Химки Московской области нашел отражение в подпрограмме «Эффективное местное самоуправление» муниципальной программы «Развитие институтов гражданского общества, повышение эффективности местного самоуправления и реализации молодежной политики», утвержденной постановлением Администрации городского округа Химки от 10.12.2019 № 1098.
               </p>

               <div className="mt38 fw600">Что такое инициативное бюджетирование?</div>
               <p>
                  Под инициативным бюджетированием понимается реализация проектов, направленных на решение вопросов местного значения, при непосредственном участии граждан в определении и выборе проектов инициативного бюджетирования и участия в их реализации.
               </p>
               <p>
                  Инициативное бюджетирование предусматривает выделение на конкурсной основе субсидий из областного бюджета на реализацию наиболее важных для муниципальных образований проектов, направленных на решение вопросов местного значения.
               </p>
               <p>
                  Отличительной особенностью идеи инициативного бюджетирования является активное участие населения при выборе и реализации проектов.
               </p>
               <p>
                  Распоряжением Главного управления территориальной политики Московской области от 23.11.2020 № 22 «Объявление о проведении конкурсного отбора проектов инициативного бюджетирования в Московской области в 2021 году» определены этапы подготовки и сроки проведения конкурсного отбора проектов инициативного бюджетирования в Московской области в 2021 году.
               </p>
               <div className="mt38 fw600">Этапы проекта:</div>

               <ul className='mt38'>
                  <li>
                     Подача заявок — завершен 14.12.2020
                  </li>
                  <li>
                     Голосование — завершен 24.12.2020
                  </li>
                  <li>
                     Направление заявки на региональный конкурс — с 16.01.2021 по 24.02.2021
                  </li>
                  <li>
                     Определение проектов-победителей — с 24.02.2021 по 15.03.2021
                  </li>
                  <li>
                     Финансовое обеспечение — 15.03.2021 по 30.04.2021
                  </li>
                  <li>
                     Реализация проекта — апрель — сентябрь 2021
                  </li>
               </ul>

               <p>
                  Проекты инициативного бюджетирования в Московской области направлены на активизацию участия жителей в определении приоритетов расходования средств местных бюджетов и поддержку инициатив жителей в решении вопросов местного значения.
               </p>

               <div className="mt38 fw600">Реализация проектов инициативного бюджетирования в Московской области позволит:</div>

               <ul className='mt38'>
                  <li>
                     Решить наиболее острые проблемы жителей;
                  </li>
                  <li>
                     Повысить эффективность расходования средств местных бюджетов и бюджета Московской области;
                  </li>
                  <li>
                     Повысить сохранность объектов, созданных в рамках инициативного бюджетирования;
                  </li>
                  <li>
                     Вовлечь жителей в развитие территории через реализацию проектов инициативного бюджетирования.
                  </li>
               </ul>

               <p>
                  Инициаторами проектов инициативного бюджетирования могут выступать жители городских округов Московской области (граждане Российской Федерации, обладающие избирательным правом на территории городских округов Московской области), инициативные группы жителей, органы территориального общественного самоуправления (ТОС), депутаты Московской областной Думы. Юридические лица (за исключением бюджетных учреждений и муниципальных предприятий) и индивидуальные предприниматели, осуществляющие деятельность на территории городского округа, взаимодействуют с инициаторами проектов инициативного бюджетирования по финансированию проектов
               </p>

            </div>

            <div className="mt80 subTitle">Руководящие документы проекта</div>

            <div className={`mt38 borderMain ${s.border}`}>
               <DocumentContainerDownload type={'PDF'} text='Постановление Правительства Московской области от 10.11.2020 № 847/37 «О внесении изменений в Порядок проведения конкурсного отбора проектов инициативного бюджетирования в Московской области и в Положение о Московской областной конкурсной комиссии по проведению конкурсного отбора проектов инициативного бюджетирования в Московской области» ' date="" />
               <DocumentContainerDownload type={'PDF'} text='Изменения в муниципальную программу городского округа Химки Московской области «Здравоохранение»' date="" />
               <DocumentContainerDownload type={'PDF'} text='Распоряжение ГУТП Московской области от 19.11.2020 № 21 «О внесении изменений в распоряжение Главного управления территориальной политики Московской области от 23.03.2020 № 3 «Об утверждении Методических рекомендаций для муниципальных образований Московской области по проведению муниципального конкурсного отбора проектов инициативного бюджетирования на территории городских округов Московской области' date="" />
               <DocumentContainerDownload type={'PDF'} text='Методические рекомендации по проведению муниципального конкурсного отбора проектов инициативного бюджетирования на территории городских округов Московской области ' date="" />
               <DocumentContainerDownload type={'PDF'} text='Распоряжение Главного управления территориальной политики Московской области от 23.11.2020 № 22 «Объявление о проведении конкурсного отбора проектов инициативного бюджетирования в Московской области в 2021 году»' date="" />
               <DocumentContainerDownload type={'PDF'} text='Распоряжение Администрации городкого округа Химки Московской области от 12.01.2021 № 1-р "О создании конкурсной комиссии городского округа Химки Московской области по отбору проектов инициативного бюджетирования в городском округе Химки Московской области в 2021 году"' date="" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к распоряжению Администрации городского округа Химки Московской области от 12.01.2021 № 1-р "Состав конкурсной комиссии городского округа Химки Московской области по отбору проектов инициативного бюджетирования в городском округе Химки Московской области в 2021 году"' date="" />
               <DocumentContainerDownload type={'PDF'} text='Протокол Конкурсной комиссии городского округа Химки Московской области по отбору проектов инициативного бюджетирования в городском округе Химки Московской области в 2021 году' date="" />
               <DocumentContainerDownload type={'PDF'} text='Приложение к протоколу Конкурсной комиссии городского округа Химки Московской области "Итоги голосования Конкурсной комиссии городского округа Химки Московской области по отбору проектов инициативного бюджетирования на территории городского округа Химки Московской области"' date="" />
               <DocumentContainerDownload type={'PDF'} text='Протокол Конкурсной комиссии городского округа Химки Московской области по отбору проектов инициативного бюджетирования в городском округе Химки Московской области в 2021 году от 02.02.2021' date="" />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default ParticipatoryBudgeting;
