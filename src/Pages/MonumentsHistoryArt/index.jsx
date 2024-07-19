import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MonumentsHistoryArt.module.css';

/* Фотографии */
import mainImg from '../../assets/img/history/monumentsHistoryArt/main_img.png';
import img1 from '../../assets/img/history/monumentsHistoryArt/img1.png';
import img2 from '../../assets/img/history/monumentsHistoryArt/img2.png';
import img3 from '../../assets/img/history/monumentsHistoryArt/img3.png';
import img4 from '../../assets/img/history/monumentsHistoryArt/img4.png';
import img5 from '../../assets/img/history/monumentsHistoryArt/img5.png';

/* Компоненты */
import VirtualMuseumLarge from '../../BannersComopnents/VirtualMuseumLarge';

/* Баннеры */
import FamilyYear from '../../BannersComopnents/FamilyYear';
import SVO from '../../BannersComopnents/svo';



const MonumentsHistoryArt = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 ${s.breadcrumbs}`}>
               <span className={s.breadcrumbsFrom}>Новости</span>
               <span className={s.breadcrumbsTo}> / Памятники истории и культуры</span>
            </div>
            <div className={`mt24 ${s.title}`}>Памятники истории и культуры</div>
            <div className="mt80 columnContainer">
               <div className="columnLarge">

                  <img className={s.imgMain} src={mainImg} alt="" />
                  <div className={`mt80 ${s.mainTextContainer}`}>
                     <div className={s.subtitle}>«Подвиг милосердие»</div>
                     <div className={`mt38 ${s.textBody}`}>
                        <p>
                           Памятник медицинским сестрам. Памятник открыт 8 мая 2005 года в сквере им. Марии Рубцовой.
                        </p>
                        <p>
                           Автор скульптурной композиции — Евдокимов В.А., архитектор — Михайлов В.Н., художник — Мустафин А. С. Выполнен в литье из бронзы и установлен на постамент из красного гранита. Высота 5,5 метров. Моделью при создании образа медсестры стала химчанка Мария Петровна Семикова, прошедшая войну от первого до последнего дня и встретившая день Победы в Берлине. Ее образ запечатленный на фронтовой фотографи стал символом молодых химчанок пришедших в военные госпиталя и спасших тысячи жизней.
                        </p>
                        <a href="" className={`mt38 btnWBanner ${s.btn}`}>Место на карте </a>
                     </div>

                     <img className={`mt80 ${s.imgMain}`} src={img1} alt="" />

                     <div className={`mt38 ${s.subtitle}`}>Памятник химчанам, отдавшим жизнь за родину в 1941-1945 годах.</div>
                     <div className={`mt38 ${s.textBody}`}>
                        <p>
                           Мемориал, расположенный в центре города Химки. Скульптурная композиция называется «Подарившие жизнь». Авторы: скульптор Бурганов И. А. и художник Менчиц Ю. В. Торжественное открытие памятника состоялось 7 мая 2015 года. На мемориале выбиты имена более 2500 Химчан, отдавших жизнь за Родину в боях 1941–1945 годов. Композиция памятника представляет собой две плиты в форме прорезанной звезды. Звезда — как прорыв доблести героев, павших в боях Великой Отечественной войны, с изображениями георгиевской ленты, рук, символизирующих дар воинов нам живым, птицу. По бокам мемориала располагаются 12 стел из гранита с именами. В гранитном основании мемориала заложена книга памяти с именами химчан, пропавших без вести.
                        </p>
                     </div>
                     <a href="" className={`mt38 btnWBanner ${s.btn}`}>Место на карте </a>
                     <div className={`mt80 ${s.imgContainer}`}>
                        <img className={s.imgMain} src={img2} alt="" />
                        <img className={s.imgMain} src={img3} alt="" />
                     </div>
                     <div className={`mt80 ${s.subtitle}`}>Монумент «Отстоявшим отчизну»</div>
                     <div className={`mt38 ${s.textBody}`}>
                        <p>
                           Как и вся страна Химки чтут подвиг советского солдата. «Отстоявшим Отчизну» — главный мемориал города, увековечивающий память не вернувшихся с полей сражений бойцов. Он расположен в Старых Химках на улице Победы. Обелиск установили в 1965 году в честь 20 — той годовщины Великой Победы. Памятник — результат труда коллектива НПО «Энергомаш». Стела сделана из космического титана. В 2009 году памятник был обновлён.
                        </p>
                        <a href="" className={`mt38 btnWBanner ${s.btn}`}>Место на карте </a>
                     </div>
                  </div>

                  <img className={`mt80 ${s.imgMain}`} src={img4} alt="" />

                  <div className={` ${s.mainTextContainer}`}>
                     <div className={`mt38 ${s.subtitle}`}>Памятник «ЛА-7»</div>
                     <div className={`mt38 ${s.textBody}`}>
                        <p>
                           Самолет Ла-7 — памятник отважным летчикам и труженикам тыла, которые работали для Победы. Установлен и освящен 7 мая 2007 года на пересечении улиц Лавочкина и 9 мая при входе в парк «Дубки». В 2008 году первый макет самолета заменили на новый.
                        </p>

                        <p>
                           С инициативой установить памятник одному из лучших советских самолетов времен Великой Отечественной выступили ветераны НПО имени Лавочкина, где и производилась легендарная машина. Было создано три проекта, выбрали наиболее динамичный: самолет взмывает в небо под прямым углом. Точную копию легендарной машины изготовили на заводе имени Лавочкина по старым чертежам.
                        </p>
                        <a href="" className={`mt38 btnWBanner ${s.btn}`}>Место на карте </a>
                     </div>
                  </div>

                  <img className={`mt80 ${s.imgMain}`} src={img5} alt="" />

                  <div className={` ${s.mainTextContainer}`}>
                     <div className={`mt38 ${s.subtitle}`}>Мемориальный воинский комплекс «Доблесть и слава подразделений специального назначения россии»</div>
                     <div className={`mt38 ${s.textBody}`}>
                        <p>
                           Он установлен в сквере им. Марии Рубцовой 8 сентября 2007 года.В камне увековеченны наименования всех частей и подразделений, участвовавших в выполнении интернационального долга. Памятник представляет собой гранитную колонну, увенчанную расправившим крылья орлом, в клюве которого — автомат, символ спецназа. На колоне 2060 фамилий павших воинов-спецназовцев. У подножия памятника лежит неувядающая каменная роза. Последняя фамилия была выгравированна 15 февраля 2013 года — Илья Владимирович Шаинский, старший лейтенант «Вымпела», погибший на Северном Кавказе в ходе боевого столкновения с боевиками.
                        </p>
                        <a href="" className={`mt38 btnWBanner ${s.btn}`}>Место на карте </a>
                     </div>
                     
                  </div>

                  
                  <div className="mt120">
                     <VirtualMuseumLarge />
                  </div>
               </div>
               <div className="ml20 columnSmal">
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
export default MonumentsHistoryArt;