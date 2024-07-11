import React from 'react';
import News from '../../Components/News';
import ContantContainerMain from '../../utils/ContantContainerMain';
import s from './NewsPage.module.css';

/* Новости */
import news from '../../backend/news/news';
import EventAnnouncements from '../../Components/EventAnnouncements';
import UsefulSourse from '../../Components/UsefulSourse';
import VkChannel from '../../BannersComopnents/VkChannel';
import TgChannel from '../../BannersComopnents/TgChannel';

const NewsPage = (props) => {

   const ternaryArrNews = [...news, ...news, ...news]

   const filterRelevance = [
      { id: '01', value: 'new', text: 'Самые новые' },
      { id: '02', value: 'currentMonth', text: 'В этом месяце' },
      { id: '03', value: 'monthAgo', text: 'Месяц назад' },
   ]
   const filterTheme = [
      { id: 1, value: 'all', text: 'Все новости' },
      { id: 2, value: 'all', text: 'Администрация' },
      { id: 3, value: 'all', text: 'Благоустройство' },
      { id: 4, value: 'all', text: 'ЖКХ' },
      { id: 5, value: 'all', text: 'Здравоохранение' },
      { id: 6, value: 'all', text: 'Культура' },
      { id: 7, value: 'all', text: 'Молодежь' },
      { id: 8, value: 'all', text: 'Образование' },
      { id: 9, value: 'all', text: 'Общество' },
      { id: 10, value: 'all', text: 'Спорт' },
      { id: 11, value: 'all', text: 'Строительство' },
      { id: 12, value: 'all', text: 'Транспорт' },
      { id: 13, value: 'all', text: 'Экология' },
      { id: 14, value: 'all', text: 'Мероприятия' },
   ]
   return (
      <div>
         <ContantContainerMain>
            <h1 className="mt80 pageTitle">Новости</h1>
            <div className="mt80 columnContainer">

               <div className="mr20 columnSmal">
                  <div className="filter">
                     <select className='filterSelect' name="filterRelevance" id="">
                        {filterRelevance.map(el => <option key={el.id} value={el.value}>{el.text}</option>)}
                     </select>
                     <select className='mt20 filterSelect' name="filterTheme" id="">
                        {filterTheme.map(el => <option key={el.id} value={el.value}>{el.text}</option>)}
                     </select>
                     <div className="mt20 filterThemeContainer"><input type="text" value={'24.06.2024 - 30.06.2024'} onChange={() => false} className="inputCalendar" /></div>
                     <div className="mt20 filterSearchContainer"><input type="text" placeholder='Ключевое слово' className="filterSearch" /></div>
                     <button className='mt20 filterBtnNewsArchive'>Архив новостей</button>
                     <div className="mt12 juridicalInfo">Свидетельство о регистрации СМИ от 22.04.2024 ЭЛ № ФС 77 - 87145</div>

                  </div>
                  <div className='mt40'>
                     <VkChannel />
                  </div>
                  <div className='mt40'>
                     <TgChannel />
                  </div>
               </div>
               <div className="columnLarge">
                  <News news={ternaryArrNews} />
               </div>

            </div>
            <EventAnnouncements />

            <UsefulSourse />

         </ContantContainerMain>
      </div>
   )
}
export default NewsPage;