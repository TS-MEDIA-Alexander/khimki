import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './EcologyEnvironmentalSafety.module.css';
import CardHuman from '../../Components/CardHuman';

const EcologyEnvironmentalSafety = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Экология и экологическая безопасность</span>
            </div>
            <div className={`mt24 pageTitle`}><p>Экология и экологическая</p> безопасность
            </div>

            <div className={`mt80 text`}>
               <p>
                  Отдел экологической безопасности является структурным подразделением управления жилищно-коммунального хозяйства и благоустройства Администрации городского округа Химки Московской области.
               </p>

               <p>
                  Целью деятельности отдела является защита предусмотренных ст. 42 Конституции Российской Федерации прав населения городского округа Химки Московской области на благоприятную окружающую среду.
               </p>

               <p>
                  Предметом деятельности отдела являются вопросы охраны окружающей среды, экологической безопасности и рационального природопользования на территории городского округа Химки Московской области.
               </p>
            </div>

            <CardHuman
               jobTitle={'Отдел экологической безопасности'}
               name={'Кузнецова'}
               surname={'Людмила Фёдоровна'}
               info={'Контакты для обращения граждан:'}
               adress={'г. Химки, ул. Московская, д. 15'}
               contactsArr={['+7 (495) 572-21-01', 'ecology@admhimki.ru']}
            />


         </ContantContainerMain>
      </div>
   )
}
export default EcologyEnvironmentalSafety;