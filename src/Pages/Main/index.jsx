import React, { useEffect, useState } from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Main.module.css';

import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

import API from '../../API';

/* Компоненты */
/* import slider1 from '../../assets/img/sliders/main/1.png'; */
import hotline from '../../assets/img/sliders/main/hotline.png';
import hotline_mobil from '../../assets/img/sliders/main/hotline_mobil_main.png';
import head_urban_district_khimki from '../../assets/img/sliders/main/head_urban_district_khimki.png';
import head_urban_district_khimki_mobil from '../../assets/img/sliders/main/head_urban_district_khimki_mobil.png';
import road_repairs_2024 from '../../assets/img/sliders/main/road_repairs_2024.png';
import road_repairs_2024_mobil from '../../assets/img/sliders/main/road_repairs_2024_mobil.png';
import military_service_under_contract from '../../assets/img/sliders/main/military-service-under-contract.png';
import military_service_under_contract_mobil from '../../assets/img/sliders/main/military-service-under-contract_mobil.png';
import virtual_museum from '../../assets/img/sliders/main/virtual-museum.png';
import virtual_museum_mobil from '../../assets/img/sliders/main/virtual-museum_mobil.png';
import evaluation_local_government_activities from '../../assets/img/sliders/main/evaluation-of-local-government-activities.png';
import evaluation_local_government_activities_mobil from '../../assets/img/sliders/main/evaluation-of-local-government-activities_mobil.png';
import investment_portal_moscow_region from '../../assets/img/sliders/main/investment-portal-of-moscow-region.png';
import investment_portal_moscow_region_mobil from '../../assets/img/sliders/main/investment-portal-of-moscow-region_mobil.png';
import committee_competition_policy_moscow_region from '../../assets/img/sliders/main/committee-on-competition-policy-of-the-moscow-region.png';
import committee_competition_policy_moscow_region_mobil from '../../assets/img/sliders/main/committee-on-competition-policy-of-the-moscow-region_mobil.png';
import mosobleirc from '../../assets/img/sliders/main/mosobleirc.png';
import mosobleirc_mobil from '../../assets/img/sliders/main/mosobleirc_mobil.png';
import dobrodel_solving_problems_together from '../../assets/img/sliders/main/dobrodel-solving-problems-together.png';
import dobrodel_solving_problems_together_mobil from '../../assets/img/sliders/main/dobrodel-solving-problems-together_mobil.png';
import remove_construction_waste_correctly from '../../assets/img/sliders/main/remove-construction-waste-correctly.png';
import remove_construction_waste_correctly_mobil from '../../assets/img/sliders/main/remove-construction-waste-correctly_mobil.png';
import rescue_service from '../../assets/img/sliders/main/rescue-service.png';
import rescue_service_mobil from '../../assets/img/sliders/main/rescue-service_mobil.png';
import ministry_internal_affairs_russia from '../../assets/img/sliders/main/ministry-of-internal-affairs-of-russia.png';
import ministry_internal_affairs_russia_mobil from '../../assets/img/sliders/main/ministry-of-internal-affairs-of-russia_mobil.png';
import khimki_tv from '../../assets/img/sliders/main/khimki-tv.png';
import khimki_tv_mobil from '../../assets/img/sliders/main/khimki-tv_mobil.png';
import GBU_MO_CMU from '../../assets/img/sliders/main/GBU-MO-CMU.jpg';
import GBU_MO_CMU_mobil from '../../assets/img/sliders/main/GBU-MO-CMU.jpg';

import Carousel from '../../Components/Carousel';
import BannerArrow from '../../Components/BannerArrow';
import News from '../../Components/News';
import Slide from '../../Components/Slide';

/* Баннеры */
import CityDay from '../../BannersComopnents/CityDay';
import GovernmentServicesLarge from '../../BannersComopnents/GovernmentServicesLarge';
import MunicipalPrograms from '../../BannersComopnents/MunicipalPrograms';
import Year from '../../BannersComopnents/Year';
import SVO from '../../BannersComopnents/svo';
import KhimkiDistrict from '../../BannersComopnents/KhimkiDistrict';
/* import ChannelTG from '../../BannersComopnents/ChannelTG'; */
import Statistics from '../../BannersComopnents/Statistics';

import program1 from '../../assets/img/banners/Programm1.png';
import program1Mobil from '../../assets/img/banners/Programm1_mobil.svg';
import program2 from '../../assets/img/banners/Programm2.png';
import programmCity from '../../assets/img/banners/programmCity.svg'
import program3 from '../../assets/img/banners/Programm3.png';
import program3Mobil from '../../assets/img/banners/Programm3_mobil.svg';

/* Стили баннера */
/* import VirtualMuseum from '../../BannersComopnents/VirtualMuseum';*/
import EventAnnouncements from '../../Components/EventAnnouncements';
import CardContainerGovernor from '../../Components/CardContainerGovernor';
import VirtualMuseumMini from '../../BannersComopnents/VirtualMuseumMini';
import GuideMini from '../../BannersComopnents/GuideMini';
import VkChannelMini from '../../BannersComopnents/VkChannelMini';
import TgChannelMini from '../../BannersComopnents/TgChannelMini';

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
                     /* 'Глава г.о. Химки', */
                     'Ремонт дорог в 2025 г.',
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
                     'Химки ТВ',
                     'ГБУ MO «ЦМУ»',
                     'Горячая линия',
                     'Глава г.о. Химки',
                     'Ремонт дорог в 2025 г.',
                     'Военная служба по контракту',
                     'Виртуальный музей',
                     'Оценка деятельности местной власти',
                  ]
               }>
               <Slide
                  img={hotline}
                  imgMobil={hotline_mobil}
                  title={['Круглосуточная горячая', 'линия Администрации']}
                  description={''}
                  src={ROUTER.contacts.main}
                  btnText={'Подробнее'}
               />
               {/* <Slide
                  img={head_urban_district_khimki}
                  imgMobil={head_urban_district_khimki_mobil}
                  title={['Глава городского округа', 'Дмитрий Владимирович Волошин']}
                  description={'Социальные сети'}
                  src={'https://vk.com/gohimkiadm'}
                  btnText={'Telegram'}
               /> */}
               <Slide
                  img={road_repairs_2024}
                  imgMobil={road_repairs_2024_mobil}
                  title={['Программа ремонта', 'муниципальных и региональных', 'дорог на 2025 год']}
                  description={'Ремонт дорог в 2025 г.'}
                  btnText={'Подробнее'}
                  src={'https://old.admhimki.ru/blagoustrojstvo/remont-dorog/'}
               />
               <Slide
                  img={military_service_under_contract}
                  imgMobil={military_service_under_contract_mobil}
                  colorMobil={'white'}
                  title={['Военная служба', 'по контракту']}
                  description={''}
                  btnText={'Подробнее'}
                  src={'https://xn--80atbicfemrd.xn--p1ai/'}
               />
               <Slide
                  img={virtual_museum}
                  imgMobil={virtual_museum_mobil}
                  title={['Виртуальный музей', 'городского округа Химки', '1941-1945']}
                  description={''}
                  btnText={'Подробнее'}
                  src={'https://himkipobeda.ru/'}
               />
               <Slide
                  img={evaluation_local_government_activities}
                  imgMobil={evaluation_local_government_activities_mobil}
                  title={['Оценка деятельности', 'местной власти']}
                  description={''}
                  btnText={'Подробнее'}
                  src={'https://panel.simpleforms.ru/yuweSgMuCEGXdQJVlj6r4w#/Panel/815a15f0-947c-483d-bcbf-763d56415674/TextBlockField'}
               />
               <Slide
                  img={investment_portal_moscow_region}
                  imgMobil={investment_portal_moscow_region_mobil}
                  title={['Инвестиционный портал', 'Подмосковья']}
                  description={''}
                  btnText={'Подробнее'}
                  src={'https://invest.mosreg.ru/'}
                  colorMobil={'white'}
               />
               <Slide
                  img={committee_competition_policy_moscow_region}
                  imgMobil={committee_competition_policy_moscow_region_mobil}
                  title={['Комитет по конкурентной', 'политике Московской области']}
                  description={''}
                  btnText={'Подробнее'}
                  src={'https://zakaz-mo.mosreg.ru/'}
               />
               <Slide
                  img={mosobleirc}
                  imgMobil={mosobleirc_mobil}
                  title={['Мобильное приложение', '«МосОблЕИРЦ»']}
                  description={'Вся информация по вашей квитанции в личном кабинете'}
                  btnText={'Подробнее'}
                  src={'https://мособлеирц.рф/preimushchestva-lichnogo-kabineta/'}
               />
               <Slide
                  img={dobrodel_solving_problems_together}
                  imgMobil={dobrodel_solving_problems_together_mobil}
                  title={['Добродел: решаем', 'проблемы вместе']}
                  description={''}
                  btnText={'Подробнее'}
                  src={'https://dobrodel.mosreg.ru/'}
               />
               <Slide
                  img={remove_construction_waste_correctly}
                  imgMobil={remove_construction_waste_correctly_mobil}
                  title={['Вывозите стройотходы', 'правильно']}
                  description={'Пункты приёма / заказ индивидуального вывоза'}
                  btnText={'Подробнее'}
                  src={'https://stroyothody.mosreg.ru/'}
               />
               <Slide
                  img={rescue_service}
                  imgMobil={rescue_service_mobil}
                  title={['Служба спасения', 'Московской области']}
                  description={'Полиция. МЧС. Скорая помощь'}
                  btnText={'Подробнее'}
                  src={'https://112mo.ru/'}
               />
               <Slide
                  img={ministry_internal_affairs_russia}
                  imgMobil={ministry_internal_affairs_russia_mobil}
                  title={['ГУ МВД России по', 'Московской области']}
                  description={'УМВД России по городскому округу Химки'}
                  btnText={'Подробнее'}
                  src={'https://50.xn--b1aew.xn--p1ai/'}
                  colorMobil={'white'}
               />
               <Slide
                  img={khimki_tv}
                  imgMobil={khimki_tv_mobil}
                  title={['Городской телеканал', 'Химки ТВ']}
                  description={''}
                  btnText={'Смотреть'}
                  src={'https://www.himkismi.ru/'}
                  colorMobil={'white'}
               />
               <a href="https://memorialmo.ru/info/useful-info/" target="_blank" rel="noreferrer">
                  <Slide
                     img={GBU_MO_CMU}
                     imgMobil={GBU_MO_CMU_mobil}
                     title={[]}
                     description={''}
                     btnText={''}
                     src={''}
                     colorMobil={'white'}
                  />
               </a>
            </Carousel>

            <div className="mt32 columnContainer">
               <div className="columnLarge">
                  <CardContainerGovernor />
               </div>

               <div className={`ml20 columnSmal ${s.mtCityDayBannerMobil}`}>
                  <CityDay />
               </div>
            </div>

            <div className="mt32 columnContainer">
               <div className="columnLarge">
                  <div className={`mt32 ${s.mtGovernmentServicesBannerMobil}`}>
                     <GovernmentServicesLarge />
                  </div>
               </div>

               <div className="ml20 columnSmal">
                  <div className="mt32">
                     <iframe id="widgetPosId" style={{border: '0'}} src="https://pos.gosuslugi.ru/og/widgets/view?type=[10,20,30]&amp;fontFamily=Arial&amp;maxPage=5&amp;maxElement=3&amp;updateFrequency=5000&amp;level=30&amp;municipality_id=46783000&amp;logoColor=0D47A1&amp;backgroundColor=ffffff&amp;mainUrlColor=0D47A1&amp;selectColor=0D47A1&amp;hoverSelectColor=0D47A1&amp;itemColor=0D47A1&amp;hoverItemColor=0D47A1&amp;backgroundItemColor=f9f9fa&amp;paginationColor=0D47A1&amp;backgroundPaginationColor=eaf4fa&amp;hoverPaginationColor=2c8ecc&amp;deviderColor=e3e8ee&amp;logoFs=16&amp;mainUrlFs=16&amp;selectFs=25&amp;itemFs=14&amp;paginationFs=14" width="265"></iframe>
                  </div>
               </div>
            </div>

            <section className={s.lastNewsContainer}>
               <div className="mt80 subTitle">Последние новости</div>
               <div className="mt40 columnContainer">
                  <div className="columnLarge">
                     <div className="bannerArrowContainer">
                        <News btnText={'Все новости'} news={news} />
                     </div>
                     <NavLink to={ROUTER.news} className={`btnW ${s.showMore}`}>Все новости</NavLink>
                  </div>
                  <div className={`ml20 columnSmal`}>
                     <div className={s.mobilCityDay}>
                        <CityDay />
                     </div>
                     <div className={s.mobilBannerContainer}>
                        <Year />
                        <div className="mt20">
                           <SVO />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className={s.programAdministratorContainer}>
               <div className="mt80 subTitle">Программы администрации</div>
               <div className="mt40 columnContainer">
                  <div className={`bannerArrowContainer ${s.mobilBannerRow}`}>
                     <BannerArrow imgBanner={program1} imgBannerMobil={program1Mobil} />
                     <BannerArrow imgBanner={program2} imgBannerMobil={programmCity} />
                     <BannerArrow imgBanner={program3} imgBannerMobil={program3Mobil} />
                     <MunicipalPrograms />
                  </div>
               </div>
            </section>

            <section className='mt80'>
               <div className="columnContainer">
                  <div className="columnLarge">
                     <KhimkiDistrict />
                  </div>
                  <div className={`ml20 columnSmal ${s.mobilStatistics}`}>
                     <Statistics />
                  </div>
               </div>
               <div className={`mt80  ${s.bannersContainerMini}`}>
                  <VirtualMuseumMini />
                  <GuideMini />
                  <VkChannelMini />
                  <TgChannelMini />
                  {/* <VirtualMuseum /> */}
                  {/* <div className={s.mobilTGChannel}>
                     <ChannelTG />
                  </div> */}
               </div>
            </section>

            {/* Анонсы мероприятий */}
            <EventAnnouncements />



         </ContantContainerMain>

      </div>
   )
}
export default Main;
