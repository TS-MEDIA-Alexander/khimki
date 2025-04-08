import React from 'react';
import s from './ResultsConsiderationApplications.module.css';

import ContantContainerMain from '../../total/ContantContainerMain';
import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

import Table from '../../Components/Table';

/* import rezultaty_rassmotreniya_obrascheniy_tablitsa from '../../assets/tables/rezultaty_rassmotreniya_obrascheniy_tablitsa.json'; */

import banner_1 from '../../assets/img/citizensAppeals/banner_1.png';
import banner_2 from '../../assets/img/citizensAppeals/banner_2.png';

import table01 from '../../assets/tables/table_0.1.json';
import table0 from '../../assets/tables/table0.json';
import table1 from '../../assets/tables/table1.json';
import table2 from '../../assets/tables/table2.json';
import table3 from '../../assets/tables/table3.json';
import table4 from '../../assets/tables/table4.json';
import table5 from '../../assets/tables/table5.json';
import table6 from '../../assets/tables/table6.json';
import table7 from '../../assets/tables/table7.json';

import LinkContainer from '../../Components/LinkContainer';

import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const ResultsConsiderationApplications = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.citizensAppeals.main} className='breadcrumbsFrom'>Обращения граждан</NavLink>
               <span className='breadcrumbsTo'> / Результаты рассмотрения обращений</span>
            </div>
            <div className="mt24 pageTitle">
               <p>Результаты рассмотрения</p>
               обращений
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/dokumenty/rezultaty-rassmotreniya-obrashenij/' text={'Обращения граждан, поступивших на «горячую линию» Администрации'} />
            </div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступившим в Администрацию городского округа Химки Московской области за 2024 год и соответствующий период 2023 года
            </div>

            <div className="mt40">
               <Table table={table01} style={s} />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 11.02.2025</div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступившим в Администрацию городского округа Химки Московской области за  первое полугодие 2024 года и соответствующий период 2023 года
            </div>

            <div className="mt40">
               <Table table={table0} style={s} />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 05.11.2024</div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступившим в Администрацию городского округа Химки Московской области за 2023 год и соответствующий период 2022 года
            </div>

            <div className="mt40">
               <Table table={table1} style={s} />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 04.03.2024</div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступившим в Администрацию городского округа Химки Московской области за первое полугодие 2023 года и соответствующий период 2022 года
            </div>

            <div className="mt40">
               <Table table={table2} style={s} />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 11.08.2023</div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступивших в Администрацию городского округа Химки Московской области за 2022 год и соответствующий период 2021 года
            </div>

            <div className="mt40">
               <Table table={table3} style={s} />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 09.02.2022</div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступивших в Администрацию городского округа Химки Московской области за первое полугодие 2022 года и соответствующий период 2021 года
            </div>

            <div className="mt40">
               <Table table={table4} style={s} />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 09.02.2023</div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступивших в Администрацию городского округа Химки Московской области за 2021 года и соответствующий период 2020 года
            </div>

            <div className="mt40">
               <Table table={table5} alt="" />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 09.03.2022</div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступивших в Администрацию городского округа Химки Московской области за первое полугодие 2021 года и соответствующий период 2020 года
            </div>

            <div className="mt40">
               <Table table={table6} alt="" />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 21.10.2021</div>

            <div className="mt80 pageSubtitle">
               Сведения по обращениям граждан, поступивших в Администрацию городского округа Химки Московской области за 2020 год и соответствующий период 2019 года
            </div>

            <div className="mt40">
               <Table table={table7} alt="" />
            </div>

            <div className={`mt40 ${s.description}`}>Дата публикации: 16.03.2021</div>

            <div className="text">
               <div className="mt120 fw600">Обращения 2018 г.</div>
               <div className="mt38">
                  <div className={`${s.bannerContainer}`}><img src={banner_1} alt="" /></div>
               </div>

               <div className="mt38 pageSubtitle">
                  Поступление обращений граждан в администрацию
                  городского округа химки за 2018 год</div>

               <p>
                  Через информационный портал «Добродел» поступило 66424 первичных сообщений граждан.
               </p>

               <p>
                  Самыми популярными темами сообщений стали вопросы жилищно-коммунального хозяйства и благоустройства, транспортного обслуживания населения, пассажирские перевозки, борьба с коррупцией.
               </p>
               <p>
                  По активности жителей на портале «Добродел» городской округ Химки находится в лидерах по Московской области. Вышеуказанный сервис для жителей предусматривает обратную связь заявителя с органами власти. Немаловажно, что за 2018 год 36556 обращений, а это 55% от общего поступления, отмечены пользователями портала «Добродел» как успешно решенные.
               </p>
               <p>
                  На постоянной основе проводится анализ поступающих обращений, разработани реализуется комплекс мероприятий направленный на устранения причин и условий способствующих повышенной активности жителей по отдельным вопросам.
               </p>
               <p>
                  Так в целях повышения комфортности проживания, и как следствие, снижения количества обращений ежегодно благоустраивается 10% дворовых территорий. Планы формируютсяс учетом голосования жителей на информационном портале «Добродел». За период с 2015г. по 2018г. благоустроено 236 дворовых территорий. В 2019 году планируется благоустройство 56 дворовых территорий.
               </p>
               <p>
                  Также за период с 2015г. по 2018г. было благоустроено 270 детских и спортивных площадок. В 2019 году планируется благоустроить еще 70 детских и спортивных площадок.
               </p>
               <p>
                  Информация о деятельности органов местного самоуправления, направленной на повышение качества жизни, освещается в городских средствах массовой информации.
               </p>
            </div>
            <div className="mt120 fw600">Обращения Ⅰ квартал 2018 г.</div>
            <div className="text">
               <div className="mt38">
                  <div className={`${s.bannerContainer}`}><img src={banner_2} alt="" /></div>
               </div>

               <div className="mt38 pageSubtitle">Информация о результатах рассмотрения обращений граждан и принятых по ним мерах за первый квартал 2018 года </div>
               <p>
                  В I квартале 2018 г. в адрес Администрации городского округа Химки поступило 3036 обращений граждан, в том числе 518 обращений, направленных на рассмотрение из Администрации Губернатора Московской области.
               </p>
               <p>
                  Через информационный портал «Добродел» поступило 16 406 первичных сообщений граждан.
               </p>
               <p>
                  На сегодняшний день большинство обращений граждан поступают через портал «Добродел». По активности жителей на данном портале городской округ Химки находится в лидерах по Московской области. Срок реагирования на такие сообщения 8 дней. Немаловажно, что портал «Добродел» предусматривает и обратную связь заявителя с органами власти. Так за январь — март 2018 года более 57% проблем отмечено пользователями портала «Добродел» как успешно решенные.
               </p>
               <p>
                  Самыми популярными темами сообщений являются вопросы жилищно-коммунального хозяйства и благоустройства.
               </p>
            </div>
            <div className={`mt40 borderMain borderDocumentContainer`}>
               <DocumentContainerDownload type={'PDF'} text='Информация о рассмотрении обращений граждан за 2017 год' date='06.02.2023' />
            </div>
            <div className="mt120 text">
               <div className="pageSubtitle">Информация о результатах рассмотрения обращений граждан
                  за первое полугодие 2017 год </div>
               <p>
                  В период с 1 января по 30 сентября 2017 года в адрес Администрации городского округа поступило 29674 обращений граждан, из которых 22179 обращений направлено гражданами с использованием Портала Московской области «Добродел».
               </p>
               <ul className="mt38">
                  <li>Уборка в многоквартирных домах и уборка территорий – 424 обращения.</li>
                  <li>Вопросы строительства различных типов объектов и содержания стройплощадок – 3375 обращений.</li>
                  <li>Организация дорожного движения для пешеходов,</li>
                  <li>в том числе установки и эксплуатации «лежачих полицейских» - 374 обращения.</li>
                  <li>Работы торговых предприятий  (магазинов) – 1291 обращение.</li>
                  <li>Вопросы незаконной рекламы (размещение и содержание) – 615 обращений.</li>
               </ul>
               <div className="mt120 pageSubtitle">Информация о результатах рассмотрения обращений граждан
                  за первое полугодие 2016 год </div>
               <p>
                  В период с 1 января по 31 декабря 2016 года в адрес Администрации городского округа поступило 29912 обращений граждан, из которых 21539 обращений направлено гражданами с использованием Портала Московской области «Добродел».
               </p>
               <ul className="mt38">
                  <li>Уборка в многоквартирных домах и уборка территорий –  2427 обращений.</li>
                  <li>Вопросы строительства различных типов объектов и содержания стройплощадок – 1704 обращения.</li>
                  <li>Организация дорожного движения для пешеходов,</li>
                  <li>в том числе установки и эксплуатации «лежачих полицейских» - 173 обращений.</li>
                  <li>Вопросы незаконной рекламы (размещение и содержание) – 386 обращений.</li>
               </ul>
               <div className="mt120 pageSubtitle">Информация о результатах рассмотрения обращений граждан
                  за первое полугодие 2015 год </div>
               <p>
                  В 2015 году в адрес Администрации городского округа поступило более 950 обращений граждан.
               </p>
               <p>
                  Основная тематика письменных обращений это вопросы жилищно-коммунального хозяйства. По данному направлению поступило 750 обращений.
               </p>
               <p>
                  Основные вопросы касаются благоустройства придомовой территории, ремонта и уборки подъездов, восстановления освещения
               </p>
               <ul className="mt38">
                  <li>вопросы архитектуры и строительства, а именно: благоустройство территорий,
                     где ведется строительство, всего - 38 обращений;
                  </li>
                  <li>вопросы территориальной безопасности, связанные с безопасностью дорожного движения, установкой остановочных комплексов, «лежачих полицейских» - 42 обращения;
                  </li>
                  <li>вопросы социальной сферы, в том числе по работе лечебно-профилактических учреждений, благоустройству зон отдых молодежи – 30 обращений;
                  </li>
                  <li>вопросы, связанные с работой промышленных предприятий и бизнеса - 37 обращений;
                  </li>
                  <li>вопросы торговли и рекламы, в том числе незаконная торговля и реклама – всего 53 обращения.</li>
               </ul>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default ResultsConsiderationApplications;