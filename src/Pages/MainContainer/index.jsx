import React from 'react';
import s from './MainContainer.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MessageCookies from 'Components/MessageCookies';
import UsefulSourse from '../../Components/UsefulSourse';

const MainContainer = ({setActive, active}) => {
   return (
      <div>
         <Header setActive={setActive} active={active}/>
         <MessageCookies />
         <Outlet/>
         <UsefulSourse />
         <Footer/>
      </div>
   )
}
export default MainContainer;
