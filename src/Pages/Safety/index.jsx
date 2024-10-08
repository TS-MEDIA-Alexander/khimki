import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Safety.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';

import LinkContainer from '../../Components/LinkContainer';


const Safety = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Безопасность</span>
            </div>
            <div className={`mt24 pageTitle`}>Безопасность</div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <LinkContainer link='http://old.admhimki.ru/okrug/municipalnye-programmy/bezopasnost/' text={'Муниципальная программа "Безопасность и обеспечение безопасности жизнедеятельности населения"'} />
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/bezopasnost/obekty-bezopasnosti-gorodskogo-okruga/' text={'Объекты безопасности городского округа'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/bezopasnost/ohrana-truda/' text={'Охрана труда'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/bezopasnost/pozharnyj-nadzor/' text={'Пожарный надзор'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/policiya/' text={'Полиция'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/mdiamore/video/profilaktika-rasprostraneniya-narkotikov-i-narkomanii/' text={'Профилактика распространения наркотиков и наркомании'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/dokumenty/himkinskij-otdel-vnevedomstvennoj-ohrany/' text={'Химкинский отдел вневедомственной охраны'} /></div>
               <div className="mt24"><LinkContainer link='http://old.admhimki.ru/okrug/deyatelnost/bezopasnost/antiterroristicheskaya-deyatelnost/' text={'Антитеррористическая деятельность'} /></div>
            </div>

            <div className="mt80 pageSubtitle">Cделаем подмосковье безопасным вместе! </div>
            <div className={`mt38 text`}>
               <p>
                  В 2023 году в Химках дополнительно установят 2000 камер видеонаблюдения, подключенные к системе «Безопасный регион». В первую очередь более 700 видеокамер установят на детских и спортивных площадках. Видеофиксация будет работать непрерывно, а видеоархив доступен не менее 30 суток, что позволит существенно снизить уровень преступности и повысить безопасность.
               </p>
               <p>
                  Всего в округе установлены более 5000 камер – на улицах, контейнерных площадках, во дворах, парках, скверах, на входных группа подъездов многоквартирных домов, у социально значимых объектов и торговых центров. В планах администрации Химок покрыть видеонаблюдением всю территорию города, включая поселения Луневское и Кутузовское, которые вошли в состав округа с 1 января 2023 года.
               </p>
               <p>
                  За 2022 год с помощью камер видеонаблюдения, подключенных к системе «Безопасный регион», раскрыто 198 преступлений и зафиксировано 2500 правонарушений
               </p>

            </div>


         </ContantContainerMain>
      </div>
   )
}
export default Safety;