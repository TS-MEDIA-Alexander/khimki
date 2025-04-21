import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './UnionSummerResidents.module.css';
import union_summer from '../../assets/img/khimkiDistrict/mobMos.png';
import union_summer_residents_doc from '../../assets/img/khimkiDistrict/union_summer_residents_doc.png';

const UnionSummerResidents = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.publicOrganizations} className='breadcrumbsTo'> / Общественные организации</NavLink>
               <span className='breadcrumbsTo'> / Союз дачников Подмосковья</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Союз дачников Подмосковья</h1>
            <div className={`mt80 ${s.container}`}>
               <div className={s.imgContainer}>
                  <img src={union_summer} alt="" />
               </div>
               <div className={`ml16 ${s.description}`}>
                  <p>Опубликовано в соответствии с обращением</p>
                  <p>Министерства имущественных отношений Московской области</p>
                  <p>от 26.03.2020 № 15ИСХ-8884</p>
               </div>
            </div>

            <div className={`mt38 ${s.text}`}>С 27.03.2020 Союз дачников Подмосковья обеспечил ввод в эксплуатацию интернет-сервиса «Электронный председатель» по адресу: Preds.ru. Указанный интернет-сервис позволяет осуществлять информирование дачников, организацию и проведение общих собраний в СНТ в дистанционном режиме.</div>

            <div className={`mt38 oval`}> <a className={s.link} target='_blank' href="https://preds.ru/" rel="noreferrer">Preds.ru</a> </div>

            <div className={`mt38 ${s.description}`}>Дата публикации: 27.03.2020</div>

            <div className={`mt80 line`}></div>

            <div className={`mt75 ${s.text}`}>В соответствии с перечнем поручений Губернатора Московской области по итогам заседания Правительства Московской области 29 мая 2018 года публикуем письмо Союза дачников Подмосковья о состоянии объектов инфраструктуры и предложения по их реконструкции или строительству.</div>

            <div className={`mt38 ${s.description}`}>Дата публикации: 18.06.2018</div>

            <div className={`mt80 line`}></div>

            <div className={`mt75 ${s.imgScanContainer}`}>
               <img src={union_summer_residents_doc} alt="" />
            </div>

            <div className={`mt38 ${s.description}`}>Формы для заполнения опубликованы на сайте общественной организации</div>

            <div className="oval mt38"><a className={s.link} target='_blank' href="https://www.xn----7sbhfcwapdtfqcbj0b5f2epc.xn--p1ai/" rel="noreferrer">Союз дачников Подмосковья</a></div>

         </ContantContainerMain>
      </div>
   )
}
export default UnionSummerResidents;
