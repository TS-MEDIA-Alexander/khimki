import React, { useState } from 'react';
import Video from '../../Components/Video';
import ContantContainerMain from '../../total/ContantContainerMain';
/* import ScrollButton from '../../total/ScrollButton'; */
import s from './VideoPage.module.css';

/* Галерея */
import galery from '../../backend/galery/galery';
import EventAnnouncements from '../../Components/EventAnnouncements';

/* Баннеры */
import KhimkiTV from '../../BannersComopnents/KhimkiTV';

const VideoPage = (props) => {

   //Вводные данные
   const filterRelevanceData = [
      { id: '01', value: 'All', text: 'Все видео' },
      { id: '02', value: '2', text: 'Новые детские сады и школы' },
      { id: '03', value: '3', text: 'На все случаи жизни' },
      { id: '04', value: '3', text: 'Взаимодействие с населением' },
      { id: '05', value: '3', text: 'Публичные слушания' },
      { id: '06', value: '3', text: 'Социальные ролики' },
      { id: '07', value: '3', text: 'Стратегия Губернатора' },
      { id: '08', value: '3', text: 'Гражданская оборона' },
      { id: '09', value: '3', text: 'День войск национальной гвардии' },
      { id: '10', value: '3', text: 'Выборы Президента РФ 2024 ' },
      { id: '11', value: '3', text: 'УФНС России по Московской области' },
      { id: '12', value: '3', text: 'День памяти о россиянах, исполнивших воинский долг' },
      { id: '13', value: '3', text: 'Профилактика распространения covid-19' },
   ]

   const [active, setActive] = useState(filterRelevanceData[0].id);

   const isActive = (id) => {
      return id === active ? s.active : ''
   }

   return (
      <div>
         <ContantContainerMain>
            <h1 className="mt80 pageTitle">Видео</h1>
            <div className="mt80 columnContainer">

               <div className="mr20 columnSmal">
                  <div className="filter">
                     <div className={s.filterTagNameContainer}>
                        {filterRelevanceData.map(el => <div
                           key={el.id}
                           className={`${s.filterTagName} ${isActive(el.id)}`}
                           onClick={() => setActive(el.id)}
                        >{el.text}</div>)}
                     </div>
                  </div>

               </div>
               <div className="columnLarge">
                  <Video rowLength={3} video={galery} />
                  <div className={'mt32'}>
                     <KhimkiTV />
                  </div>
                  <div className="mt32">
                     <Video rowLength={3} video={galery} />
                  </div>
                  <div className={`btnW ${s.showMore}`}>Загрузить еще</div>
               </div>

            </div>
            <EventAnnouncements />

         </ContantContainerMain>
         {/* <ScrollButton /> */}
      </div>
   )
}
export default VideoPage;