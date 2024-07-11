import React from 'react';
import ContantContainerMain from '../../utils/ContantContainerMain';
import s from './Main.module.css';

/* Компоненты */
import slider1 from '../../assets/img/sliders/main/1.png'
import Carousel from '../../Components/Carousel';
import BannerArrow from '../../Components/BannerArrow';
import News from '../../Components/News';
import Event from '../../Components/Event';
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
import banner from '../../assets/img/banners/government_services.png';

import voting_government from '../../assets/img/banners/voting_government.png';
import municipal_programs from '../../assets/img/banners/municipal_programs.png';
import program1 from '../../assets/img/banners/Programm1.png';
import program2 from '../../assets/img/banners/Programm2.png';
import program3 from '../../assets/img/banners/Programm3.png';
import family_year from '../../assets/img/banners/family_year.png';
import svo from '../../assets/img/banners/svo.png';
import khimki_urban_district from '../../assets/img/banners/khimki_urban_district.png';
import number_of_inhabitants from '../../assets/img/banners/number_of_inhabitants.png';
import museum from '../../assets/img/banners/museum.png';
import channel from '../../assets/img/banners/channel.png';

/* Новости */
import news from '../../backend/news/news';
/* События */
import events from '../../backend/events/events';
/* Стили баннера */
import styleBanner from '../../assets/styleBanner'
import VirtualMuseum from '../../BannersComopnents/VirtualMuseum';

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

               <div className="columnSmal">
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
                  <div className="columnSmal">
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
                  <div className="columnSmal">
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
                  <div className="columnSmal">
                     <Statistics />
                  </div>
               </div>
               <div className={`mt80 rowBlock`}>
                  <VirtualMuseum />
                  <ChannelTG />
               </div>
            </section>

            <section className='mt80'>
               <div className="subTitle">Анонсы мероприятий</div>
               <div className={`mt40 ${s.eventsContainer}`}>
                  {events.map(el => <Event key={el.id} img={el.imgPreview} title={el.title} />)}
               </div>
            </section>

            <UsefulSourse />

         </ContantContainerMain>

      </div>
   )
}
export default Main;