import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './LandRelations.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';

import LinkContainer from '../../Components/LinkContainer';


const LandRelations = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Земельные отношения</span>
            </div>
            <h1 className={`mt24 pageTitle`}>Земельные отношения</h1>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/aukciony-i-torgi/' text={'Аукционы и торги'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zemelnye-otnosheniya/municipalnyj-zemelnyj-kontrol2/' text={'Муниципальный земельный контроль'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zemelnye-otnosheniya/soobsheniya-o-planiruemom-izyatii-zemelnyh-uchastkov/' text={'Сообщения о планируемом изъятии земельных участков'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zemelnye-otnosheniya/pamyatki-i-razyasneniya/' text={'Памятки и разъяснения'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zemelnye-otnosheniya/soobsheniya-ob-ustanovlenii-publichnyh-servitutov-v-ramkah-predostavleniya-gosudarstvennyh-uslug/' text={'Сообщения о возможном установлении публичных сервитутов в рамках предоставления государственных услуг'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/zemelnye-otnosheniya/izvesheniya-o-provedenii-sobraniya-o-soglasovanii-mestopolozheniya-granic-zemelnyh-uchastkov/' text={'Извещения о проведении собрания о согласовании местоположения границ земельных участков'} /></div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default LandRelations;
