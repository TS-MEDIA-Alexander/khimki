import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Investities.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import LinkContainer from '../../Components/LinkContainer';

import img1 from '../../assets/img/activity/Investities/img1.png';
import img2 from '../../assets/img/activity/Investities/img2.png';
import img3 from '../../assets/img/activity/Investities/img3.png';
import img4 from '../../assets/img/activity/Investities/img4.png';
import img5 from '../../assets/img/activity/Investities/img5.png';
import img6 from '../../assets/img/activity/Investities/img6.png';
import img7 from '../../assets/img/activity/Investities/img7.png';


const Investities = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Инвестиции</span>
            </div>
            <div className={`mt24 pageTitle`}>Инвестиции</div>

            <div className={s.containtContainer}>

               <div className={`mt80 borderMain ${s.linkContainer}`}>
                  <LinkContainer link='http://old.admhimki.ru/investicii/investicionnye-programmy/' text={'Инвестиционные программы'} />
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/investicii/torgi/' text={'Торги'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/investicii/lgoty-i-preferencii/' text={'Льготы и преференции'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/investicii/zakonodatelstvo/' text={'Законодательство'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/investicii/oprosy/' text={'Опросы'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/investicii/kontakty/' text={'Контакты'} /></div>
               </div>

               <div className="mt80 pageSubtitle">Округ, нацеленный на результат</div>
               <div className={`mt38 text ${s.citationConatiner}`}>
                  <div className={`${s.citationTextBody} borderLeftMain`}>
                     <p>
                        «Развитие делового климата – одно из приоритетных направлений программы «Стратегия перемен» губернатора Московской области Андрея Воробьева. Работа с инвестором – это стратегическая задача для каждого муниципалитета. И городской округ Химки входит в число самых динамично развивающихся территорий Подмосковья. Этому способствует и близость к столице, и транспортная доступность, и исторически сложившаяся промышленная специализация, и научно-технический кадровый потенциал, и развитая инфраструктура, и реализуемая политика открытости власти и поддержки бизнеса.
                     </p>
                     <p>
                        По итогам 2015 года округ стал лидером по приросту малых и средних предприятий. Несмотря на сложную экономическую ситуацию, в Химках открываются и производственные цеха, и торговые точки, и организации сферы услуг, и офисные центры. К округу проявляют внимание как местные, как и иногородние инвесторы, желающие развивать на территории различные бизнес-направления. При этом владельцы бизнеса понимают свою социальную ответственность и считаются с интересами округа.
                     </p>
                     <p>
                        Все это говорит о том, что нами выбрана правильная стратегия. Разработан мощный блок мер поддержки – от финансовой помощи до консультационных услуг. Сведены к минимуму административные барьеры. Еженедельно проходят приемы предпринимателей, где каждый желающий может получить ответы на вопросы, обратиться к профильным специалистам, внести свои предложения.
                     </p>
                     <p>
                        И мы продолжим стратегию открытого диалога с предпринимательским сообществом, создадим оптимальные условия для деловой реализации, поддержим социально ориентированный бизнес, развитие производства и импортозамещения. Усилим работу по расширению транспортной логистики и созданию инженерной инфраструктуры, откроем новые инвестиционные площадки. Мы нацелены на результат. Уверена, вы тоже.»
                     </p>
                  </div>
                  <div className={`mt20 ${s.authorInfoContainer}`}>
                     <div className={s.author}>Землякова Е.В.</div>
                     <div className={s.jobTitle}>Глава городского округа</div>
                  </div>
               </div>

               <div className={`mt80 flexContainer ${s.mobilFlexContainer}`}>
                  <div className={s.imgBlock}>
                     <div className={s.imgContainer}>
                        <img src={img1} alt="" />
                     </div>
                     <div className={`mt8 ${s.description}`}>Центр Высоких Технологий «ХимРар»</div>
                  </div>
                  <div className={s.imgBlock}>
                     <div className={s.imgContainer}>
                        <img src={img2} alt="" />
                     </div>
                     <div className={`mt8 ${s.description}`}>ФГУП «НПО им. С.А. Лавочкина»</div>
                  </div>
                  <div className={s.imgBlock}>
                     <div className={s.imgContainer}>
                        <img src={img3} alt="" />
                     </div>
                     <div className={`mt8 ${s.description}`}></div>
                  </div>
               </div>

               <div className={`mt38 text`}>
                  <div className="pageSubtitle">Промышленность и наука</div>
                  <p>
                     Наши ведущие предприятия — гордость космического и оборонного машиностроения страны, это история и лицо города, это его коренные жители. Градообразующие предприятия: — ФГУП «НПО им. С. А. Лавочкина» — АО «НПО „Энергомаш“ им. Академика В. П. Глушко — АО „МКБ „Факел“ имени академика П. Д. Грушина За 6 месяцев 2015 года выполнено работ на сумму 990,1 млн. рублей. В результате проведенных работ на предприятиях создано 520 новых рабочих мест. Научно-производственный комплекс (11 предприятий): — Акционерное общество „Машиностроительное конструкторское бюро „Искра“ им. И. И. Картукова» — Акционерное общество «Горизонт» — Закрытое акционерное общество «Исследовательский институт химического разнообразия» Центра высоких технологий «ХимРар» — Федеральное государственное унитарное предприятия научно-производственный центр «Фармзащита» Федерального медико-биологического агентства России — Закрытое акционерное общество «Специальное конструкторское бюро экспериментального оборудования при институте медико-биологических проблем Российской академии наук — Общество с ограниченной ответственностью „Технология лекарств“ — Общество с ограниченной ответственностью „АКЕЛА-Н“ — Федеральное государственное бюджетное образовательное учреждение высшего профессионального образования „Академия гражданской защиты Министерства Российской Федерации по делам гражданской обороны, чрезвычайным ситуациям и ликвидации последствий стихийных бедствий“ На этих предприятиях работает 13 909 чел., что составляет 18,1% от численности работающих на территории городского округа. Администрация округа работает в тесном контакте с руководством и профсоюзными коллективами: — в развитии объектов социальной сферы — в вопросах благоустройства — специального образования Отраслевой спектр представлен более чем 700 предприятиями и организациями. На долю промышленности приходится более 17% объёмов производимой в городском округе продукции. За январь — сентябрь 2015 года объем отгруженных товаров собственного производства, выполненных работ и оказанных услуг составил 87 млрд. руб. Предприятия регулярно получают государственные заказы с полным стабильным финансированием. По итогам 2015 года планируется довести до 48,367 млрд. руб., что составит 219% к уровню 2014 года.
                  </p>
                  <p>
                     Направления поддержки: — Работа по созданию благоприятных административно-правовых условий для инвестиционной деятельности — Формирование инвестиционной привлекательности путем комплексного подхода (участия представителей власти, бизнеса, общественности) — Устранение административных барьеров — Создание экономических механизмов привлечения и поддержки инвестиций (финансовая поддержка, льготное налогообложение, привлекательные тарифные условия) — Взаимодействие с руководством и профсоюзами предприятий.
                  </p>
                  {/* 
                  <div className="mt38 pageSubtitle">Основные цели маркировки и мониторинга движения лекарственных препаратов.</div>
                  <div className="mt38 fw600">Для государства:</div>
                  <ul className='mt38'>
                     <li>
                        профилактика поступления в оборот и одномоментное изъятие из оборота в автоматизированном режиме на всей территории Российской Федерации недоброкачественных, а также фальсифицированных и контрафактных лекарственных препаратов на любом из этапов их обращения от производителя до конечного потребителя;
                     </li>
                     <li>
                        профилактика неэффективных расходов и экономия бюджетных средств за счет невозможности реализации схем «повторного вброса» лекарственных препаратов, невозможности легальной реализации лекарственных препаратов, подлежащих предметно-количественному учету, а также не предназначенных для розничной продажи;
                     </li>
                     <li>
                        контроль адресности движения препаратов, закупаемых за счет бюджета, расходов на их приобретение; мониторинг ценообразования и предельных розничных цен на лекарственные препараты из списка ЖНВЛП;
                     </li>
                     <li>
                        оперативное планирование и управление запасами и резервами препаратов на всех уровнях, включая стратегический.
                     </li>
                  </ul>

                  <div className="mt38 fw600">Для населения:</div>
                  <ul className='mt38'>
                     <li>
                        возможность с помощью персонального мобильного устройства лично проверить легальность приобретаемого (получаемого) лекарственного препарата.
                     </li>
                  </ul>

                  <div className="mt38 fw600">Для бизнеса:</div>
                  <ul className='mt38'>
                     <li>
                        снижение издержек за счет более эффективного управления логистикой; уменьшение упущенной выгоды, обусловленной контрафактной и фальсифицированной продукцией; соответствие требованиям для поставок продукции на международные рынки.
                     </li>
                     <li>
                        Ключевые участники приоритетного проекта:
                     </li>
                     <li>
                        Минздрав России, Росздравнадзор, ФНС, Минпромторг России, Минфин России, Минкомсвязь России.
                     </li>
                     <li>
                        Информация по реализации проекта размещена и регулярно обновляется на официальном сайте Росздравнадзора в разделе «Система маркировки лекарственных препаратов».
                     </li>
                  </ul> */}
               </div>

               <div className={`mt80 flexContainer ${s.mobilFlexContainer}`}>
                  <div className={s.imgBlock}>
                     <div className={s.imgContainer}>
                        <img src={img4} alt="" />
                     </div>
                     <div className={`mt8 ${s.description}`}>ФГУП «НПО им. С.А. Лавочкина»</div>
                  </div>
                  <div className={s.imgBlock}>
                     <div className={s.imgContainer}>
                        <img src={img5} alt="" />
                     </div>
                     <div className={`mt8 ${s.description}`}>Центр Высоких Технологий «ХимРар»</div>
                  </div>
                  <div className={s.imgBlock}>
                     <div className={s.imgContainer}>
                        <img src={img6} alt="" />
                     </div>
                     <div className={`mt8 ${s.description}`}>АО «НПО Энергомаш имени академика В.П. Глушко»</div>
                  </div>
               </div>

               <div className={`mt38 text`}>
                  <p>
                     Инвестиционная поддержка: В соответствии с планами развития, модернизации и технического перевооружения производственной деятельности предприятиями научно-промышленного комплекса запланировано в 2015 году инвестировать 1 835,2 млн. рублей: — ФГУП «НПО им. С. А. Лавочкина» на реконструкцию и техническое перевооружение корпусов 1, 2, 3, 4, 6, , 29, 69 — 488 млн. рублей, — АО «НПО „Энергомаш“ им. академика В. П. Глушко» на реконструкцию очистных сооружений водоподготовки и компрессорной — 814 млн.рублей, — АО «МКБ „Искра“ им. И. И. Картукова» строительство и оснащение базы инновационного центра ракетного двигателестроения — 210 млн. рублей, — ФГУП «НПЦ „Фармзащита“ ФМБА России — строительство опытно-промышленного производства субстанций и готовых лекарственных форм — 4 млн. рублей.
                  </p>
                  <p>
                     Планируемый объем инвестиций в 2016 году на реализацию мероприятий по модернизации и техническому перевооружению производств АО „НПО „Энергомаш“ им. академика В. П. Глушко», АО «МКБ „Искра“ им. И. И. Картукова», ФГУП «НПЦ „Фармзащита“ ФМБА России, ФГУП „НПО им. С. А. Лавочкина“, АО „МКБ „Факел“ им. академика П. Д. Грушина» составляет 3 552,6 млн. рублей. На АО «НПО „Энергомаш“ им. академика В. П. Глушко» запланирована реконструкция предприятия, стоимость работ составит 2 281,1 млн. рублей.
                  </p>
                  <p>
                     Развитию инновационных предприятий способствуют: — инфраструктура городского округа — научно-технический потенциал — демографическая ситуация — географическое положение (близость мегополиса) Центр высоких технологий «ХимРар» — уникальный для Российской Федерации научно-исследовательский комплекс и инновационный бизнес-инкубатор, объединяющий высокотехнологичные организации, ведущие разработки для отечественных и зарубежных фармацевтических и биотехнологических производителей. «ХимРар» объединяет более 20 научных организаций, деятельность которых охватывает широкий спектр в создании лекарственных препаратов для борьбы с онкологическим заболеваниями, препаратов для лечения больных ВИЧ/СПИД инфицированных, заболеваний нервной системы и других тяжелых болезней. Ежегодно «Химрар» открывает 2-3 новых предприятия и создает новые рабочие места, на настоящий момент в Центре высоких технологий работает более 1200 сотрудников.
                  </p>
                  <p>
                     В индустриальном парке «Шереметьево» работает 12 резидентов с численностью персонала около 500 человек. В рамках дальнейшего развития до 2018 года планируется увеличить число резидентов индустриального парка до 30 и создать еще 500 рабочих мест.
                  </p>
                  <p>
                     В результате мероприятий, проводимых Администрацией городского округа, в целях привлечения потенциальных инвесторов и стимулирования инвестиций, направленных на развитие промышленности, принято решение о создании «Производственно-инвестиционной зоны „Химки“ общей площадью более 30 Га.
                  </p>
               </div>

               <div className={`mt80 flexContainer ${s.mobilFlexContainer}`}>
                  <div className={s.imgBlock}>
                     <div className={s.imgContainer}>
                        <img src={img7} alt="" />
                     </div>
                     <div className={`mt8 ${s.description}`}>Центр Высоких Технологий «ХимРар»</div>
                  </div>
               </div>

               <div className={`mt38 text`}>
                  <div className="pageSubtitle">Строительство</div>
                  <p>
                     В период с 2014 по 2015 г. на территории городского округа Химки реализовано два крупных инвестиционных проекта по строительству объектов недвижимости. На основании инвестиционного контракта от 23.08.2007 ООО «Строительство и инвестиции» осуществило проектирование, строительство и ввод в эксплуатацию многофункционального торгово-производственного и административно-складского комплекса по строительному адресу: г. Химки, Северо-Западная промышленно-коммунальная зона (Роберт Бош).
                  </p>
                  <p>
                     Строительство и ввод в эксплуатацию второго крупного объекта — административно-технического центра садовой техники по адресу: г. Химки, Ленинградское шоссе, 29Г, осуществлено ООО «ЮНИСОО ГРУП» на основании инвестиционного контракта от 02.08.2010 № ЮИ-04.
                  </p>
                  <p className="fw600">Инвестиционные проекты, находящиеся в процессе реализации.</p>
                  <p>
                     В настоящее время на территории городского округа Химки в процессе реализации на стадии строительства находится более 50 инвестиционных контрактов. Самые крупные из них: — застройка жилых микрорайонов 6, 7 и 8 города Химки (инвестор — АО «ПИК-Регион»);
                  </p>

                  <ul className='mt38'>
                     <li>
                        расширение и реконструкция Делового центра по адресу: г. Химки, аэропорт Шереметьево (инвестор — ЗАО «Деловой центр Шереметьевкий);
                     </li>
                     <li>
                        строительство жилого микрорайона в мкр. Подрезково в границах: ул. Горная — граница мкр. Сходня — территория жилой застройки по ул. Мира (инвестор — ООО „СтройКонсалт“).
                     </li>
                  </ul>

                  <p className="mt38 fw600">Строительство объектов недвижимости на территории городского округа Химки также ведется иностранными Инвесторами. Среди них можно отметить следующие организации:</p>
                  <ul className='mt38'>
                     <li>ООО „Шереметьево-4“;</li>
                     <li>ООО „Бизнес отели“;</li>
                     <li>ООО „Элит-Дизайн“;</li>
                     <li>ООО СК „Север-2001“;</li>
                     <li>ЗАО „Дениз Девелопмент“</li>
                  </ul>

                  <div className="mt38 pageSubtitle">Предпринимательство</div>

                  <p>
                     За 10 месяцев 2015 года на территории городского округа Химки зарегистрировано 1330 новых предприятий и организаций, из них: 948 – юридических лиц; 382 – индивидуальных предпринимателя. Из-них: - производственные сфера – 88; - научно-исследовательской деятельности – 41
                  </p>
                  <p>
                     Создано более 1500 новых рабочих мест.
                  </p>
                  <p>
                     Всего в Химках 11 682 субъекта предпринимательства.
                  </p>
                  <p>
                     Городской округ Химки занял 3 место по итогам проведенного исследования Министерством инвестиций и инноваций Московской области по рейтингованию муниципальных образований Московской области в отношении условий для ведения предпринимательской деятельности. В январе 2015 года в Химках создан Единый Центр Поддержки предпринимательства, работающий по принципу одного окна. В ЕЦПП входят: МБУ «Малый бизнес Химки», ХТПП, общественная приёмная уполномоченного по защите прав предпринимателей, третейский суд, представили общественной палаты Химок.
                  </p>
                  <p>
                     Услуги ЕЦПП: - Бесплатные консультации и семинары - Подготовка и рассмотрение заявок на субсидирование - Реестр субъектов предпринимательства
                  </p>

                  <ul className='mt38'>
                     <li>
                        Мониторинг ценовой политики - Информирование через СМИ В 2015 году реализуются три основных мероприятия муниципальной программы «Предпринимательство городского округа Химки»:
                     </li>
                     <li>
                        компенсация затрат производственным и инновационным предприятиям на модернизацию оборудования. Размер субсидии составляет 50% от произведенных затрат, а максимальный объем субсидии может достигать 10 млн. руб. на одну компанию;
                     </li>
                     <li>
                        компенсация затрат предприятий по договорам лизинга. По данному мероприятию размер субсидии составляет 50% затрат на уплату авансового платежа, а максимальный объем субсидии может достигать 10 млн. руб. на одну компанию;
                     </li>
                     <li>
                        компенсация затрат социально ориентированным предприятиям. В рамках данного мероприятия предприниматели могут компенсировать 85% от произведенных ими затрат: коммунальные платежи, арендная плата, капитальный ремонт и приобретение оборудования.
                     </li>
                  </ul>

                  <p>
                     На реализацию трех мероприятий в 2015 году предусмотрено 20 393 000 рублей из трех уровней бюджетов.
                  </p>
                  <p>
                     В 2015 году на приобретение оборудования в целях создания либо модернизации производства товаров (работ, услуг) в рамках субсидирования выделено 4 000 000 рублей.
                  </p>
                  <p>
                     На частичную компенсацию затрат на уплату первого взноса (аванса) при заключении договора лизинга оборудования в рамках субсидирования выделен 1 000 000 рублей.
                  </p>
                  <p>
                     На частичную компенсацию затрат социально ориентированного бизнеса, направленную на достижение общественно полезных целей, улучшение условий жизнедеятельности гражданина и (или) расширение его возможностей самостоятельно обеспечивать свои основные жизненные потребности, а также на обеспечение занятости, оказание поддержки инвалидам, гражданам пожилого возраста и лицам, находящимся в трудной жизненной ситуации в рамках субсидирования выделен 1 000 000 рублей. Привлечено из средств областного и федерального бюджетов 14 393 000 рублей.
                  </p>

               </div>

            </div>
         </ContantContainerMain>
      </div>
   )
}
export default Investities;