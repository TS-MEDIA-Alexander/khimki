import React from 'react';
import s from './MenuAdmin.module.css';

import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import { useSelector } from 'react-redux';
// import SpoilerContainerAdmin from 'ComponentsAdmin/SpoilerContainer';
// import SpoilerItemAdmin from 'ComponentsAdmin/SpoilerContainer/SpoilerItemAdmin';

const MenuAdmin = (props) => {

   // const currentAccesLevel = useSelector(state => state.auth.user.accessLevel)

   return (
      <div className={`${s.menuContainer} mt40`}>
         <NavLink className={({ isActive }) => (`body-m-400 ${s.linkMenu} ${isActive ? s.active : ''}`)} to={ROUTER.admin.news}>
            Новости
         </NavLink>
      </div>
   )
}
export default MenuAdmin;
