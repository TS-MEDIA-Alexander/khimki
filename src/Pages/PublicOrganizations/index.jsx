import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import s from './PublicOrganizations.module.css';
import Table from '../../Components/Table';
import organizazii from '../../assets/tables/organizazii.json';

const PublicOrganizations = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Общественные организации</span>
            </div>
            <div className={`mt24 pageTitle`}>Общественные организации </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink to={ROUTER.khimkiDistrict.unionSummerResidents} className={`${s.link}`}>Союз дачников Подмосковья <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink to={ROUTER.khimkiDistrict.associationApartmentBuildingsKhimki} className={`mt24 ${s.link}`}>Ассоциация МКД Химок<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink to={ROUTER.khimkiDistrict.mooAgainstCorruption} className={`mt24 ${s.link}`}>MOO «Против коррупции»<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>

            <div className="mt80">
               <Table table={organizazii} style={s} />
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PublicOrganizations;