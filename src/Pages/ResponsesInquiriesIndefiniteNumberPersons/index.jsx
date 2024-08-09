import React from 'react';
import s from './ResponsesInquiriesIndefiniteNumberPersons.module.css';

import ContantContainerMain from '../../total/ContantContainerMain';

import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';
import SpoilerContainer from '../../Components/SpoilerContainer';
import SpoilerItem from '../../Components/SpoilerContainer/SpoilerItem';

const ResponsesInquiriesIndefiniteNumberPersons = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.citizensAppeals.main} className='breadcrumbsFrom'>Обращения граждан</NavLink>
               <span className='breadcrumbsTo'> / Ответы на обращения, затрагивающие интересы неопределенного круга лиц</span>
            </div>
            <div className="mt24 pageTitle">Ответы на обращения, <br /> затрагивающие интересы <br /> неопределенного круга лиц</div>

            <div className="mt80">
               <SpoilerContainer>
                  <SpoilerItem title={'Вопросы безопасности населения (МБУ «ХимСпас»)'}></SpoilerItem>
                  <div className="mt24">
                     <SpoilerItem title={'Вопросы муниципальной безопасности (Управление территориальной безопасности и противодействия коррупции)'}></SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Вопросы строительства (МКУ «Управление строительства»)'}></SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Вопросы здравоохранения (Управление здравоохранения г.о. Химки)'}></SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Вопросы физической культуры и спорта (Управление физической культуры и спорта Администрации городского округа Химки)'}></SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Вопросы субсидирования и экономики (Отдел планирования и организации выплат субсидий управления экономики Администрации г.о. Химки)'}></SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Вопросы субсидирования социально ориентированных некоммерческих организаций (Управление «Проектный офис»)'}></SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Вопросы похоронного дела'}></SpoilerItem>
                  </div>
                  <div className="mt24">
                     <SpoilerItem title={'Вопросы по промышленности и инвестициям (Управление по промышленностии инвестициям)'}></SpoilerItem>
                  </div>
               </SpoilerContainer>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default ResponsesInquiriesIndefiniteNumberPersons;