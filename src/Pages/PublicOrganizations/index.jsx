import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './PublicOrganizations.module.css';
import Table from '../../Components/Table';
import organizazii from '../../assets/tables/organizazii.json';

import LinkContainer from '../../Components/LinkContainer';

const PublicOrganizations = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Общественные организации</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Общественные организации </h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link={ROUTER.khimkiDistrict.unionSummerResidents} text={'Союз дачников Подмосковья'} />
               <div className="mt20"><LinkContainer link={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} text={'Ассоциация МКД Химок'} /></div>
               <div className="mt20"><LinkContainer link={ROUTER.khimkiDistrict.mooAgainstCorruption} text={'MOO «Против коррупции»'} /></div>
            </div>

            <div className="mt80">
               <Table table={organizazii} style={s} />
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PublicOrganizations;
