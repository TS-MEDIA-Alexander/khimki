import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './AdministrationStructure.module.css';

import СardAdministratiorStructure from '../../Components/СardAdministratiorStructureLink';

import SpoilerContainer from '../../Components/SpoilerContainer';
import SpoilerItem from '../../Components/SpoilerContainer/SpoilerItem';
/* Фотографии персон */
import lyovochka from '../../assets/img/Persons/lyovochka.png';
import madatova from '../../assets/img/Persons/madatova.png';
import yurkov from '../../assets/img/Persons/yurkov.png';
import vatutina from '../../assets/img/Persons/vatutina.png';
import batyshev from '../../assets/img/Persons/batyshev.png';
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
            <div className={`mt24 pageTitle`}>Структура администрации </div>
            <MayorCard/>

            <div className="mt80">
               <SpoilerContainer title={'Ознакомьтесь со структурой администрации'}>
                  <SpoilerItem title={'Заместители Главы городского округа'}>
                     <div className={`mt40 containerGap24`}>
                        <СardAdministratiorStructure url={'lyovochka'} img={lyovochka} jobTitle={'Первый заместитель Главы городского округа'} surname={'Лёвочка'} name={'Родион Сергеевич'} />
                        <СardAdministratiorStructure url={'madatova'} img={madatova} jobTitle={'Первый заместитель Главы городского округа'} surname={'Мадатова'} name={'Кристина Артуровна'} />
                     </div>
                     <div className="mt20 containerGap24">
                        <СardAdministratiorStructure url={'yurkov'} img={yurkov} jobTitle={'Заместитель Главы городского округа по вопросам жилищно-коммунального хозяйства'} surname={'Юрков'} name={'Денис Анатольевич'} />
                        <СardAdministratiorStructure url={'vatutina'} img={vatutina} jobTitle={'Заместитель Главы городского округа по вопросам социальной политики, культуры и спорта'} surname={'Ватутина'} name={'Анна Эдуардовна '} />
                        <СardAdministratiorStructure url={'batyshev'} img={batyshev} jobTitle={'Заместитель Главы городского округа по вопросам благоустройства'} surname={'Батышев'} name={'Николай Николаевич'} />
                        <СardAdministratiorStructure url={'gureva'} img={gureva} jobTitle={'Заместитель Главы городского округа – начальник Финансового управления'} surname={'Гурьева'} name={'Наталия Николаевна'} />
                     </div>
                     <div className="mt20 containerGap24">
                        <СardAdministratiorStructure url={'zaytsev'} img={zaytsev} jobTitle={'Заместитель Главы городского округа по работе со средствами массовой информации, территориальному развитию и молодежной политике'} surname={'Зайцев'} name={'Андрей Валерьевич'} />
                        <СardAdministratiorStructure url={'tsukanov'} img={tsukanov} jobTitle={'Заместитель Главы городского округа по территориальной безопасности, взаимодействию с правоохранительными органами и противодействию коррупции'} surname={'Цуканов'} name={'Александр Геннадьевич '} />
                        <СardAdministratiorStructure url={'romanova'} jobTitle={'Заместитель Главы городского округа по административной работе'} surname={'Романова'} name={'Олеся Николаевна '} />
                        {/* <СardAdministratiorStructure url={'pashin'} img={pashin} jobTitle={'Управление делами и контроля'} surname={'Пашин'} name={'Василий Вадимович'} /> */}
                        {/* <СardAdministratiorStructure url={'poznyakova'} img={poznyakova} jobTitle={'Управление "Аппарат Администрации городского округа и кадровой политики"'} surname={'Познякова'} name={'Ирина Александровна'} /> */}
                     </div>
                  </SpoilerItem>
                  <div className="mt48">
                     <SpoilerItem title={'Территориальные управления'}>
                        <div className="mt40 containerGap24">
                           <СardAdministratiorStructure url={'petrukhin'} img={petrukhin} jobTitleTop={'Территориальное управление микрорайонов Сходня - Фирсановка'} surname={'Петрухин'} name={'Сергей Сергеевич '} />
                           <СardAdministratiorStructure url={'zuyeva'} /* img={shpendik} */ jobTitleTop={'Территориальное управление микрорайона Подрезково'} surname={'Зуева'} name={'Ольга Александровна'} />
                           <СardAdministratiorStructure url={'mishina'} img={mishina} jobTitleTop={'Территориальное управление микрорайонов Новогорск – Планерная'} surname={'Мишина'} name={'Наталья Владимировна '} />
                           <СardAdministratiorStructure url={'kapustina'} img={kapustina} jobTitleTop={'Территориальное управление микрорайона Левобережный'} surname={'Капустина'} name={'Людмила Юрьевна '} />
                        </div>
                        <div className="mt20 containerGap24">
                           <СardAdministratiorStructure url={'genter'} img={genter} jobTitleTop={'Территориальное управление микрорайона Клязьма - Старбеево'} surname={'Гентер'} name={'Анна Сергеевна  '} />
                           <СardAdministratiorStructure url={'mazurov'}  /* img={voronov} */ jobTitleTop={'Территориальное управление Кутузовское'} surname={'Мазуров'} name={'Дмитрий Николаевич'} />
                           <СardAdministratiorStructure url={'ponyatoykin'} /* img={mashkovtsev} */ jobTitleTop={'Территориальное управление Лунёвское'} surname={'Понятойкин'} name={'Иван Николаевич'} />
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