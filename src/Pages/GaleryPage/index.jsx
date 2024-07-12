import React, { useState } from 'react';
import Galery from '../../Components/Galery';
import ContantContainerMain from '../../total/ContantContainerMain';
import Calendar from '../../total/Calendar';
import ReactSelect from '../../total/ReactSelect';
import s from './GaleryPage.module.css';

/* Новости */
import galery from '../../backend/galery/galery';
import EventAnnouncements from '../../Components/EventAnnouncements';
import UsefulSourse from '../../Components/UsefulSourse';
import FamilyYear from '../../BannersComopnents/FamilyYear';
import TgChannel from '../../BannersComopnents/TgChannel';

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


   return (
      <div>
         <ContantContainerMain>
            <h1 className="mt80 pageTitle">Галерея</h1>
            <div className="mt80 columnContainer">

               <div className="mr20 columnSmal">
                  <div className="filter">

                     <div className="filterBtnContainer">
                        <div className={`filterChoce ${filterImg && 'active'}`} onClick={onClickFilter}>Только фото</div>
                        <div className={`filterChoce ${filterVideo && 'active'}`} onClick={onClickFilter}>Только видео</div>
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
                        <input type="text" value={'24.06.2024 - 30.06.2024'} onChange={() => false} className="inputCalendar" />
                        <Calendar />
                     </div>

                     <div className="mt20 filterSearchContainer"><input type="text" placeholder='Ключевое слово' className="filterSearch" /></div>
                     <button className='mt20 filterBtnNewsArchive'>Архив новостей</button>
                     <div className="mt12 juridicalInfo">Свидетельство о регистрации СМИ от 22.04.2024 ЭЛ № ФС 77 - 87145</div>

                  </div>
                  <div className='mt40'>
                     <FamilyYear />
                  </div>
                  <div className='mt40'>
                     <TgChannel />
                  </div>
               </div>
               <div className="columnLarge">
                  <Galery galery={ternaryArrGalery} />
               </div>

            </div>
            <EventAnnouncements />

            <UsefulSourse />

         </ContantContainerMain>
      </div>
   )
}
export default GaleryPage;