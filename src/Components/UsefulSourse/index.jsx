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
                        <a href='https://mosreg.ru/' target='_blank' className={s.item}>Сайт Правительства Московской области</a>
                        <a href='https://www.mosoblduma.ru/' target='_blank' className={s.item}>Официальный сайт Московской областной Думы</a>
                        <a href='https://invest.mosreg.ru/' target='_blank'  className={s.item}>Инвестиционный портал Московской области</a>
                        <a href='https://smbn.ru/' target='_blank' className={s.item}>Бизнес-навигатор МСП</a>
                        <a href='https://upch.mosreg.ru/' target='_blank' className={s.item}>Представитель уполномоченного по правам человека в ГО Химки​</a>
                        <a href='https://detimo.mosreg.ru/' target='_blank' className={s.item}>Уполномоченный по правам ребёнка в Московской области</a>
                        <a href='https://epp.genproc.gov.ru/web/proc_50' target='_blank' className={s.item}>Прокуратура</a>
                     </div>
                     <div className={`${s.column} ${s.columnSecond} `}>
                        <a href='https://sfr.gov.ru/' target='_blank' className={s.item}>Социальный фонд Российской Федерации (до 01.01.2023 - Пенсионный фонд Москвы <p>и Московской области)</p></a>
                        <a href='https://www.nalog.gov.ru/rn50/ifns/imns_50_21/' target='_blank' className={s.item}>Межрайонная инспекция ФНС России по ГО Химки</a>
                        <a href='https://gust.mosreg.ru/?ysclid=ll3k9953x1825169916' target='_blank' className={s.item}>Главное управление содержания территорий Московской области (до 10.01.2022 - ГАТН Московской области)</a>
                        <a href='https://mpmo.ru/archives/category/novosti' target='_blank' className={s.item}>Служба медицинской профилактики Московской области</a>
                        <a href='http://budget.admhimki.ru/analitika/ispolnenie-byudzheta/osnovnye-parametry-byudzheta' target='_blank' className={s.item}>Открытый бюджет городского округа Химки​</a>
                        <a href='https://50.mchs.gov.ru/' target='_blank' className={s.item}>Главное управление МЧС России по Московской области</a>
                     </div>
                     <div className={`${s.column} ${s.columnLast}`}>
                        <a href='https://arki.mosreg.ru/' target='_blank' className={s.item}>ГКУ МО «АРКИ»</a>
                        <a href='https://www.gosuslugi.ru/' target='_blank' className={s.item}>Портал Госуслуги</a>
                        <a href='https://ksphimki.ru/' target='_blank' className={s.item}>Контрольно-счетная​ ​палата</a>
                        <a href='https://sdhimki.ru/' target='_blank' className={s.item}>Совет депутатов​</a>
                        <a href='https://parkihimki.ru/' target='_blank' className={s.item}>Дирекция парков​</a>
                        <a href='http://hmfc.ru/' target='_blank' className={s.item}>МФЦ</a>
                        <a href='https://uslugi.mosreg.ru/' target='_blank' className={s.item}>Портал государственныхи муниципальных услуг Московской области</a>
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
            <a href="#" className={s.link}>Предыдущая версия сайта</a>
         </div>
      </ContantContainerMain>
      </div >
   )
}
export default UsefulSourse;