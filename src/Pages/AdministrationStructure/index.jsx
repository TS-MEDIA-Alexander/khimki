import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './AdministrationStructure.module.css';

import СardAdministratiorStructure from '../../Components/СardAdministratiorStructure'

/* Фото */
import mayorPortrain from '../../assets/img/khimkiDistrict/mayorPortrain.png';
import clock from '../../assets/icons/clock.svg';
import ok from '../../assets/icons/ok.svg';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import SpoilerContainer from '../../Components/SpoilerContainer';
import SpoilerItem from '../../Components/SpoilerContainer/SpoilerItem';
/* Фотографии персон */
import lyovochka from '../../assets/img/khimkiDistrict/Persons/lyovochka.png';
import madatova from '../../assets/img/khimkiDistrict/Persons/madatova.png';
import yurkov from '../../assets/img/khimkiDistrict/Persons/yurkov.png';
import vatutina from '../../assets/img/khimkiDistrict/Persons/vatutina.png';
import batyshev from '../../assets/img/khimkiDistrict/Persons/batyshev.png';
import gureva from '../../assets/img/khimkiDistrict/Persons/gureva.png';
import zaytsev from '../../assets/img/khimkiDistrict/Persons/zaytsev.png';
import tsukanov from '../../assets/img/khimkiDistrict/Persons/tsukanov.png';
import petrukhin from '../../assets/img/khimkiDistrict/Persons/petrukhin.png';
import shpendik from '../../assets/img/khimkiDistrict/Persons/shpendik.png';
import mishina from '../../assets/img/khimkiDistrict/Persons/mishina.png';
import kapustina from '../../assets/img/khimkiDistrict/Persons/kapustina.png';
import genter from '../../assets/img/khimkiDistrict/Persons/genter.png';
import voronov from '../../assets/img/khimkiDistrict/Persons/voronov.png';
import mashkovtsev from '../../assets/img/khimkiDistrict/Persons/mashkovtsev.png';
import poznyakova from '../../assets/img/khimkiDistrict/Persons/poznyakova.png';
import pashin from '../../assets/img/khimkiDistrict/Persons/pashin.png';
import shipov from '../../assets/img/khimkiDistrict/Persons/shipov.png';
import prekrasa from '../../assets/img/khimkiDistrict/Persons/prekrasa.png';



const AdministrationStructure = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 ${s.breadcrumbs}`}>
               <span className={s.breadcrumbsFrom}>Округ</span>
               <span className={s.breadcrumbsTo}> / Структура администрации </span>
            </div>
            <div className={`mt24 ${s.title}`}>Структура администрации </div>
            <div className={`mt80 borderMain ${s.card}`}>
               <div className={s.portrainContainer}>
                  <img src={mayorPortrain} alt="" />
               </div>
               <div className={s.rightContainer}>
                  <div className={s.cardSubtitle}>Глава городского округа </div>
                  <div className={`mt8 ${s.cardSurname}`}>Волошин</div>
                  <div className={s.cardName}>Дмитрий Владимирович</div>
                  <div className={`mt8 ${s.citation}`}>Чуткая и открытая власть — принцип, которым мы руководствуемся в нашей командной работе. Наш округ — живой организм. Он развивается, растет, меняется... Возникают новые потребности, что-то приходит в негодность, требует ремонта или замены. Без помощи жителей невозможно сделать действительно комфортный и безопасный для проживания округ. Только вместе мы сможем оперативно решать возникающие проблемы. Комплексный подход ко всему приведет нас к общему успеху. Я прошу использовать все каналы связи для общения: телефоны горячей линии, электронную почту, социальные сети. Мы приняли меры, чтобы обращения жителей решались еще более оперативно. Работает круглосуточная горячая линия во всех микрорайонах округа. Я лично просматриваю свою электронную почту. Мы открыты для общения в любое время. Качественно повысить уровень жизни химчан — наша основная задача. Только реальные дела, только работа на результат!</div>
                  <div className={`mt8 ${s.cardMoreDetails}`}>Подробнее</div>
                  <div className={`mt48 ${s.cardBtnRow}`}>
                     <div className={`btnY ${s.virtualBtn}`}>Виртуальная приемная </div>
                     <div className={s.cardTel}>+7 (495) 793-01 01
                        <div className={s.cardBtnImgContainer}><img src={clock} alt="" /></div>
                        <div className={s.schedule}>Круглосуточно </div>
                     </div>
                     <div className={s.cardBtnLink}><img src={ok} alt="" /></div>
                     <div className={s.cardBtnLink}><img src={vk} alt="" /></div>
                     <div className={s.cardBtnLink}><img src={telegram} alt="" /></div>
                  </div>
               </div>
            </div>

            <div className="mt80">
               <SpoilerContainer title={'Ознакомьтесь со структурой администрации'}>
                  <SpoilerItem title={'Заместители Главы городского округа'}>
                     <div className="mt40">
                        <СardAdministratiorStructure img={lyovochka} jobTitle={'Первый заместитель Главы городского округа'} surname={'Лёвочка'} name={'Родион Сергеевич'} />
                        <СardAdministratiorStructure img={madatova} jobTitle={'Первый заместитель Главы городского округа'} surname={'Мадатова'} name={'Кристина Артуровна'} />
                     </div>
                     <div className="mt20">
                        <СardAdministratiorStructure img={yurkov} jobTitle={'Заместитель Главы городского округа по вопросам жилищно-коммунального хозяйства'} surname={'Юрков'} name={'Денис Анатольевич'} />
                        <СardAdministratiorStructure img={vatutina} jobTitle={'Заместитель Главы городского округа по вопросам социальной политики, культуры и спорта'} surname={'Ватутина'} name={'Анна Эдуардовна '} />
                        <СardAdministratiorStructure img={batyshev} jobTitle={'Заместитель Главы городского округа по вопросам благоустройства'} surname={'Батышев'} name={'Николай Николаевич'} />
                        <СardAdministratiorStructure img={gureva} jobTitle={'Заместитель Главы городского округа – начальник Финансового управления'} surname={'Гурьева'} name={'Наталия Николаевна'} />
                     </div>
                     <div className="mt20">
                        <СardAdministratiorStructure img={zaytsev} jobTitle={'Заместитель Главы городского округа по работе со средствами массовой информации, территориальному развитию и молодежной политике'} surname={'Зайцев'} name={'Андрей Валерьевич'} />
                        <СardAdministratiorStructure img={tsukanov} jobTitle={'Заместитель Главы городского округа по территориальной безопасности, взаимодействию с правоохранительными органами и противодействию коррупции'} surname={'Цуканов'} name={'Александр Геннадьевич '} />
                     </div>
                  </SpoilerItem>
                  <div className="mt48">
                     <SpoilerItem title={'Советник Главы городского округа'}>
                        <div className="mt40">
                           <СardAdministratiorStructure surname={'Багдиян'} name={'Юлия Эдуардовна '} />
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt48">
                     <SpoilerItem title={'Территориальные управления'}>
                        <div className="mt40">
                           <СardAdministratiorStructure img={petrukhin} jobTitleTop={'Территориальное управление микрорайонов Сходня - Фирсановка'} surname={'Петрухин'} name={'Сергей Сергеевич '} />
                           <СardAdministratiorStructure img={shpendik} jobTitleTop={'Территориальное управление микрорайонов Новогорск-Планерная'} surname={'Шпендик'} name={'Ярослав Олегович'} />
                           <СardAdministratiorStructure img={mishina} jobTitleTop={'Территориальное управление микрорайона Левобережный'} surname={'Мишина'} name={'Наталья Владимировна '} />
                           <СardAdministratiorStructure img={kapustina} jobTitleTop={'Территориальное управление микрорайона Подрезково'} surname={'Капустина'} name={'Людмила Юрьевна '} />
                        </div>
                        <div className="mt20">
                           <СardAdministratiorStructure img={genter} jobTitleTop={'Территориальное управление микрорайона Клязьма - Старбеево'} surname={'Гентер'} name={'Анна Сергеевна  '} />
                           <СardAdministratiorStructure img={voronov} jobTitleTop={'Территориальное управление Кутузовское'} surname={'Воронов'} name={'Дмитрий Александрович '} />
                           <СardAdministratiorStructure img={mashkovtsev} jobTitleTop={'Территориальное управление Лунёвское'} surname={'Машковцев'} name={'Эдуард Александрович '} />
                        </div>
                     </SpoilerItem>
                  </div>
                  <div className="mt48">
                     <SpoilerItem title={'Структурные подразделения в подчинении Главы'}>
                        <div className="mt40">
                           <СardAdministratiorStructure img={poznyakova} jobTitle={'Управление "Аппарат Администрации городского округа и кадровой политики"'} surname={'Познякова'} name={'Ирина Александровна'} />
                           <СardAdministratiorStructure img={pashin} jobTitle={'Управление делами и контроля'} surname={'Пашин'} name={'Василий Вадимович'} />
                           <СardAdministratiorStructure img={shipov} jobTitle={'Контрольно - ревизионное управление'} surname={'Шипов'} name={'Олег Николаевич'} />
                           <СardAdministratiorStructure img={prekrasa} jobTitle={'Управление правового обеспечения и судебно-претензионной работы'} surname={'Прекраса'} name={'Ольга Николаевна'} />
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