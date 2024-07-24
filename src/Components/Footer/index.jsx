import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import logo from '../../assets/img/logos/full-logo.svg';
import s from './Footer.module.css';

const Footer = (props) => {
   return (
      <div className={s.footer}>
         <ContantContainerMain>
            <div className={s.footerRow}>
               <div className={s.footerLogoBlock}>
                  <img src={logo} alt="" />
                  <div className={s.textMain}>
                     <div className={s.titleInfo}>Официальный интернет-сайт</div>
                     <div className={s.titleAdministration}>АДМИНИСТРАЦИИ ГОРОДСКОГО ОКРУГА ХИМКИ</div>
                     <div className={s.titleInfo}>Московской области</div>
                  </div>
               </div>
               <div className={s.footerColumn}>
                 <div className={s.copyright}>©2024 Любое использование материалов допускается только при соблюдении </div>
                 <div className={s.copyright}>правил перепечатки и при наличии активной гиперссылки на admhimki.ru</div>
                 <div className={s.adress}>Московская обл., г.о. Химки, ул. Московская, д.15, ул. Калинина, д. 4</div>
                 <div className={s.tsMedia}>Сделано - TS Media</div>
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default Footer;