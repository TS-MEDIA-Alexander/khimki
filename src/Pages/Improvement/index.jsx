import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Improvement.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';

import LinkContainer from '../../Components/LinkContainer';

const Improvement = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Благоустройство</span>
            </div>
            <div className={`mt24 pageTitle`}>Благоустройство</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/blagoustrojstvo/obshestvennye-prostranstva/' text={'Общественные пространства'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/blagoustrojstvo/remont-obektov-dorozhnogo-hozyajstva-v-ramkah-povysheniya-bgd/' text={'Ремонт объектов дорожного хозяйства в рамках повышения БДД'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/blagoustrojstvo/remont-dorog/' text={'Ремонт дорог'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/blagoustrojstvo/blagoustrojstvo-dvorov/' text={'Благоустройство дворов'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/blagoustrojstvo/blagoustrojstvo-parkov/' text={'Благоустройство парков'} /></div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default Improvement;