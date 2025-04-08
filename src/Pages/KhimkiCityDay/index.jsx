import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './KhimkiCityDay.module.css';

import VkChannel from '../../BannersComopnents/VkChannel';
import TgChannel from '../../BannersComopnents/DevProgram';

import khimkiCityDay from '../../assets/img/events/khimki_city_day.png';
import khimkiCityDayMobil from '../../assets/img/events/khimki_city_day_mobil.png';

const KhimkiCityDay = (props) => {

   const isMobil = window.innerWidth > 500;

   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.news} className='breadcrumbsFrom'>Новости</NavLink>
               <span className='breadcrumbsTo'> / День города Химки - 85 лет</span>
            </div>
            <div className="mt40 columnContainer">
               <div className="columnLarge">
                  <div className={s.imgMainContainer}>
                     <img className={s.imgMain} src={isMobil ? khimkiCityDay : khimkiCityDayMobil} alt="" />
                  </div>
                  <div className={s.mainTextContainer}>
                     {/* Фильтры, на будущее */}
                     <div className={`mt40 ${s.filterText}`}>Мероприятия, 12 августа, 11:50</div>

                     <div className={`mt48 ${s.title}`}>Программа празднования мероприятий на август, посвященных Дню города</div>

                     <div className={`mt38 text`} >
                        <p>
                           В этом году Химки отмечают 85-летие. Для жителей и гостей округа подготовили масштабную развлекательную программу. В августе для химчан организовали выставки, фестиваль казачьей культуры, масштабные спортивные турниры. Присоединяйтесь к празднованию!
                        </p>

                        <div className={`mt48 ${s.lime} ${s.btn}`}>01 августа - 22 сентября</div>
                        <div className={`mt38 ${s.subtitle}`}>Программа празднования мероприятий на август, посвященных Дню города</div>
                        <div>Ленинский пр-т,  д.2Б ПКиО им. Л.Н.Толстого , МВК «Артишок»</div>

                        <div className={`mt38 ${s.cian} ${s.btn}`}>01 августа - 22 сентября</div>
                        <div className={`mt38 ${s.subtitle}`}>Выставка: «Типичные Химки. Семейные истории»</div>
                        <div>Ленинский пр-т,  д.2Б ПКиО им. Л.Н.Толстого , МВК «Артишок»</div>

                        <div className={`mt38 ${s.orange} ${s.btn}`}>17 августа 13:00</div>
                        <div className={`mt38 ${s.subtitle}`}>Фестиваль православной казачьей культуры «Медовый спас»</div>
                        <div>Поселок Лунево, стадион</div>

                        <div className={`mt38 ${s.red} ${s.btn}`}>18-19 августа 10:00</div>
                        <div className={`mt38 ${s.subtitle}`}>Футбольный турнир «Кубок Игоря Акинфеева»</div>
                        <div>ул. Машинцева, д.2, СК «Новые Химки»</div>

                        <div className={`mt38 ${s.green} ${s.btn}`}>21 августа 10:00</div>
                        <div className={`mt38 ${s.subtitle}`}>Футбольный турнир «Кубок Игоря Акинфеева»</div>
                        <div>ул. Чкалова, д.4А, СК «Родина»</div>

                        <div className={`mt38 ${s.blue} ${s.btn}`}>21 августа 16:00</div>
                        <div className={`mt38 ${s.subtitle}`}>Гала-матч звезд. Ветераны «ЦСКА - Спартак»</div>
                        <div>ул. Чкалова, д.4А, СК «Родина»</div>

                     </div>

                  </div>

               </div>
               <div className="ml20 columnSmal">
                  <VkChannel />
                  <div className="mt40">
                     <TgChannel />
                  </div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default KhimkiCityDay;