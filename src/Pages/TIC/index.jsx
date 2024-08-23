import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import CardHuman from '../../Components/CardHuman';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import s from './TIC.module.css';

/* Фото */
import plug from '../../assets/img/khimkiDistrict/Symbolism/plug.svg';

const TIC = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / ТИК города Химки </span>
            </div>
            <div className={`mt24 pageTitle`}>Территориальная избирательная комиссия города химки </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink to={ROUTER.khimkiDistrict.ticDocuments} className={`${s.link}`}>Документы <div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink to={ROUTER.khimkiDistrict.contactInformation} className={`${s.link}`}>Контактная информация избирательных участков, образованных на территории городского округа Химки <div className={`btnCircleG imgContainerArrow`}><img src={arrow} alt="" /></div></NavLink>
            </div>

            <div className="mt80">
               <CardHuman
                  jobTitle={'Территориальная избирательная комиссия города Химки образована на основании Решения Избирательной комиссии Московской области № 3/17-6 от 23.12.2016'}
                  subtitle={'Количественный состав ТИК – 12 чел.'}
                  info={'Московская область, городской округ Химки, Калинина, 4'}
                  contactsArr={['+7 (495) 572-64-22', 'tik_himki@mail.ru']}
                  img={plug}
               />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default TIC;