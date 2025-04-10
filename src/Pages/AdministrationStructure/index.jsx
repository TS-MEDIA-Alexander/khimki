import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './AdministrationStructure.module.css';

import СardAdministratiorStructure from '../../Components/СardAdministratiorStructureLink';

import SpoilerContainer from '../../Components/SpoilerContainer';
import SpoilerItem from '../../Components/SpoilerContainer/SpoilerItem';
/* Фотографии персон */
import minaev from '../../assets/img/Persons/img.png';
import zhdankina from '../../assets/img/Persons/img.png';
import madatova from '../../assets/img/Persons/madatova.png';
import khazanovich from '../../assets/img/Persons/khazanovich.jpg';
import vatutina from '../../assets/img/Persons/vatutina.png';
import kosolapov from '../../assets/img/Persons/img.png';
import gureva from '../../assets/img/Persons/gureva.png';
import zaytsev from '../../assets/img/Persons/zaytsev.png';
import tsukanov from '../../assets/img/Persons/tsukanov.png';
import petrukhin from '../../assets/img/Persons/petrukhin.png';
import mishina from '../../assets/img/Persons/mishina.png';
import kapustina from '../../assets/img/Persons/kapustina.png';
import genter from '../../assets/img/Persons/genter.png';
import mashkovtsev from '../../assets/img/Persons/mashkovtsev.png';
import poznyakova from '../../assets/img/Persons/poznyakova.png';
import pashin from '../../assets/img/Persons/pashin.png';
import shipov from '../../assets/img/Persons/shipov.png';
import prekrasa from '../../assets/img/Persons/prekrasa.png';
import MayorCard from '../../Components/MayorCard';

const AdministrationStructure = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.khimkiDistrict.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Структура администрации </span>
            </div>
            <h1 className={`mt24 pageTitle`}>Структура администрации </h1>
            <MayorCard/>

            <div className="mt80">
               <SpoilerContainer title={'Ознакомьтесь со структурой администрации'}>
                  <SpoilerItem title={'Заместители Главы городского округа'}>
                     <div className={`mt40 containerGap24`}>
                        <СardAdministratiorStructure url={'minaev'} img={minaev} jobTitle={'Первый заместитель Главы городского округа'} surname={'Минаев'} name={'Николай Валерьевич'} />
                        <СardAdministratiorStructure url={'madatova'} img={madatova} jobTitle={'Первый заместитель Главы городского округа'} surname={'Мадатова'} name={'Кристина Артуровна'} />
                        <СardAdministratiorStructure url={'zhdankina'} img={zhdankina} jobTitle={'Заместитель Главы городского округа по вопросам развития территорий и инвестициям'} surname={'Жданкина'} name={'Ирина Васильевна'} />
                     </div>
                     <div className="mt20 containerGap24">
                        <СardAdministratiorStructure url={'khazanovich'} img={khazanovich} jobTitle={'Заместитель Главы городского округа по вопросам жилищно-коммунального хозяйства'} surname={'Хазанович'} name={'Станислав Викторович'} />
                        <СardAdministratiorStructure url={'vatutina'} img={vatutina} jobTitle={'Заместитель Главы городского округа по вопросам социальной политики, культуры и спорта'} surname={'Ватутина'} name={'Анна Эдуардовна '} />
                        <СardAdministratiorStructure url={'kosolapov'} img={kosolapov} jobTitle={'Заместитель Главы городского округа по вопросам благоустройства'} surname={'Косолапов'} name={'Василий Михайлович'} />
                        <СardAdministratiorStructure url={'gureva'} img={gureva} jobTitle={'Заместитель Главы городского округа – начальник Финансового управления'} surname={'Гурьева'} name={'Наталия Николаевна'} />
                     </div>
                     <div className="mt20 containerGap24">
                        <СardAdministratiorStructure url={'zaytsev'} img={zaytsev} jobTitle={'Заместитель Главы городского округа по работе со средствами массовой информации, территориальному развитию и молодежной политике'} surname={'Зайцев'} name={'Андрей Валерьевич'} />
                        <СardAdministratiorStructure url={'tsukanov'} img={tsukanov} jobTitle={'Заместитель Главы городского округа по территориальной безопасности, взаимодействию с правоохранительными органами и противодействию коррупции'} surname={'Цуканов'} name={'Александр Геннадьевич '} />
                        <СardAdministratiorStructure url={'zarubina'} jobTitle={'Заместитель Главы городского округа по административной работе'} surname={'Зарубина'} name={'Татьяна Юрьевна'} />
                        {/* <СardAdministratiorStructure url={'pashin'} img={pashin} jobTitle={'Управление делами и контроля'} surname={'Пашин'} name={'Василий Вадимович'} /> */}
                        {/* <СardAdministratiorStructure url={'poznyakova'} img={poznyakova} jobTitle={'Управление "Аппарат Администрации городского округа и кадровой политики"'} surname={'Познякова'} name={'Ирина Александровна'} /> */}
                     </div>
                  </SpoilerItem>
                  <div className="mt48">
                     <SpoilerItem title={'Территориальные управления'}>
                        <div className="mt40 containerGap24">
                           <СardAdministratiorStructure url={'petrukhin'} img={petrukhin} jobTitleTop={'Территориальное управление микрорайонов Сходня - Фирсановка'} surname={'Петрухин'} name={'Сергей Сергеевич '} />
                           <СardAdministratiorStructure url={'mishina'} img={mishina} jobTitleTop={'Территориальное управление микрорайона Подрезково'} surname={'Мишина'} name={'Наталья Владимировна'} />
                           <СardAdministratiorStructure url={'ponyatoykin'} /* img={mishina} */ jobTitleTop={'Территориальное управление микрорайонов Новогорск – Планерная'} surname={'Понятойкин'} name={'Иван Николаевич'} />
                           <СardAdministratiorStructure url={'kapustina'} img={kapustina} jobTitleTop={'Территориальное управление микрорайона Левобережный'} surname={'Капустина'} name={'Людмила Юрьевна '} />
                        </div>
                        <div className="mt20 containerGap24">
                           <СardAdministratiorStructure url={'genter'} img={genter} jobTitleTop={'Территориальное управление микрорайона Клязьма - Старбеево'} surname={'Гентер'} name={'Анна Сергеевна  '} />
                           <СardAdministratiorStructure url={'mazurov'}  /* img={voronov} */ jobTitleTop={'Территориальное управление Кутузовское'} surname={'Мазуров'} name={'Дмитрий Николаевич'} />
                           <СardAdministratiorStructure url={'konova'} /* img={mashkovtsev} */ jobTitleTop={'Территориальное управление Лунёвское'} surname={'Конова'} name={'Вера Николаевна'} />
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt48">
                     <SpoilerItem title={'Структурные подразделения в подчинении Главы'}>
                        <div className="mt40 containerGap24">
                           <СardAdministratiorStructure url={'shipov'} img={shipov} jobTitle={'Контрольно - ревизионное управление'} surname={'Шипов'} name={'Олег Николаевич'} />
                           <СardAdministratiorStructure url={'prekrasa'} img={prekrasa} jobTitle={'Управление правового обеспечения и судебно-претензионной работы'} surname={'Прекраса'} name={'Ольга Николаевна'} />
                        </div>
                     </SpoilerItem>
                  </div>
               </SpoilerContainer>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default AdministrationStructure;
