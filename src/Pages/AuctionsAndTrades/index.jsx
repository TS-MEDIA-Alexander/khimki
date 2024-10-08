import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './AuctionsAndTrades.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import LinkContainer from '../../Components/LinkContainer';


const AuctionsAndTrades = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Аукционы и торги</span>
            </div>
            <div className={`mt24 pageTitle`}>Аукционы и торги</div>
            <div className={`mt38 text`}>
               <div className={`mt80 borderMain ${s.linkContainer}`}>
                  <LinkContainer link='http://old.admhimki.ru/aukciony-i-torgi/zemelnye-uchastki/' text={'Земельные участки'} />
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/investicii/torgi/' text={'Нежилые помещения'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/maloe-i-srednee-predprinimatelstvo/nestacionarnye-torgovye-obekty/aukcioni/' text={'Организация ярмарок'} /></div>
               </div>

               <div className="mt80 pageSubtitle">Уважаемые посетители сайта!</div>

               <p>
                  В связи с изменением законодательства, с 1 января 2012 года официальным сайтом Российской Федерации в сети «Интернет» для размещения информации о проведении торгов (и о результатах торгов) по продаже земельных участков или права на заключение договоров аренды земельных участков для жилищного строительства либо на право заключить договор о развитии застроенной территории определен сайт torgi.gov.ru.
               </p>
               <p>
                  Для получения актуальных данных необходимо перейти на Официальный сайт Российской Федерации для размещения информации о проведении торгов.
               </p>
               <div className="mt38 oval">
                  <a target="_blank" href="https://torgi.gov.ru/">torgi.gov.ru</a>
               </div>
               <p>
                  В соответствии с п. 19 ст. 39.11 Земельного кодекса РФ извещения о торгах (аукционах, конкурсах) публикуются не менее чем за 30 дней до их проведения.
               </p>
               <div className="mt38 pageSubtitle">Комфортное Подмосковье. Земельно-имущественные торги.</div>
               <div className="mt38">
                  <iframe width="900" height="506" src="https://www.youtube.com/embed/Out9_3CCNZI?si=RqevZ7CtQvhIYyoP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </div>
               <div className="mt38 pageSubtitle">Напоминание для заявителей по земельно-имущественным торгам!</div>
               <div className="mt38">
                  <iframe width="900" height="506" src="https://www.youtube.com/embed/SBymAXG8Iek?si=12_55jnPGuQIm1co" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </div>
            </div>


         </ContantContainerMain>
      </div>
   )
}
export default AuctionsAndTrades;