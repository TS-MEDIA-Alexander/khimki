import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './HistoryKhimki.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

/* Фотографии */
import mainImg from '../../assets/img/history/historyKhimki/main_img.png';
import img1 from '../../assets/img/history/historyKhimki/img1.png';
import img2 from '../../assets/img/history/historyKhimki/img2.png';
import img3 from '../../assets/img/history/historyKhimki/img3.png';
import img4 from '../../assets/img/history/historyKhimki/img4.png';
import img5 from '../../assets/img/history/historyKhimki/img5.png';
import img6 from '../../assets/img/history/historyKhimki/img6.png';
import img7 from '../../assets/img/history/historyKhimki/img7.png';
import img8 from '../../assets/img/history/historyKhimki/img8.png';
import img9 from '../../assets/img/history/historyKhimki/img9.png';
import img10 from '../../assets/img/history/historyKhimki/img10.png';

/* Компоненты */
import ImgContainerRow from '../../Components/ImgContainerRow';
import VirtualMuseumLarge from '../../BannersComopnents/VirtualMuseumLarge';

/* Баннеры */
import FamilyYear from '../../BannersComopnents/Year';
import SVO from '../../BannersComopnents/svo';

const HistoryKhimki = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.history.main} className='breadcrumbsFrom'>История</NavLink>
               <span className='breadcrumbsTo'> / История города Химки </span>
            </div>
            <h1 className={`mt24 pageTitle ${s.title}`}>История города Химки </h1>
            <div className="mt80 columnContainer">
               <div className="columnLarge">

                  <img className={s.imgMain} src={mainImg} alt="" />
                  <div className={`mt80 ${s.mainTextContainer}`}>
                     <div className={s.subtitle}>ХVI-ХVII вв. Название</div>
                     <div className={`mt38 text`}>
                        Название город получил от реки Химка, на которой было основанно предшествовавшее городу поселение. Окончательное происхождение и значение названия реки пока не выясненно. В древности употреблялась форма Хинска, Хынска, в ХVI-ХVII вв. — Хинка, Химка, у отдельных селений — Хилка (верховье) и Выходная (низовье). Форма «Химка» окончательно установилась только в XIX веке. Форму «хинька» можно связать с апеллятивом хинь — «чепуха, пустяки, вздор» (Даль, IV): русское диалектное (рязянское) «хинью» — «бесполезно, впустую». Это значит что «Хинка» — незначительная речка. Со временем слово «хинь» стало малоупотребительным, а позднее перестало использоваться вообще и стало восприниматься как непонятное. Смысловая его связь с названием «Хинка» утратилось; оно было переосмысленно, возможно под влиянием входившего в употребление слова «химия». Не исключенно и балтийское происхождение гидронима (среднелитовское. himinas — «мох»), а также от мужского имени Химка — просторечной формой от Фимка или Ефимий. Наконец, название связывают с понятием Хилка-верхний путь (выход), так как, предполагается, по Химке проходил торговый путь (возможно, что по Всходне-Сходне «всходили» к Волоку Ламскому, а по Хилке — спускались от него). Согласно данным XIX века, в Химке водились водились щуки, окуни, плотва, голавли. В жару река почти пересыхала и при ширине в 2 сажени (4 м.) глубину имела в 3 вершка (ок. 13 см.)
                     </div>
                     <div className={`mt38 ${s.subtitle}`}>1608-1609 Предыстория</div>
                     <div className={`mt38 text`}>
                        <p>
                           На территории современных Химок ранее располагались сёла Куркино (до 1704 — Патриаршье село), Козлово, Козмодемьяновское (в конце XVI века вотчина Бориса Годунова), Киреево, деревня Красные Горки и др. Существовала и деревня (впоследствии поселок городского типа) Химки - станция Петербургского шоссе, но она лежала несколько южнее, на напротив Алешкина (ныне часть района Москвы Химки-Ховрино). В 1859 г. число ее жителей обоего пола составляло 154 при 28 дворах.
                        </p>

                        <p>
                           В 1608-1609 гг. эта местность стала полем ожесточенных сражений москвичей с отрядами «Тушинского вора». В 1812 г. в деревне Химки расположился французский авангард корпуса Евгения Богарне, атакованный в ночь на 15 сентября отрядом генерала В.Д.Иловайского.
                           С 1830-х гг. район Химок стал популярным дачным местом.
                        </p>
                     </div>
                     <div className={`mt38 ${s.subtitle}`}>1851-1912 Станция «Химская»</div>
                     <div className={`mt38 text`}>
                        <p>
                           Начало городу было положено 1 ноября 1851 года, когда была открыта станция Петербургско-Московской железной дороге Химская (ныне «Химки»), а при ней возник пристанционный поселок. Станция, на 18-й версте от Москвы, была первая от города; она была отнесена к 4 классу, и по штату ей полагались: один кассир, один начальник станциии его помощник и один жандарм. На станции были построены деревянные платформы, «гостиница» (вокзал), железнодорожная будка и жилой дом для железнодорожников, а также круглое здание для хранения локомотивных машин. Возле пассажирского дома располагалась палатка-буфет, увенчанная золотым гребешком. Вокруг этих построек до самого Петербургского шоссе стоял густой лес. В 1869 г. в поселке Химская станция постоянно проживало 39 человек, главным образом железнодорожные рабочие и служащие. В 1907 г. станционный поселок насчитывалось уже 47 дворов. От станции к Петербургскому шоссе через лес была проведена дорога — Царское шоссе (ныне Московская улица). В поселке построили почту, телеграф, частную аптеку (Клячко, на Царской аллее), две колониальные лавки, трактир, ресторан с кегельбаном. Всего население, с окрестными деревнями и дачами, составляло 1500 человек. В соседних со станцией деревнях были школы: одноклассная церковно-приходская при церкви Косьмы и Дамиана в Космодемьянском, затем также трехклассное земское училище в селение Кобылья Лужа (ныне улица Родионова).
                        </p>

                        <p>
                           С 1912 г. открылось заведение для показа «туманных картинок». В Космодемьянском на берегу Химки, в усадьбе купца Патрикеева «Белые столбы» (по цвету столбов въездных ворот) архитектором Шехтелем был выстроен дом — блестящий образец стиля «модерн» в архитектуре (после революции санаторий, ныне больница № 1).
                        </p>
                     </div>
                  </div>

                  <ImgContainerRow imgArr={[img1, img2, img3, img4, img5, img6]} />

                  <div className={` ${s.mainTextContainer}`}>
                     <div className={`mt38 ${s.subtitle}`}>1919-1939 Превращение Химок в рабочий посёлок.</div>
                     <div className={`mt38 text`}>
                        <p>
                           До конца 20-х гг. Химки в целом сохраняли характер дачной местности. В 1923 году в посёлке постоянно проживало 1805 человек, а в 1926 году уже 2876, они насчитывали (после слияния с дачным посёлком Петропавловским) 359 домов. Были открыты школа, библиотека, клуб, амбулатория, появилась пожарная команда. Болотов Владимир Михайлович, потомственный дворянин, но при этом совершенно бескорыстный человек, в далеком 1919 году на общественных началах, отказавшись от государственного жалования открыл в Химках школу первой ступени. Располагалась она там где сейчас находится вход в парк им.Л.Н. Толстова (позднее в этом здании устроили общежитие учителей). Владимир Михайлович был не только заведующим, но и преподавателем. Позднее в 1928 году школа была преобразована в школу крестьянской молодёжи (ШКМ).В 1928 году было проведено электричество.
                        </p>

                        <p>
                           С этого времени начинается промышленный рост Химок. В 1928 году была создана трикотажная артель, выросшая позднее в трикотажную бельевую фабрику. В связи с усилившимся строительством, Николаевский кирпичный завод стал работать круглый год, а не только сезон; с 1931 реконструирован. Тогда же была построена фабрика для изготовления мебели. Артель металлоизделий «Спартак» стала большим предприятием и посёлок рабочих артели превратился в Спартаковскую улицу. Появляются новые жилые посёлки: Лобановский, Чкаловский, Центральный, Грабаровский, Первомайский и Мебельный. На Московской улице в 1939 году строятся два первых многоэтажных каменных дома.
                        </p>

                        <p>
                           С 1937 г. Химки получают статус рабочего посёлка в связи с началом сооружения в городе авиационного завода № 301 (ныне НПО Лавочкина). По состоянию на 26 июня 1938 года посёлок насчитывал 21 тысячу человек.
                        </p>

                     </div>
                  </div>

                  <ImgContainerRow imgArr={[img7, img8, img9, img10]} />

                  <div className={` ${s.mainTextContainer}`}>
                     <div className={`mt38 ${s.subtitle}`}>1932-1937 Канал и поселок «Левобережный»</div>
                     <div className={`mt38 text`}>
                        <p>
                           После сооружения в 1932-37 гг. канала Москва — Волга (ныне канал имени Москвы) в Химках создан порт, на левом берегу канала на месте деревни Киреево образован посёлок Левобережный (1936). Туда, на бывшую даче фабриканта Прохорова, в 1936 г. был переведен из Москвы основанный Крупской в 1930 г. Государственный Библиотечный институт (с 1964 г. — Московский Государственный Институт Культуры). Поскольку же построенный в следующем году канал отрезал поселок от станции Химки, по настоянию Крупской была устроена платформа Левобережная.
                        </p>
                     </div>

                     <div className={`mt38 ${s.subtitle}`}>1940 Превращение Химок в город</div>
                     <div className={`mt38 text`}>
                        <p>
                           Указом ВС СССР от 26 марта 1939 г. был образован город Химки в составе: рабочих поселков Химки, Петровское, Лобаново, дачных посёлков Петропавловский и Николаевский. Новый город насчитывал 23.1 тыс. человек. В 1940 г. Химки стали центром новообразованного Химкинского района.
                        </p>
                     </div>
                  </div>

                  <ImgContainerRow imgArr={[img7, img8, img9, img10]} />

                  <div className={` ${s.mainTextContainer}`}>
                     <div className={`mt38 ${s.subtitle}`}>1941-1945 Великая Отечественная война</div>
                     <div className={`mt38 text`}>
                        <p>
                           В первые месяцы войны авиационный завод № 301 производил истребители Як-1 и Як-7, в дальнейшем большая часть производственного оборудования была вывезена в Новосибирск.
                        </p>

                        <p>
                           Химки оказались самым крайним к Москве пунктом, до которого (хотя и случайно) дошли немцы. Как указывает большинство источников утром 16 октября 1941 года в Химках неожиданно появился отряд мотоциклистов, который захватил мост Ленинградского шоссе и был уничтожен то ли у самого моста, то ли у трамвайного поворотного круга на Соколе, то ли у водной станции «Динамо». Данные об этом долго скрывавшемся событии разнятся, тем более, что позже был и другой прорыв к Химкам — нескольких танков, уничтоженных зенитной батареей на 23 км Ленинградского шоссе (на месте, где ныне стоит памятник «Ежи»). Согласно А. В. Исаеву, это были мотоциклисты 62-го сапёрного батальона армейского подчинения. Согласно историку Анатолию Хорькову, немецкая моторизованная разведка действительно выехала к мосту, но в бой не вступала и уничтожена не была, а, осмотрев местность, благополучно вернулась. По другим данным, наоборот, немецкая мотопехота, была разбита следовавшей на фронт колонной танков.Согласно другим версиям, 16 октября немцы, сломив в Химках сопротивление наскоро собранных ополченцев из студентов, женщин и даже школьников, проехали до Сокола, но, не решившись въезжать в город, вернулись к мосту и заняли оборону до предполагаемого подхода основных сил, где и были уничтожены на следующий день стянутыми войсками. По некоторым данным, немцы были уничтожены у моста и водной станции Динамо Отдельной мотострелковой дивизией особого назначения НКВД СССР им. Ф. Э. Дзержинского (ОМСДОН) (17 танков и взвод мотоциклистов)
                        </p>

                        <p>
                           Для прорыва мотоциклистов называется и дата 30 ноября. По словам Пауля Кареля, «Мотоциклетные дозоры 62-го танкового инженерного батальона, изначально действовавшего в составе 2 тд, но 30 ноября выдвинутого самим Гёпнером вперёд — перед головными частями 2 тд — для нанесения удара по железнодорожной станции Лобня и по району к югу от неё, помчались к цели на своих мотоциклах и, не встречая противодействия, вышли к Химкам (…) в восьми километрах от окраины Москвы. Нагнав страха и вызвав панику среди местного населения, мотоциклисты повернули назад. Эти мотоциклисты и сапёры корпуса подобрались к берлоге Сталина ближе всех.». Уильям Ширер излагает следующий эпизод: «2 декабря разведывательный батальон 258-й пехотной дивизии проник в Химки, пригород Москвы, откуда были виды шпили кремлевских башен; однако на следующее утро батальон был оттеснен из Химок несколькими русскими танками и разношерстным отрядом наскоро мобилизованных рабочих города.».
                        </p>

                        <p>
                           Знаменитый мост простоял до 1980 года, когда был разобран (несмотря на протесты ветеранов войны), однако не уничтожен, а сплавлен ниже по течению; теперь он стоит на Рязанском шоссе у села Чулково под городом Жуковским
                        </p>

                        <p>
                           По решению ГКО от 17 октября, в Химках начала спешно возводиться «Дополнительная линия обороны» по рекам Клязьме и Сходне. В конце ноября в это направление прикрывала формировавшаяся 20-я армия во главе с генералом А. А. Власовым, штаб которого находился тут же, по адресу Ленинградское шоссе, 16.5 декабря 20-я армия успешно перешла в контрнаступление и освободила Лобню; однако, ввиду личности командующего, военная история Химок замалчивалась на протяжении всей советской эпохи. В настоящее время на месте, где находился штаб армии, открыта мемориальная доска.
                        </p>
                     </div>

                  </div>

                  <ImgContainerRow imgArr={[img7, img8, img9, img10]} />

                  <div className={` ${s.mainTextContainer}`}>
                     <div className={`mt38 ${s.subtitle}`}>1950-1984 Послевоенные годы</div>
                     <div className={`mt38 text`}>
                        <p>
                           Здание райкома КПСС (ныне здание городской администрации) около 1960 г.
                        </p>

                        <p>
                           В 1950-е годы Химки стали одним из важнейших центров советской ракетно-космической отрасли. В городе располагались главные предприятия нескольких научно-производственных объединений оборонного назначения. В их числе КБ «Энергомаш», обеспечивавшее разработку ракетных двигателей межконтинентальных баллистических ракет и ракет-носителей космических аппаратов. МКБ «Факел» являлось головным предприятием по разработке зенитных ракет, включая ракеты для зенитных ракетных комплексов С-75 «Двина», 9К33 «Оса», С-125, С-200, С-300 и других. НПО им. Лавочкина занималось разработкой ракет класса «земля-воздух» и «воздух-воздух», крылатых ракет и широкого спектра космических аппаратов, в том числе лунохода. Кроме военно-космического направления в городе развивалось направление по разработке лесозаготовительной техники. Головным институтом считался ЦНИИМОД, затем ЦНИИМЭ (Московская 21).
                        </p>

                        <p>
                           В 1970-е годы в микрорайоне Левобережный, рядом с Московским государственным институтом культуры, было построено 9-этажное здание филиала Ленинской библиотеки (отделы газет, диссертаций и не пользующейся спросом литературы). В микрорайоне Новогорск находится головной ВУЗ МЧС — Академия гражданской защиты МЧС России.
                        </p>

                        <p>
                           В 1984 году постановлением Совета Министров РСФСР значительная часть территории Химкинского района была передана Москве, включая земли вокруг Куркино, Молжаниновки и Ново-Подрезково. В результате этого Химкинский район оказался разделённым на две части территорией Москвы.
                        </p>

                        <p>
                           Исчерпание свободных и удобных для нового строительства площадей в Москве и охвативший Москву транспортный коллапс привели на рубеже XX–XXI веков к выводу в ближнее Подмосковье, в том числе на территорию Химок, большого числа офисов, представительств и прочих объектов различных коммерческих компаний. С начала 2000-х годов Химки, как и другие пригороды Москвы, являются районом массовой жилой застройки. Побочным результатом этого стал транспортный коллапс на Ленинградском шоссе, связывающем Химки с Москвой.
                        </p>
                     </div>

                  </div>

                  <ImgContainerRow imgArr={[img7, img8, img9, img10]} />

                  <div className={` ${s.mainTextContainer}`}>
                     <div className={`mt38 ${s.subtitle}`}>2004</div>
                     <div className={`mt38 text`}>
                        <p>
                           В 2004 году происходило объединение населённых пунктов Химкинского района. Так 19 июля дачный посёлок Фирсановка и деревня Усково были присоединены к городу Сходня; а посёлок Новогорск, деревня Кирилловка, посёлок подсобного хозяйства «Сходня», деревня Филино — к рабочему посёлку Новоподрезково; деревни Яковлево, Трахонеево и Свистуха были включены в состав деревни Клязьма; деревня Терехово — в состав деревни Ивакино; дачный посёлок Старбеево и деревня Вашутино были включены в состав города Химки.
                        </p>

                        <p>
                           9 августа 2004 года рабочий посёлок Новоподрезково был присоединён к городу Сходня, а деревни Ивакино и Клязьма к городу Химки.
                        </p>

                        <p>
                           С 15 сентября 2004 года город Сходня вошёл в состав города Химки. В итоге после преобразования Химкинского района в городской округ Химки в 2005 году город Химки остался единственным населённым пунктом в составе этого муниципального образования.
                        </p>

                     </div>
                  </div>

                  <ImgContainerRow imgArr={[img7, img8, img9, img10]} />

                  <div className="mt120 mobileNoneContainer">
                     <VirtualMuseumLarge />
                  </div>
               </div>
               <div className="ml20 columnSmal mobileNoneContainer">
                  <FamilyYear />
                  <div className="mt40">
                     <SVO />
                  </div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default HistoryKhimki;
