import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './SupportCONPO.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import LinkContainer from '../../Components/LinkContainer';

import banner1 from '../../assets/img/activity/banner_support_co_npo_1.png';
import banner2 from '../../assets/img/activity/banner_support_co_npo_2.png';
import banner3 from '../../assets/img/activity/banner_support_co_npo_3.png';


const SupportCONPO = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Поддержка СО НКО</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Поддержка СО НКО</h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/podderzhka-so-nko/podderzhka-socialno-orientirovannyh-nekommercheskih-organizacij-i-ih-obosoblennyh-podrazdelenij-na-urovne-municipalnogo-obrazovaniya/' text={'Поддержка социально ориентированных некоммерческих организаций (и их обособленных подразделений) на уровне муниципального образования'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/podderzhka-so-nko/vklyuchenie-so-nko-v-reestr-postavshikov-socialnyh-uslug-mo/' text={'Включение СО НКО в реестр поставщиков социальных услуг МО'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/podderzhka-so-nko/ponyatie-so-nko-ispolniteli-obshestvenno-poleznyh-uslug/' text={'Понятие СО НКО - исполнители общественно полезных услуг'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/reestr-so-nko-v-sfere-obrazovaniya/' text={'Реестр СО НКО в сфере образования'} /></div>
            </div>

            <div className="mt80">
               <div className={s.imgContainerBlock}>
                  <img src={banner1} alt="" />
               </div>
               <div className={`mt40 ${s.imgContainerBlock}`}>
                  <img src={banner2} alt="" />
               </div>
               <div className={`mt40 ${s.imgContainerBlock}`}>
                  <img src={banner3} alt="" />
               </div>
            </div>


         </ContantContainerMain>
      </div>
   )
}
export default SupportCONPO;
