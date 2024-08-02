import React, { useState } from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './AdministrationStructurePerson.module.css';

import persons from '../../backend/persons';

import FamilyYear from '../../BannersComopnents/FamilyYear';
import SVO from '../../BannersComopnents/svo';
import { NavLink, useParams } from 'react-router-dom';
import {ROUTER} from '../../config';
import SpoilerItemRadialBtn from '../../Components/SpoilerContainer/SpoilerItemRadialBtn';



const AdministrationStructurePerson = (props) => {

   const personUrl = useParams()['person-'].split('-')[1];

   const [person, setPerson] = useState(() => persons.filter(el => el.url === personUrl)[0])


   return (
      <div>
         <ContantContainerMain>

            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <NavLink to={ROUTER.khimkiDistrict.administrationStructure} className='breadcrumbsTo'> / Структура администрации </NavLink>
               <span className='breadcrumbsTo'> / {person.jobTitle} </span>
            </div>
            <div className={`mt24 ${s.title}`}>{person.jobTitle}</div>
            <div className="columnContainer">
               <div className="columnLarge">
                  <div className={`mt80  ${s.card}`}>
                     <div className={s.portrainContainer}>
                        <img src={person.img} alt="" />
                     </div>
                     <div className={s.rightContainer}>
                        <div>
                           <div className={`mt8 ${s.cardSurname}`}>{person.surname}</div>
                           <div className={s.cardName}>{person.name}</div>
                        </div>
                        <div>
                           <div className={`mt24 ${s.cardTel} ${s.cardTel_dib}`}>{person.tel || 'нет телефона'}</div>
                           <div className={`mt24 ${s.cardTel}`}>{person.mail || 'нет почты'}</div>
                        </div>
                     </div>
                  </div>

                  {person.area && <div className={s.spoilerContainer}>
                     <div className={`mt80 ${s.areaTitle}`}>{person.area}</div>
                     <div className="mt48">
                        {person.areaSpoler.map(el => <div key={el.id} className="mt20">
                           <SpoilerItemRadialBtn title={el.title}>
                              {!!el.textBody.length && <div className='mt24'></div>}
                              {el.textBody.map(el => <p className={s.spoilerItemText} key={el.id}>{el.text}</p>)}
                           </SpoilerItemRadialBtn>
                        </div>)}

                     </div>
                  </div>}




               </div>
               <div className="mt80 ml20 columnSmal">
                  <FamilyYear />
                  <div className="mt20">
                     <SVO />
                  </div>
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default AdministrationStructurePerson;