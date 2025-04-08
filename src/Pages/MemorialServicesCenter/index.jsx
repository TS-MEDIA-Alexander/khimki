import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MemorialServicesCenter.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

const MemorialServicesCenter = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <NavLink to={ROUTER.activity.burialFuneralServices.main} className='breadcrumbsFrom'>/ Погребение и похоронное дело</NavLink>
               <span className='breadcrumbsTo'> / Государственное бюджетное учреждение Московской области «Центр мемориальных услуг»</span>
            </div>
            <div className={`mt24 pageTitle`}>Государственное бюджетное учреждение Московской области «Центр мемориальных услуг»</div>

            <div className="mt80 pageSubtitle">Cделаем подмосковье безопасным вместе! </div>

            <div className={`mt38 text`}>
               <iframe width="900" height="506" src="https://rutube.ru/play/embed/53a5ca0a473c869e6eaf74bf4b71f003/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
               <div className="mt16 additionalInformation">Смотреть ИНТЕРВЬЮ директора ГБУ МО "Центр мемориальных услуг" Казакова Николая Александровича</div>

               <p>
                  Рассказываем, что делать, когда умер родственник, какие похоронные услуги можно получить бесплатно, как общаться с ритуальными агентами, где получить бесплатные консультации по вопросам погребения и похоронного дела и на какие пособия могут рассчитывать близкие.
               </p>
               <p>
                  «Наше главное отличие от частных компаний заключается в том, что основная цель нашей деятельности – это всесторонняя помощь людям, попавшим в эмоционально-тяжелую жизненную ситуацию.
               </p>
               <p>
                  Напоминаем: <br />
                  Получить бесплатные консультации в сфере погребения и похоронного дела можно, обратившись на круглосуточную горячую линию
                  ГБУ МО "ЦМУ" по номеру телефона +7 (498) 568-99-99
               </p>
               <p>
                  Анонсы выездных консультаций специалистов ГБУ МО «ЦМУ» можно найти на наших официальных страницах в социальных сетях:
               </p>

               <p>Telegram: <a href="https://t.me/memorial_mo">https://t.me/memorial_mo</a></p>
               <p>Одноклассники: <a href="https://ok.ru/memorialmo">https://ok.ru/memorialmo</a></p>
               <p>Дзен: <a href="https://dzen.ru/memorialmo">https://dzen.ru/memorialmo</a></p>
               <p>ВК: <a href="https://vk.com/memorial_mo">https://vk.com/memorial_mo</a></p>

            </div>


         </ContantContainerMain>
      </div>
   )
}
export default MemorialServicesCenter;