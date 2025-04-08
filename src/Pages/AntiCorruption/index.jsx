import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './AntiCorruption.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import AntiCorruptionBanner from '../../BannersComopnents/AntiCorruptionBanner';
import LinkContainer from '../../Components/LinkContainer';


const AntiCorruption = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Противодействие коррупции</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Противодействие коррупции</h1>

            <div className={s.containtContainer}>
               <div className="mt80">
                  <AntiCorruptionBanner />
               </div>

               <div className={`mt80 borderMain ${s.linkContainer}`}>
                  <LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/protivodejstvie-korrupcii/antikorrupcionnaya-ekspertiza/' text={'Независимая антикоррупционная экспертиза'} />
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/protivodejstvie-korrupcii/metodicheskie-materialy/' text={'Методические материалы'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/formy-dokumentov-svyazannye-s-protivodejstviem-kor/' text={'Формы документов, связанные с противодействием коррупции, для заполнения'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/protivodejstvie-korrupcii/komissiya-po-soblyudeniyu-trebovanij-k-sluzhebnomu-povedeniyu-i-uregulirovaniyu-konflikta-interesov/' text={'Комиссия по соблюдению требований к служебному поведению и урегулированию конфликта интересов'} /></div>
                  <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/rabota-s-obrasheniyami-grazhdan/napisat-v-administraciyu/' text={'Обратная связь для сообщений о фактах коррупции'} /></div>
                  <div className="mt24"><LinkContainer link='https://gurb.mosreg.ru/' text={'Главное управление региональной безопасности московской области'} /></div>
               </div>

               <div className={`mt40 ${s.description}`}>
                  <p>Ссылки размещены в соответствии с обращением Главного управления региональной безопасности Московской области</p>
                  от 30.05.2022 № 09ИСХ-4285/08-01</div>

            </div>
         </ContantContainerMain>
      </div>
   )
}
export default AntiCorruption;
