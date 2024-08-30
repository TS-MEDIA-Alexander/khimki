import React, { useEffect, useState } from 'react';
import News from '../../Components/News';
import ContantContainerMain from '../../total/ContantContainerMain';
import Calendar from '../../total/Calendar';
import ReactSelect from '../../total/ReactSelect';
import Modal from '../../total/modal';
/* import ScrollButton from '../../total/ScrollButton'; */

import s from './NewsPage.module.css';

import API from '../../API/index';

/* Новости */
import EventAnnouncements from '../../Components/EventAnnouncements';
import VkChannel from '../../BannersComopnents/VkChannel';
import TgChannel from '../../BannersComopnents/TgChannel';

/* Форматор - преобразует дату */
import { formatterCalendar } from '../../utils/index';

import close from '../../assets/icons/close.svg';

const NewsPage = (props) => {

   const [news, setNews] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [emailSubscribe, setEmailSubscribe] = useState('')

   useEffect(() => {
      API.getNews()
         .then(data => setNews(data))
   }, [])

   const shiwMore = () => {
      setCurrentPage(currentPage + 1)
      API.getNews(currentPage + 1)
         .then(data => setNews([...news, ...data]))
   }

   //ReactSelect
   //Вводные данные
   const filterRelevanceData = [
      { id: '01', value: 'new', text: 'Самые новые' },
      { id: '02', value: 'currentMonth', text: 'В этом месяце' },
      { id: '03', value: 'monthAgo', text: 'Месяц назад' },
   ]

   const [filterRelevance, setFilterRelevance] = useState(filterRelevanceData[0]);

   const filterThemeData = [
      { id: 1, value: 'all', text: 'Все новости' },
      { id: 2, value: 'Администрация', text: 'Администрация' },
      { id: 3, value: 'Благоустройство', text: 'Благоустройство' },
      { id: 4, value: 'ЖКХ', text: 'ЖКХ' },
      { id: 5, value: 'Здравоохранение', text: 'Здравоохранение' },
      { id: 6, value: 'Культура', text: 'Культура' },
      { id: 7, value: 'Молодежь', text: 'Молодежь' },
      { id: 8, value: 'Образование', text: 'Образование' },
      { id: 9, value: 'Общество', text: 'Общество' },
      { id: 10, value: 'Спорт', text: 'Спорт' },
      { id: 11, value: 'Строительство', text: 'Строительство' },
      { id: 12, value: 'Транспорт', text: 'Транспорт' },
      { id: 13, value: 'Экология', text: 'Экология' },
      { id: 14, value: 'Мероприятия', text: 'Мероприятия' },
   ]

   const [filterTheme, setFilterTheme] = useState(filterThemeData[0]);

   /* Календарь */
   const [calendarDateStart, setCalendarDateStart] = useState('24.06.2024')
   const handleDateStartChange = e => setCalendarDateStart(formatterCalendar.format(e));

   //Открытие PopUp окна на подписаться на рассылку
   const [modalActive, setModalActive] = useState();

   //Подписаться на рассылку
   const subscribe=()=>{
      API.postSubscribeNews({email: emailSubscribe})
      .then(response=>{
         setModalActive(false);
         setEmailSubscribe('')
      })
   }

   return (
      <div>
         <ContantContainerMain>
            <h1 className="mt80 pageTitle">Новости</h1>
            <div className="mt80 columnContainer">

               <div className="mr20 columnSmal">
                  <div className="filter">

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

                     <div className="mt20">
                        <ReactSelect
                           name='filterTheme'
                           valuesOptions={filterThemeData}//Сюда передать данные списка выбора
                           isMulti={false}//множественный выбор
                           placeholder={filterTheme.text}
                           initialValue={filterTheme}//Выбранное/ые данные по дефолту. Если isMulti true, то передавать массив!
                           onChangeValue={setFilterTheme}//функция, возвращающая выбранное значение
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
                     <button className='mt20 filterBtnNewsArchive'>Архив новостей</button>
                     <button onClick={() => setModalActive(true)} className='mt20 subscribe'>Подписаться на рассылку</button>
                     <div className="mt12 juridicalInfo">Свидетельство о регистрации СМИ от 22.04.2024 ЭЛ № ФС 77 - 87145</div>

                  </div>

                  <div className='mobileNoneContainer'>
                     <div className='mt40'>
                        <VkChannel />
                     </div>
                     <div className='mt40'>
                        <TgChannel />
                     </div>
                  </div>

               </div>
               <div className="columnLarge">
                  <News news={news} mobilFullPhoto={true} />
                  <div onClick={shiwMore} className={`btnW ${s.showMore}`}>Загрузить еще</div>
               </div>

            </div>

            {/* Анонсы мероприятий */}
            {/* <EventAnnouncements /> */}

         </ContantContainerMain>
         <Modal
            active={modalActive}
            setActive={setModalActive}
         >
            <div className={s.modalContainer}>
               <div className={s.uppContainerRow}>
                  <div className="pageSubtitle">Подписаться на рассылку</div>
                  <div onClick={() => setModalActive(false)} className={s.close}><img src={close} alt="" /></div>
               </div>
               <div className="mt32 juridicalInfo">Укажите вашу почту </div>
               <input value={emailSubscribe} onChange={(e) => { setEmailSubscribe(e.target.value) }} type="text" className={`mt8 ${s.subscribe}`} />
               <div className={s.flexContainerModal}>
                  <button onClick={subscribe} className={`mt24 btnY ${s.buttonSubscribe}`}>Подписаться</button>
               </div>
            </div>
         </Modal>
         {/* <ScrollButton/> */}
      </div>
   )
}
export default NewsPage;