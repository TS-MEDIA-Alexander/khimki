import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Construction.module.css';

import LinkContainer from '../../Components/LinkContainer';

const Construction = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Строительство</span>
            </div>
            <h1 className="mt24 pageTitle">Строительство</h1>
            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/stroitelstvo/o-strojkomplekse/' text={'О Стройкомплексе'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/stroitelstvo/pravila-zemlepolzovaniya-i-zastrojki/' text={'Правила землепользования и застройки'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/stroitelstvo/rasselenie-vethogo-fonda/' text={'Расселение ветхого фонда'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/stroitelstvo/standarty-kachestva-zhilogo-pomesheniya-i-komfortnosti-prozhivaniya-na-territorii-moskovskoj-oblasti/' text={'Стандарты качества жилого помещения и комфортности проживания на территории Московской области'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/stroitelstvo/mestnye-normativy-gradostroitelnogo-proektirovaniya-mngp/' text={'Местные нормативы градостроительного проектирования (МНГП)'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/stroitelstvo/aeroport-sheremetevo/' text={'Аэропорт Шереметьево'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/stroitelstvo/dokumentaciya-po-planirovke-territorii/' text={'Документация по планировке территории'} /></div>
            </div>
            <div className="text">
               <div className={`mt80 pageSubtitle`}>Муниципальное казенное учреждение «Управление строительства»</div>
               <p>
                  Деятельность: Обеспечивает проведение на территории г.о. Химки Московской области политики органов местного самоуправления в сфере градостроительной, архитектурной и строительной деятельности. Является заказчиком бюджетного строительства на территории г.о. Химки.
               </p>
               <p>
                  Руководитель: Глаголев Роман Александрович
               </p>
               <div className={`mt38 ${s.btnContainerRow}`}>
                  <div className={`oval`}>+ 7 (495) 572-20-07</div>
                  <div className={`ml16 oval`}>glagolev_ra@admhimki.ru</div>
               </div>

               <p>
                  Контакты: ул. Кирова, вл. 24 (стадион «Арена-Химки»)
               </p>
               <div className={`mt38 ${s.btnContainerRow}`}>
                  <div className={`oval`}>+7 (495) 572-20-07</div>
                  <div className={`ml16 oval`}>mkuuks@admhimki.ru</div>
               </div>

               <div className={`mt38 pageSubtitle`}>Отдел архитектуры и градостроительства Администрации городского округа Химки </div>
               <p>
                  Деятельность: Обеспечивает исполнение полномочий Администрации в сфере градостроительной деятельности и архитектуры в целях комплексного и устойчивого развития территории городского округа Химки.
               </p>
               <p>
                  Начальник: Казакова Наталья Евгеньевна
               </p>
               <div className={`mt38 ${s.btnContainerRow}`}>
                  <div className={`oval`}>+ 7 (495) 572-73-70</div>
                  <div className={`ml16 oval`}>city_arch@admhimki.ru </div>
               </div>

               <p>
                  Адрес: г. Химки, Кирова, д.24
               </p>
               <div className={`mt38 ${s.btnContainerRow}`}>
                  <div className={`oval`}>+7 (495) 572-73-70</div>
                  <div className={`ml16 oval`}>city_arch@admhimki.ru</div>
               </div>

               <div className={`mt38 pageSubtitle`}>ООО «АПУ-Химки»</div>
               <p>
                  Деятельность: Предоставляет услуги в сфере архитектурного и градостроительного проектирования, геодезических и кадастровых работ.
               </p>
               <p>
                  Руководство: Рябуха Юрий Анатольевич
               </p>
               <p>
                  Контакты: г. Химки, ул. Ватутина, д. 4 кор. 2
               </p>

               <div className={`mt38 ${s.btnContainerRow}`}>
                  <div className={`oval`}>+7 (495) 572-81-88</div>
                  <div className={`ml16 oval`}>info@apuhimki.ru</div>
               </div>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default Construction;
