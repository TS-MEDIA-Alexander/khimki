import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './RegulatoryImpactAssessment.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import banner from '../../assets/img/activity/banner.png';


const RegulatoryImpactAssessment = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Оценка регулирующего воздействия</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Оценка регулирующего</p>
               воздействия</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Законодательство<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} */ className={`mt24 ${s.link}`}>Публичные консультации<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>

            <div className="mt80 pageSubtitle">Что такое ОРВ?</div>
            <div className={`mt38 text`}>
               <p>
                  Центральным элементом системы эффективного регулирования является институт оценки регулирующего воздействия (ОРВ), основанный на анализе проблем и целей регулирования, определении возможных вариантов достижения целей, а также оценке связанных с ними позитивных и негативных эффектов.
               </p>
               <div className="mt38 pageSubtitle">Схема процедуры ОРВ:</div>
               <div className={`mt38 ${s.imgBanner}`}>
                  <img src={banner} alt="" />
               </div>
               <p>
                  Институт оценки регулирующего воздействия позволяет подойти системно к процессам введения, изменения и отмены правовых норм, и обеспечить, как следствие, существенное повышение качества регулирования, предсказуемости и обоснованности возможных изменений в нормативно-правовой базе. Важным элементом процедуры ОРВ является проведение публичных консультаций с заинтересованными сторонами, которое позволяет выявить позиции заинтересованных сторон, сделать процесс рассмотрения интересов всех затрагиваемых новым регулированием групп прозрачным, обеспечить свободное заявление и возможность учета данных интересов.
               </p>

               <div className="mt38 pageSubtitle">Ключевые цели проведения процедуры ОРВ:</div>

               <ul className='mt38'>
                  <li>Рассчитать выгоды и издержки субъектов предпринимательской и иной деятельности, других заинтересованных лиц, связанные с оплатой прямо установленных регулированием платежей, так и с прочими организационными расходами по выполнению вновь вводимых требований;
                  </li>
                  <li>Оценить воздействие регулирования на деловой климат и инвестиционную привлекательность, конкуренцию и структуру рынков; Обеспечить выбор наиболее эффективного варианта решения проблем;
                  </li>
                  <li>Снизить риски, связанные с введением нового регулирования.</li>
               </ul>


            </div>


         </ContantContainerMain>
      </div>
   )
}
export default RegulatoryImpactAssessment;