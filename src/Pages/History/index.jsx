import React from 'react';
import {ROUTER} from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './History.module.css';

/* Бапннеры */
import VirtualMuseum from '../../BannersComopnents/VirtualMuseum';
import AdministrationPerformance from '../../BannersComopnents/AdministrationPerformance';
import HistoryCard from '../../Components/HistoryCard';

/* Картинки достопримечательностей */
import cityCoatArms from '../../assets/img/history/label/CityCoatArms.png';
import gorodPobratym from '../../assets/img/history/label/gorodPobratym.png';
import history from '../../assets/img/history/label/history.png';
import monuments from '../../assets/img/history/label/monuments.png';
import greatPatrioticWar from '../../assets/img/history/label/great_patriotic_war.png';


const History = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <h1 className="mt80 pageTitle">История</h1>
            <div className={`mt80 ${s.histotyContainer}`}>
               <div className={s.column}>
                  <HistoryCard src={ROUTER.history.khimki} img={history} title={'История города Химки '} textBody={'Название город получил от реки Химка, на которой было основанно предшествовавшее городу поселение. Окончательное происхождение и значение названия реки пока не выясненно. В древности употреблялась форма Хинска, Хынска'} />
                  <HistoryCard src={ROUTER.history.pamyatnikiIstoriiKultury} img={monuments} title={'Памятники истории и культуры '} textBody={'Памятник медицинским сестрам. Памятник открыт 8 мая 2005 года в сквере им. Марии Рубцовой.'} />
                  <HistoryCard src={ROUTER.history.gorodPobratim} img={gorodPobratym} title={'Город-побратим'} textBody={'Город в Белоруссии, административный центр Гродненской области.'} />
               </div>

               <div className={s.column}>
                  <HistoryCard src={ROUTER.history.greatPatrioticWar} img={greatPatrioticWar} title={'Великая Отечественная война 1941-1945 гг.'} textBody={'Территория г.о. Химки, явилась поворотной точкой в наступлении фашистской Германии на г. Москву. '} />
                  <HistoryCard src={ROUTER.history.cityCoatOfArms} img={cityCoatArms} title={'Герб города '} textBody={'В чёрном поле золотой скачущий крылатый Кентавр, держащий в распростёртых руках лук и стрелу и сопровождаемый в круг — во главе, в окончании, по сторонам и в каждом из углов, кроме правого верхнего, золотыми звёздами о четырёх, простёртых накрест.'} />
                  
               </div>
            </div>
            <div className={`mt80 rowBlock ${s.mobilContainer}`}>
               <VirtualMuseum />
               <AdministrationPerformance />
            </div>

         </ContantContainerMain>

      </div>
   )
}
export default History;