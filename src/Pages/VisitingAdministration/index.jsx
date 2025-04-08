import React from 'react';
import s from './VisitingAdministration.module.css';

import ContantContainerMain from '../../total/ContantContainerMain';
import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

import Table from '../../Components/Table';

import february_visiting_administrations from '../../assets/tables/february_visiting_administrations.json';

const VisitingAdministration = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.citizensAppeals.main} className='breadcrumbsFrom'>Обращения граждан</NavLink>
               <span className='breadcrumbsTo'> / Выездная администрация </span>
            </div>
            <div className="mt24 pageTitle">
               Выездная администрация
            </div>

            <div className="text mt80">
               <p>
                  Представители управлений и городских служб ответят на вопросы жителей, а также зафиксируют предложения по развитию городского округа.
               </p>
               <p>
                  В формате выездной администрации каждый житель городского округа Химки сможет получить консультации и задать вопросы профильным службам по вопросам ЖКХ, социального обеспечения, здравоохранения, предпринимательства, безопасности. Чтобы оформить обращение, при себе необходимо иметь паспорт.
               </p>
            </div>


            <div className="mt40">
               <Table table={february_visiting_administrations} style={s} />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default VisitingAdministration;