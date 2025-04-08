import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MoscowInterregionalTransport.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import CardHuman from '../../Components/CardHuman';

import vk from '../../assets/icons/vk.svg';
import ok from '../../assets/icons/ok.svg';
import tg from '../../assets/icons/telegram.svg';

import card_img_1 from '../../assets/img/prosecutorOffice/card_img_1.png';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const MoscowInterregionalTransport = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.prosecutorOffice.main} className='breadcrumbsFrom'>Прокуратура</NavLink>
               <span className='breadcrumbsTo'> / Mосковская межрегиональная транспортная прокуратура</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Mосковская межрегиональная</p>
               транспортная прокуратура</div>
            <div className="mt80">
               <CardHuman
                  jobTitle={'Московский Межрегиональный Транспортный Прокурор'}
                  name={'Букреев'}
                  surname={'Константин Николаевич'}
                  adress={'107140, г. Москва, вн.тер.г. Муниципальный Округ Красносельский, ул Краснопрудная, д. 22Б'}
                  WorkingHours={'Пн-Чт 09:00 – 13:0013:45 – 18:00, Пт 09:00 – 13:00 13:45 – 17:00'}
                  contactsArr={['+7 (495) 785-70-00', 'epp.genproc.gov.ru']}
                  img={card_img_1}
               />
            </div>

            <div className={`mt80 borderMain ${s.border}`}>
               <DocumentContainerDownload type={'PDF'} text='Порядок актуализации документов воинского учета' date={'06.02.2023'}/>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default MoscowInterregionalTransport;