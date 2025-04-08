import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './CorrectionalInstitutions.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import CardHuman from '../../Components/CardHuman';

import vk from '../../assets/icons/vk.svg';
import ok from '../../assets/icons/ok.svg';
import tg from '../../assets/icons/telegram.svg';

import card_img_1 from '../../assets/img/prosecutorOffice/card_img_1.png';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const CorrectionalInstitutions = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.prosecutorOffice.main} className='breadcrumbsFrom'>Прокуратура</NavLink>
               <span className='breadcrumbsTo'> / Московская прокуратура по надзору за соблюдением законов в исправительных учреждениях Московской области</span>
            </div>
            <h1 className={`mt24 pageTitle`}>
               <p>Московская прокуратура по</p>
               <p>надзору за соблюдением законов</p>
               <p>в исправительных учреждениях</p>
               <p>Московской области</p>
            </h1>
            <div className="mt80">
               <CardHuman
                  jobTitle={'Московский прокурор по надзору за соблюдением законов в исправительных учреждениях Московской области'}
                  name={'Инсаров'}
                  surname={'Вячеслав Александрович'}
                  adress={'Ленинградская ул., 11, Химки'}
                  WorkingHours={'Пн-Чт 09:00 – 13:00 14:00 – 18:00, Пт 09:00 – 13:00 14:00 – 16:45'}
                  contactsArr={['+7 (495) 571-10-46', 'epp.genproc.gov.ru']}
                  img={card_img_1}
               />
            </div>

            <div className={`mt80 borderMain ${s.border}`}>
               <DocumentContainerDownload type={'PDF'} text='Московская прокуратура по надзору за соблюдением законов в исправительных учреждениях Московской области информирует о Государственной стратегии противодействия распространению ВИЧ-инфекции в Российской Федерации.' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Cтатья по разъяснению законодательству о потребительском кредите' date={'06.02.2023'} />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default CorrectionalInstitutions;
