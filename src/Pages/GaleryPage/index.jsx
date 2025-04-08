import React, { useState } from 'react';
import Galery from '../../Components/Galery';
import ContantContainerMain from '../../total/ContantContainerMain';
import Calendar from '../../total/Calendar';
import ReactSelect from '../../total/ReactSelect';
/* import ScrollButton from '../../total/ScrollButton'; */
import s from './GaleryPage.module.css';

/* Галерея */
import galery from '../../backend/galery/galery';
import EventAnnouncements from '../../Components/EventAnnouncements';

/* Баннеры */
import FamilyYear from '../../BannersComopnents/FamilyYear';
import TgChannel from '../../BannersComopnents/TgChannel';

/* Форматор - преобразует дату */
import { formatterCalendar } from '../../utils/index';

const GaleryPage = (props) => {

   //ReactSelect
   //Вводные данные
   const filterRelevanceData = [
      { id: '01', value: 'new', text: 'Самые новые' },
      { id: '02', value: 'currentMonth', text: 'В этом месяце' },
      { id: '03', value: 'monthAgo', text: 'Месяц назад' },
   ]

   const [filterRelevance, setFilterRelevance] = useState(filterRelevanceData[0]);
   const [filterImg, setFilterImg] = useState(true);
   const [filterVideo, setFilterVideo] = useState(false);

   const ternaryArrGalery = [...galery, ...galery]

   const onClickFilter = () => {
      setFilterImg(!filterImg)
      setFilterVideo(!filterVideo)
   }

   const [calendarDateStart, setCalendarDateStart] = useState('24.06.2024')
   const handleDateStartChange = e => setCalendarDateStart(formatterCalendar.format(e));


   return (
      <div>
         <ContantContainerMain>
            <h1 className="mt80 pageTitle">Галерея</h1>
            <div className="mt80 columnContainer">

               <div className="mr20 columnSmal">
                  <div className="filter">

                     <div className="filterBtnContainer">
                        <div className={`filterChoce ${filterImg && 'bgMain'}`} onClick={onClickFilter}>Только фото</div>
                        <div className={`filterChoce ${filterVideo && 'bgMain'}`} onClick={onClickFilter}>Только видео</div>
                     </div>

                     <div className='mt20'>
                        <ReactSelect
                           name='filterRelevance'
                           valuesOptions={filterRelevanceData}//Сюда передать данные списка выбора
                           isMulti={false}//множественный выбор
                           placeholder={filterRelevance.text}
                           initialValue={filterRelevance}//Выбранное/ые данные по дефолту. Если isMulti true, то передавать массив!
                           onChangeValue={setFilterRelevance}//функция, возвращающая выбранное значение
                           labelName={'text'}//Какие данные отображать в label (видимые пользователем)
                           valueName={'value'}//Какие данные отображать в value (видимые только нам)
                           isSearchable={false}//Тут можно отключить поиск
                        />
                     </div>

                     <div className="mt20 filterThemeContainer">
                        <input type="text" value={calendarDateStart} onChange={() => false} className="inputCalendar" />
                        <Calendar onChange={handleDateStartChange} />
                     </div>

                     <div className="mt20 filterSearchContainer"><input type="text" placeholder='Ключевое слово' className="filterSearch" /></div>

                  </div>
                  <div className='mt40'>
                     <FamilyYear />
                  </div>
                  <div className='mt40'>
                     <TgChannel />
                  </div>
               </div>
               <div className="columnLarge">
                  <Galery rowLength={3} galery={ternaryArrGalery} />
               </div>

            </div>
            <EventAnnouncements />

         </ContantContainerMain>
         {/* <ScrollButton /> */}
      </div>
   )
}
export default GaleryPage;