import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './PublicHearingsPublicDiscussions.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import LinkContainer from '../../Components/LinkContainer';

const PublicHearingsPublicDiscussions = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Публичные слушания и общественные обсуждения</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Публичные слушания и</p>
               общественные обсуждения
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/publichnye-slushaniya/protokoly-i-zaklyucheniya/' text={'Протоколы и заключения'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/publichnye-slushaniya/naznachenie-publichnyh-slushanij/' text={'Назначение публичных слушаний и общественных обсуждений'} /></div>
               <div className="mt24"><LinkContainer link='https://old.admhimki.ru/publichnye-slushaniya/provedenie-publichnyh-slushanij/' text={'Проведение публичных слушаний и общественных обсуждений'} /></div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default PublicHearingsPublicDiscussions;