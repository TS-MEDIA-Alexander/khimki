import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MunicipalСontrol.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import LinkContainer from '../../Components/LinkContainer';

const MunicipalСontrol = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Муниципальный контроль</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Муниципальный контроль</h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/municipalnyj-kontrol/municipalnyj-kontrol-na-avtomobilnom-transporte-gorodskom-nazemnom-elektricheskom-transporte-i-v-dorozhnom-hozyajstve/' text={'Муниципальный контроль на автомобильном транспорте, городском наземном электрическом транспорте и в дорожном хозяйстве'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/municipalnyj-kontrol/presechenie-samovolnogo-stroitelstva/' text={'Пресечение самовольного строительства'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zemelnye-otnosheniya/municipalnyj-zemelnyj-kontrol2/' text={'Муниципальный земельный контроль'} /></div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default MunicipalСontrol;
