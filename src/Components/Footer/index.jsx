import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import logo from '../../assets/img/logos/full-logo-footer.svg';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

const Footer = (props) => {
   return (
      <div className={s.footer}>
         <ContantContainerMain>
            <div className={s.footerRow}>
               <NavLink to={ROUTER.main} className={s.footerLogoBlock}>
                  <img src={logo} alt="" />
                  <div className={s.textMain}>
                     <div className={s.titleInfo}>Официальный интернет-сайт</div>
                     <div className={s.titleAdministration}>АДМИНИСТРАЦИИ ГОРОДСКОГО ОКРУГА ХИМКИ</div>
                     <div className={s.titleInfo}>Московской области</div>
                  </div>
               </NavLink>
               <div className={s.footerColumn}>
                 <div className={s.copyright}>Свидетельство о регистрации СМИ от 22.04.2024 ЭЛ № ФС 77 - 87145 </div>
                 <div className={`${s.adress} mt8`}>©2025 Любое использование материалов допускается только при соблюдении <br /> <a href="https://old.admhimki.ru/mdiamore/press-sluzhba-administracii/">правил перепечатки</a> и при наличии активной гиперссылки на admhimki.ru</div>
                 <div className={`${s.tsMedia} mt8`}>Сделано - TS Media</div>
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default Footer;