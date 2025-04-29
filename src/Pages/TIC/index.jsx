import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import CardHuman from '../../Components/CardHuman';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './TIC.module.css';

import LinkContainer from '../../Components/LinkContainer';

const TIC = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / ТИК города Химки </span>
            </div>
            <h1 className={`mt24 pageTitle`}>Территориальная избирательная комиссия города Химки </h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link={ROUTER.khimkiDistrict.ticDocuments} text={'Документы'} />
               <div className="mt20"><LinkContainer link={ROUTER.khimkiDistrict.contactInformation} text={'Контактная информация избирательных участков, образованных на территории городского округа Химки'} /></div>
            </div>

            <div className="mt80">
               <CardHuman
                  jobTitle={'Территориальная избирательная комиссия города Химки образована на основании Решения Избирательной комиссии Московской области № 3/17-6 от 23.12.2016'}
                  subtitle={'Количественный состав ТИК – 12 чел.'}
                  info={'Московская область, городской округ Химки, Калинина, 4'}
                  contactsArr={['+7 (495) 572-64-22', 'tik_himki@mail.ru']}
               />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default TIC;
