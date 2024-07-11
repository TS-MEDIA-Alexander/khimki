import React from 'react';
import ContantContainerMain from '../../utils/ContantContainerMain';
import s from './Main.module.css';

/* Компоненты */
import slider1 from '../../assets/img/sliders/main/1.png'
import Carousel from '../../Components/Carousel';
import BannerArrow from '../../Components/BannerArrow';
import News from '../../Components/News';
import UsefulSourse from '../../Components/UsefulSourse';
import Slide from '../../Components/Slide';

/* Баннеры */
import VirtualReception from '../../BannersComopnents/VirtualReception';
import GovernmentServices from '../../BannersComopnents/GovernmentServices';
import GovernmentServicesLarge from '../../BannersComopnents/GovernmentServicesLarge';
import MunicipalPrograms from '../../BannersComopnents/MunicipalPrograms';
import FamilyYear from '../../BannersComopnents/FamilyYear';
import SVO from '../../BannersComopnents/svo';
import KhimkiDistrict from '../../BannersComopnents/KhimkiDistrict';
import ChannelTG from '../../BannersComopnents/ChannelTG';
import Statistics from '../../BannersComopnents/Statistics';

/* banner img */
import governor from "../../assets/portrains/governor_moscow_region.png";
import btnArr from '../../assets/icons/government_link_button.svg';

import program1 from '../../assets/img/banners/Programm1.png';
import program2 from '../../assets/img/banners/Programm2.png';
import program3 from '../../assets/img/banners/Programm3.png';


/* Новости */
import news from '../../backend/news/news';

/* Стили баннера */
import VirtualMuseum from '../../BannersComopnents/VirtualMuseum';
import EventAnnouncements from '../../Components/EventAnnouncements';

const Main = (props) => {

   return (
      <div>
         <ContantContainerMain>
            <Carousel
               btnArrText={
                  ['Круглосуточная горячая линия', 'Горячая линия строительного комплеса', 'Сведения о земельном участке', 'Оценка деятельности местной власти']
               }>
               <Slide img={slider1} text={['Круглосуточная', 'горячая линия', 'главы городского округа']} />
               <Slide img={slider1} text={['Горячая', 'линия строительного комплеса']} />
               <Slide img={slider1} text={['Сведения', 'о земельном участке']} />
               <Slide img={slider1} text={['Оценка деятельности', 'местной власти']} />
            </Carousel>


            <div className="mt32 columnContainer">

               <div className="columnLarge">
                  <div className="cardContainer borderMain">
                     <div className={s.textBlock}>
                        <div className={s.title}>Губернатор московской области</div>
                        <div className={s.subtitle}>Андрей Юрьевич Воробьев</div>
                        <div className={s.textBody}>«Важно, что многие включились в процесс активных преобразований. Я уверен, что каждый год число тех, кто разделяет наши ценности, будет расти. Подмосковье - это наш дом, поэтому никто, кроме нас самих, не сможет сделать его лучше и краше. Уверен, мы всё делаем правильно».</div>
                        <button className={`btnY ${s.buttonGovernment}`}>Правительство Московской области <img src={btnArr} alt="" /></button>
                     </div>
                     <div className={s.imgPortrainContainer}><img src={governor} alt="" /></div>
                  </div>

                  <div className="mt32">
                     <GovernmentServicesLarge />
                  </div>

               </div>

               <div className="ml20 columnSmal">
                  <VirtualReception />
                  <div className="mt32">
                     <GovernmentServices />
                  </div>

               </div>

            </div>

            <section className={s.programAdministratorContainer}>
               <div className="mt80 subTitle">Программы администрации</div>
               <div className="mt40 columnContainer">
                  <div className="columnLarge">
                     <div className={s.bannerArrowContainer}>
                        <BannerArrow imgBanner={program1} />
                        <BannerArrow imgBanner={program2} />
                        <BannerArrow imgBanner={program3} />
                     </div>
                  </div>
                  <div className="ml20 columnSmal">
                     <MunicipalPrograms />
                  </div>
               </div>
            </section>

            <section className={s.lastNewsContainer}>
               <div className="mt80 subTitle">Последние новости</div>
               <div className="mt40 columnContainer">
                  <div className="columnLarge">
                     <div className={s.bannerArrowContainer}>
                        <News news={news} />
                     </div>
                  </div>
                  <div className="ml20 columnSmal">
                     <FamilyYear />
                     <div className="mt20">
                        <SVO />
                     </div>
                  </div>
               </div>
            </section>

            <section className='mt80'>
               <div className="columnContainer">
                  <div className="columnLarge">
                     <KhimkiDistrict />
                  </div>
                  <div className="ml20 columnSmal">
                     <Statistics />
                  </div>
               </div>
               <div className={`mt80 rowBlock`}>
                  <VirtualMuseum />
                  <ChannelTG />
               </div>
            </section>

            <EventAnnouncements/>

            <UsefulSourse />

         </ContantContainerMain>

      </div>
   )
}
export default Main;