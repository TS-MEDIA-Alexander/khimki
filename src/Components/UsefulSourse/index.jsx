import React from 'react';
import s from './UsefulSourse.module.css';

/* Компоненты */
import ContantContainerMain from '../../total/ContantContainerMain';

/* Иконки */
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import ok from '../../assets/icons/ok.svg';

const UsefulSourse = (props) => {
   return (
      <div className='mt80'>
         <ContantContainerMain >
         <div className='columnContainer'>
            <div className="columnLarge">
               <div className="borderMain">
                  <div className={s.title}>Полезные ресурсы</div>
                  <div className={s.itemTextContainer}>
                     <div className={`${s.column} ${s.columnFirst}`}>
                        <div className={s.item}>Сайт Правительства Московской области</div>
                        <div className={s.item}>Официальный сайт Московской областной Думы</div>
                        <div className={s.item}>Инвестиционный портал Московской области</div>
                        <div className={s.item}>Бизнес-навигатор МСП</div>
                        <div className={s.item}>Представитель уполномоченного по правам человека в ГО Химки​</div>
                        <div className={s.item}>Уполномоченный по правам ребёнка в Московской области</div>
                        <div className={s.item}>Прокуратура</div>
                     </div>
                     <div className={`${s.column} ${s.columnSecond} `}>
                        <div className={s.item}>Социальный фонд Российской Федерации (до 01.01.2023 - Пенсионный фонд Москвы <p>и Московской области)</p></div>
                        <div className={s.item}>Межрайонная инспекция ФНС России по ГО Химки</div>
                        <div className={s.item}>Главное управление содержания территорий Московской области (до 10.01.2022 - ГАТН Московской области)</div>
                        <div className={s.item}>Служба медицинской профилактики Московской области</div>
                        <div className={s.item}>Открытый бюджет городского округа Химки​</div>
                        <div className={s.item}>Главное управление МЧС России по Московской области</div>
                     </div>
                     <div className={`${s.column} ${s.columnLast}`}>
                        <div className={s.item}>ГКУ МО «АРКИ»</div>
                        <div className={s.item}>Портал Госуслуги</div>
                        <div className={s.item}>Контрольно-счетная​ ​палата</div>
                        <div className={s.item}>Совет депутатов​</div>
                        <div className={s.item}>Дирекция парков​</div>
                        <div className={s.item}>МФЦ</div>
                        <div className={s.item}>Портал государственныхи муниципальных услуг Московской области</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ml20 columnSmal">
               <div className={`borderMain ${s.bannerContainer}`}>
                  <div>
                     <div className={s.titleBanner}>Контакты</div>
                     <div className={`mt24 ${s.tel}`}>+7 (495) 572 65 00</div>
                     <div className={s.subTitleBanner}>Оперативный дежурный Администрации</div>
                     <div className={`mt16 ${s.tel}`}>+7 (495) 793 01 01</div>
                     <div className={s.subTitleBanner}>Горячая линия Администрации</div>
                     <div className={s.socialMediaContainer}>
                        <div className={s.socialMedia}><img className={s.img} src={vk} alt="" /></div>
                        <div className={s.socialMedia}><img className={s.img} src={telegram} alt="" /></div>
                        <div className={s.socialMedia}><img className={s.img} src={ok} alt="" /></div>
                     </div>
                  </div>
                  <div className={`btnRad ${s.btn}`}>Все контакты</div>
               </div>
            </div>
         </div>
         <div className={s.linkContainer}>
            <a href="#" className={s.link}>Карта сайта</a>
            <a href="#" className={s.link}>Предидущая версия сайта</a>
         </div>
      </ContantContainerMain>
      </div >
   )
}
export default UsefulSourse;