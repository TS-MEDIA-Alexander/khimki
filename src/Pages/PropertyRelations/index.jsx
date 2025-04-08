import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './PropertyRelations.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import LinkContainer from '../../Components/LinkContainer';

const PropertyRelations = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Имущественные отношения</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Имущественные отношения</h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/dokumenty/rasporyazheniya_komitet_upr_imush/' text={'Нормативно-правовые акты'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/perecheni-obektov-nedvizhimosti/' text={'Перечени объектов недвижимости'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/imushestvennye-otnosheniya/soobsheniya-ob-izyatii-obektov-nedvizhimogo-imushestva/' text={'Сообщения об изъятии объектов недвижимого имущества'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/imushestvennye-otnosheniya/novosti/' text={'Новости'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/gosudarstvennaya-kadastrovaya-ocenka-zdanij-pomeshenij-sooruzhenij-obektov-nezavershennogo-stroitelstva-mashino-mest-raspolozhennyh-na-territorii-mosk/' text={'Государственная кадастровая оценка зданий, помещений, сооружений, объектов незавершенного строительства, машино-мест, расположенных на территории Московской области'} /></div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PropertyRelations;
