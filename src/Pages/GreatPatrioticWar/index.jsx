import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './GreatPatrioticWar.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

/* Фотографии */
import mainImg from '../../assets/img/history/GreatPatrioticWar/main_img.png';
import img1 from '../../assets/img/history/monumentsHistoryArt/img1.png';

/* Компоненты */
import VirtualMuseumLarge from '../../BannersComopnents/VirtualMuseumLarge';

/* Баннеры */
import FamilyYear from '../../BannersComopnents/Year';
import SVO from '../../BannersComopnents/svo';



const GreatPatrioticWar = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.history.main} className='breadcrumbsFrom'>История</NavLink>
               <span className={'breadcrumbsTo'}> / Великая Отечественная война 1941-1945 гг.</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Великая Отечественная война 1941-1945 гг.</h1>
            <div className="mt80 columnContainer">
               <div className="columnLarge">

                  <img className={s.imgMain} src={mainImg} alt="" />
                  <div className={`mt80 ${s.mainTextContainer}`}>
                     <div className={`pageSubtitle ${s.subtitle}`}>Территория г.о. Химки, явилась поворотной точкой в наступлении фашистской Германии на г. Москву. </div>
                     <div className={`mt38 text`}>
                        <p>
                           22 июня 1941 года мирную жизнь химчан и всего советского народа
                           нарушило вероломное нападение гитлеровской Германии на Советский Союз.
                           Уверенные в своей победе фашисты рвались к Москве.
                        </p>
                        <p>
                           В результате
                           стремительного движения гитлеровской армии уже к осени 1941 года в окрестностях
                           Москвы и Химок велись ожесточенные сражения. Но в сражениях на подступах к
                           столице был развеян миф о непобедимости Третьего Рейха… Именно на Химкинской
                           земле установлен памятник, ставший символом битвы за Москву. Сегодня мы узнаем
                           о том, как жил город в годы Великой Отечественной войны, где проходила линия
                           фронта, вспомним имена химчан-героев.Жителями Химок было построено 9 км противотанковых рвов, 19 км проволочных заграждений, множество огневых точек и бомбоубежищ. На предприятиях района было изготовлено 1200 противотанковых ежей, которые установили на оборонительном рубеже.
                        </p>
                        <p>
                           В конце ноября фашисты заняли часть территории Химкинского района.
                           Оборонительные бои здесь вели войска 16-ой армии под командованием Константина
                           Константиновича Рокоссовского и 20-ой армии под командованием Александра Ильича
                           Лизюкова, ее штаб располагался в Химках. Линия обороны 16-ой армии проходила по
                           реке Клязьма, Ленинградскому шоссе, станции Крюково и в Истринско – Дедовском
                           направлении. 20-ая армия держала борону от реки Клязьма и Рогачевского шоссе.
                           Город Химки стал прифронтовым. Слышалась орудийная и пулеметная стрельба.
                           Тревожно было на сердце…Любой ценой отстоять столицу, не сдаваться, защищать
                           свою Родину!
                        </p>
                        <p>
                           В боях за деревню Крюково (ныне станция Крюково -  Зеленоград) проявили
                           небывалую стойкость воины 316 стрелковой дивизии генерала Ивана Васильевича
                           Панфилова и кавалеристы генерал-майора Льва Михайловича Доватора.
                        </p>
                     </div>

                     <img className={`mt80 ${s.imgMain}`} src={img1} alt="" />
                     <div className={`mt38 ${s.description}`}>Штаб 7-й гвардейской стрелковой диви­зии находился в это время в п. Сходня на углу Первомайской и Папанинской улиц, д. 23. Дом сохранился. На нём мемориальная доска, а недалеко от дома бывшая Речная улица названа сейчас в честь 7-й гвардей­ской стрелковой дивизии.</div>

                     <div className={`mt80 text`}>
                        <p>
                           Красная Армия отступала, но за каждый оставленный километр русской
                           земли враг платил большую цену. В руках гитлеровцев оказались 13 населенных
                           пунктов Химкинского района (ныне это территория Солнечногорского района и
                           Зеленограда). В начале декабря разгорелись упорные бои за железнодорожную станцию
                           Крюково. Враг подошел к Сходне, Красной Поляне, верховьям реки Клязьмы. А скоро
                           наша армия перешла в контрнаступление и территорию Химкинского района
                           освободили. Всего на территории Химкинского района немецкие оккупанты полностью или
                           частично разрушили почти 900 (девятьсот) домов, более 300 (трехсот) общественных
                           построек и более 100 (ста) государственных построек.
                        </p>
                        <p>
                           С начала военных действий вся промышленность Химок была переведена на
                           выпуск военной продукции и необходимых для фронта товаров. На предприятиях
                           «Спартак», «Стройдеталь», мебельном комбинате, стекольной фабрике выпускались
                           боеприпасы, сигнальные ракеты, лыжи, ручные гранаты, вооружение и обмундирование для армии. Из воспоминаний сотрудника НПО имени Лавочкина, ветерана войны Георгия
                           Михайловича Седова:«В июне 1941 года после начала войны нас перевели на 12-часовой рабочий день. Уже в июле 1941-го молодых рабочих стали направлять на
                           строительство противотанковых сооружений под Москвой, при этом мы не
                           освобождались от основной работы. Мы строили самолеты, а в свободные дни и часы
                           после работы копали оборонительные сооружения. Нашей бригаде был отведен самый
                           ответственный участок между Октябрьской железной дорогой и Ленинградским шоссе
                           в районе Подрезково и ныне существующего завода древесностружечных плит и
                           деталей, и мы копали противотанковые рвы до деревни Кирилловка. Копали их до
                           двух метров в глубину…»
                        </p>
                        <p>
                           Труд в тылу оказался для химчан особо опасным, поскольку боевые
                           действия проходили в непосредственной близости к населенному пункту. Над
                           городом постоянно летали немецкие самолеты, а в самом городе часто ловили
                           немецких шпионов. После разгрома фашистов под Москвой, на территории нашего района стали восстанавливать производство боеприпасов, вооружения и всего необходимого фронту. Свой вклад внесли и труженики села: на фронт отправляли овощи, теплую одежду для солдат, корм и сено для лошадей. Бригады школьников помогали в работе тыла. Наравне с мужчинами трудились и женщины, и старики, и дети. За самоотверженную работу в тылу многие жители нашего района награждены орденами и медалями.
                        </p>
                     </div>
                  </div>

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
export default GreatPatrioticWar;
