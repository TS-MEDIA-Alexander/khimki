import React, { useEffect, useState } from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Main.module.css';

import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

import API from '../../API';

/* Компоненты */
/* import slider1 from '../../assets/img/sliders/main/1.png'; */
import hotline from '../../assets/img/sliders/main/hotline.png';
import head_urban_district_khimki from '../../assets/img/sliders/main/head_urban_district_khimki.png';
import road_repairs_2024 from '../../assets/img/sliders/main/road_repairs_2024.png';
import military_service_under_contract from '../../assets/img/sliders/main/military-service-under-contract.png';
import virtual_museum from '../../assets/img/sliders/main/virtual-museum.png';
import evaluation_local_government_activities from '../../assets/img/sliders/main/evaluation-of-local-government-activities.png';
import investment_portal_moscow_region from '../../assets/img/sliders/main/investment-portal-of-moscow-region.png';
import committee_competition_policy_moscow_region from '../../assets/img/sliders/main/committee-on-competition-policy-of-the-moscow-region.png';
import mosobleirc from '../../assets/img/sliders/main/mosobleirc.png';
import dobrodel_solving_problems_together from '../../assets/img/sliders/main/dobrodel-solving-problems-together.png';
import remove_construction_waste_correctly from '../../assets/img/sliders/main/remove-construction-waste-correctly.png';
import rescue_service from '../../assets/img/sliders/main/rescue-service.png';
import ministry_internal_affairs_russia from '../../assets/img/sliders/main/ministry-of-internal-affairs-of-russia.png';
import khimki_tv from '../../assets/img/sliders/main/khimki-tv.png';

import Carousel from '../../Components/Carousel';
import BannerArrow from '../../Components/BannerArrow';
import News from '../../Components/News';
import Slide from '../../Components/Slide';

/* Баннеры */
import CityDay from '../../BannersComopnents/CityDay';
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

/* Стили баннера */
import VirtualMuseum from '../../BannersComopnents/VirtualMuseum';
import EventAnnouncements from '../../Components/EventAnnouncements';

const Main = (props) => {

   /* Запрашиваем новости */
   const [news, setNews] = useState([]);

   useEffect(() => {
      API.getNews(1, 9)
         .then(data => setNews(data))
   }, [])

   return (
      <div>
         <ContantContainerMain>
            <Carousel
               btnArrText={
                  [
                     'Горячая линия',
                     'Глава г.о. Химки',
                     'Ремонт дорог в 2024 г.',
                     'Военная служба по контракту',
                     'Виртуальный музей',
                     'Оценка деятельности местной власти',
                     'Инвестиционный портал Подмосковья',
                     'Конкурентная политика',
                     'МосОблЕИРЦ',
                     'dobrodel.mosreg.ru',
                     'Cтройотходы.рф',
                     'Служба спасения',
                     'МВД России',
                     'Химки ТВ'
                  ]
               }>
               <Slide img={hotline} title={['Круглосуточная горячая', 'линия Администрации']} description={''} src={'https://www.admhimki.ru/kontakty/'} btnText={'Подробнее'} />
               <Slide img={head_urban_district_khimki} title={['Глава городского округа', 'Дмитрий Владимирович Волошин']} description={'Социальные сети'} btnText={'Telegram'} />
               <Slide img={road_repairs_2024} title={['Программа ремонта', 'муниципальных и региональных', 'дорог на 2024 год']} description={'Ремонт дорог в 2024 г.'} btnText={'Подробнее'} src={'https://www.admhimki.ru/blagoustrojstvo/remont-dorog/'} />
               <Slide img={military_service_under_contract} title={['Военная служба', 'по контракту']} description={''} btnText={'Подробнее'} src={'https://xn--80atbicfemrd.xn--p1ai/'} />
               <Slide img={virtual_museum} title={['Виртуальный музей', 'городского округа Химки', '1941-1945']} description={''} btnText={'Подробнее'} src={'https://himkipobeda.ru/'} />
               <Slide img={evaluation_local_government_activities} title={['Оценка деятельности', 'местной власти']} description={''} btnText={'Подробнее'} src={'https://panel.simpleforms.ru/yuweSgMuCEGXdQJVlj6r4w#/Panel/815a15f0-947c-483d-bcbf-763d56415674/TextBlockField'} />
               <Slide img={investment_portal_moscow_region} title={['Инвестиционный портал', 'подмосковья']} description={''} btnText={'Подробнее'} src={'https://invest.mosreg.ru/'} />
               <Slide img={committee_competition_policy_moscow_region} title={['Комитет по конкурентной', 'политике Московской области']} description={''} btnText={'Подробнее'} src={'https://zakaz-mo.mosreg.ru/'} />
               <Slide img={mosobleirc} title={['Мобильное приложение', '«МосОблЕИРЦ»']} description={'Вся информация по вашей квитанции в личном кабинете'} btnText={'Подробнее'} src={'https://мособлеирц.рф/preimushchestva-lichnogo-kabineta/'} />
               <Slide img={dobrodel_solving_problems_together} title={['Добродел: решаем', 'проблемы вместе']} description={''} btnText={'Подробнее'} src={'https://dobrodel.mosreg.ru/'} />
               <Slide img={remove_construction_waste_correctly} title={['Вывозите стройотходы', 'правильно']} description={'Пункты приёма / заказ индивидуального вывоза'} btnText={'Подробнее'} src={'https://stroyothody.mosreg.ru/'} />
               <Slide img={rescue_service} title={['Служба спасения', 'Московской области']} description={'Полиция. МЧС. Скорая помощь'} btnText={'Подробнее'} src={'https://112mo.ru/'} />
               <Slide img={ministry_internal_affairs_russia} title={['ГУ МВД России по', 'Московской области']} description={'УМВД России по городскому округу Химки'} btnText={'Подробнее'} src={'https://50.xn--b1aew.xn--p1ai/'} />
               <Slide img={khimki_tv} title={['Городской телеканал', 'Химки ТВ']} description={''} btnText={'Смотреть'} src={'https://www.himkismi.ru/'} />
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
                  <CityDay />
                  <div className="mt32">
                     <GovernmentServices />
                  </div>

               </div>

            </div>

            <section className={s.lastNewsContainer}>
               <div className="mt80 subTitle">Последние новости</div>
               <div className="mt40 columnContainer">
                  <div className="columnLarge">
                     <div className="bannerArrowContainer">
                        <News btnText={'Все новости'} rowLength={3} news={news} />
                     </div>
                     <NavLink to={ROUTER.news} className={`btnW ${s.showMore}`}>Загрузить еще</NavLink>
                  </div>
                  <div className="ml20 columnSmal">
                     <FamilyYear />
                     <div className="mt20">
                        <SVO />
                     </div>
                  </div>
               </div>
            </section>

            <section className={s.programAdministratorContainer}>
               <div className="mt80 subTitle">Программы администрации</div>
               <div className="mt40 columnContainer">
                  <div className="columnLarge">
                     <div className="bannerArrowContainer">
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

            {/* Анонсы мероприятий */}
            {/* <EventAnnouncements /> */}



         </ContantContainerMain>

      </div>
   )
}
export default Main;