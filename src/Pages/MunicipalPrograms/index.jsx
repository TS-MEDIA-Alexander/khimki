import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MunicipalPrograms.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

import VirtualReceptionMin from '../../BannersComopnents/VirtualReceptionMin';
import PerformanceIndicators from '../../BannersComopnents/PerformanceIndicators';
import LinkContainer from '../../Components/LinkContainer';


const MunicipalPrograms = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Муниципальные программы</span>
            </div>
            <div className="mt80 pageTitle">Муниципальные программы</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <div className={s.column}>
                  <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/zdravoohranenie/' text='Здравоохранение' />
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/kultura/' text='Культура и туризм' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/obrazovanie/' text='Образование' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/socialnaya-zashita-naseleniya-gorodskogo-okruga-himki/' text='Социальная защита населения' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/sport/' text='Спорт' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/razvitie-selskogo-hozyajstva/' text='Развитие сельского хозяйства' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/ekologiya-i-okruzhayushaya-sreda/' text='Экология и окружающая среда' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/bezopasnost/' text='Безопасность и обеспечение безопасности жизнедеятельности населения' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/zhilishe/' text='Жилище' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/soderzhanie-i-razvitie-inzhenernoj-infrastruktury-i-energoeffektivnosti/' text='Развитие инженерной инфраструктуры, энергоэффективности и отрасли обращения с отходами' />
                  </div>
               </div>
               <div className={s.column}>
                  <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/predprinimatelstvo/' text='Предпринимательство' />
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/upravlenie-imushestvom-i-finansami/' text='Управление имуществом и финансами' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/razvitie-sistemi-informirovaniya-o-deyatelnosti-omsu/' text='Развитие институтов гражданского общества, повышение эффективности местного самоуправления и реализации молодежной политики' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/razvitie-i-funkcionirovanie-dorozhno-transportnogo-kompleksa/' text='Развитие и функционирование дорожно-транспортного комплекса' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/cifrovoj-gorodskoj-okrug-himki/' text='Цифровое муниципальное образование' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/arhitektura-i-gradostroitelstvo/' text='Архитектура и градостроительство' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/formirovanie-sovremennoj-gorodskoj-sredy/' text='Формирование современной городской среды' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/stroitelstvo-obektov-socialnoj-infrastruktury/' text='Строительство объектов социальной инфраструктуры' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/pereselenie-grazhdan-iz-avarijnogo-zhilishnogo-fonda/' text='Переселение граждан из аварийного жилищного фонда' />
                  </div>
                  <div className="mt24">
                     <LinkContainer radial={true} link='https://old.admhimki.ru/okrug/municipalnye-programmy/kompleksnaya-programma/' text='Программа комплексного социально-экономического развития городского округа Химки Московской области до 2030 года' />
                  </div>
               </div>
            </div>

            <div className={`mt80 rowBlock mobileNoneContainer`}>
               <VirtualReceptionMin />
               <PerformanceIndicators />
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default MunicipalPrograms;