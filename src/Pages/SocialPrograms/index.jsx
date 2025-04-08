import React from 'react';
import s from './SocialPrograms.module.css';

import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';

import ContantContainerMain from '../../total/ContantContainerMain';
import CardHuman from '../../Components/CardHuman';

import img from '../../assets/img/activity/social_programs.png';
import imgMobil from '../../assets/img/activity/social_programs_mobil.png';
import card_companys from '../../assets/img/activity/card_companys.png';
import social_programs_statistics from '../../assets/img/activity/social_programs_statistics.png';
import CardCompanys from '../../Components/CardCompanys';

import SpoilerContainer from '../../Components/SpoilerContainer';
import SpoilerItem from '../../Components/SpoilerContainer/SpoilerItem';

const SocialPrograms = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Деятельность</NavLink>
               <span className='breadcrumbsTo'> / Социальные программы</span>
            </div>

            <h1 className="mt80 pageTitle">Социальные программы</h1>

            <div className="mt80 ">
               <CardHuman
                  jobTitle={'Социальная программа «Вместе»'}
                  subtitle={'Для получения подробной информации о реализации социальной программы «Вместе» вы можете обратиться муниципальное казенное учреждение городского округа Химки Московской области «Малый бизнес Химки».'}
                  adress={'Химки, пр-т Мельникова, д.12'}
                  contactsArr={['+7 (495) 255-39-06', 'info@mbh.htpp.ru']}
                  img={img}
                  imgMob={imgMobil}
                  btnSrc={'https://yandex.ru/maps/213/moscow/?ll=37.375600%2C55.928215&mode=usermaps&source=constructorLink&um=constructor%3A56065f73921fa2829764a4a1613a992b991d71faf6bb7e8ec57d55d816774896&z=13'}
                  btn={'Интерактивная карта по предприятиям социальной программы «Вместе»'}
                  btnStyle={{ background: '#AFC904', color: '#FFF' }}
               />
            </div>

            <div className={`mt80 ${s.border}`}>
               <div className={s.headerBlock}></div>
               <div className={s.contantContainer}>
                  <div className={`mt24 ${s.titleGreen}`}>Предоставление льготным категориям граждан, проживающим на территории городского округа Химки Московской области товаров и услуг по сниженным ценам</div>
                  <div className="mt40 pageSubtitle">Участки социальной программы «Вместе»</div>
                  <div className={`mt40 borderMain ${s.cardContainer}`}>
                     <div className={s.statisticsContainer}>
                        <div className={s.statistics}>
                           <div className={s.textRow}>
                              <div className={s.year}>2024г.</div>
                              <div className={s.textStatistics}>Пользователи программы </div>
                           </div>
                           <div className={`mt16 ${s.textRow}`}>
                              <div className={s.statisticsNumber}>58</div>
                              <div className={s.statisticsNumberText}>тыс. чел</div>
                           </div>
                        </div>
                        <div className={`mt16 ${s.statistics}`}>
                           <div className={s.textRow}>
                              <div className={s.year}>2024г.</div>
                              <div className={s.textStatistics}>Количество предприятий </div>
                           </div>
                           <div className={`mt16 ${s.textRow}`}>
                              <div className={s.statisticsNumber}>144</div>
                           </div>
                        </div>
                     </div>
                     <div className={s.imgContainer}>
                        <img src={social_programs_statistics} alt="" />
                     </div>
                  </div>

                  <div className="mt40 pageSubtitle">23 Льготные категории граждан социальной программы вместе</div>
                  <div className={`mt40 borderMain ${s.borderPreferentialCategories}`}>
                     <div className={s.column}>
                        <div className="fw600">1. Граждане, являющиеся пенсионерами из числа следующих категорий:</div>
                        <p className="mt38">1.1 Инвалиды Великой Отечественной войны.</p>
                        <p>1.2 Участники Великой Отечественной войны.</p>
                        <p>1.3 Вдовы участников и инвалидов Великой Отечественной войны.</p>
                        <p>1.4 Лица, награжденные медалью «За оборону Ленинграда».</p>
                        <p>1.5 Лица, награжденные знаком «Жителю блокадного Ленинграда».</p>
                        <p>1.6 Лица, награжденные медалью «За оборону Москвы».</p>
                        <p>1.7 Реабилитированные лица и лица, признанные пострадавшими от политических репрессий.</p>
                        <p>1.8 Бывшие несовершеннолетние узники концлагерей.</p>
                        <p>1.9 Ветераны, инвалиды боевых действий.</p>
                        <p>1.10 Почетные граждане городского округа Химки.</p>
                        <p>1.11 Герои РФ и Герои Социалистического труда.</p>
                        <p>1.12 Инвалиды.</p>
                        <p>1.13 Дети инвалиды.</p>
                        <p>1.14 Ветераны Великой Отечественной войны (труженики тыла)</p>
                        <p>1.15 Ветераны труда, являющиеся пенсионерами.</p>
                     </div>
                     <div className={s.column}>
                        <p>1.16 Ветераны военной службы (женщины, достигшие возраста 55 лет, мужчины 60 лет).</p>
                        <p>1.17 Граждане, пострадавшие вследствие воздействия радиации.</p>
                        <p>1.18 Пенсионеры, не имеющие льготного статуса,</p>
                        <p>получающие пенсию в соответствии с законодательством РФ, в т.ч. пенсионеры,</p>
                        <p>получающие пенсию по потери кормильца, пенсионеры силовых ведомств (женщины,</p>
                        <p>достигшие возраста 55 лет, мужчины 60 лет).</p>
                        <p>1.19 Вдовы граждан, пострадавших вследствие воздействия радиации.</p>
                        <p>1.20 Вдовы ветеранов и инвалидов боевых действий.</p>

                        <div className="mt38 fw600">2. Граждане, являющиеся пенсионерами из числа следующих категорий:</div>
                        <p className="mt38">2.1 Многодетные семьи.</p>
                        <p>2.2 Лица, награжденные знаком «Почетный Донор России» или «Почетный Донор СССР».</p>
                        <p>2.3 Ветераны боевых действий.</p>
                     </div>
                  </div>

                  <CardCompanys
                     jobTitle={'Размещение предприятий, участвующих в социальной программе «Вместе»'}
                     img={card_companys}
                     btn={'Интерактивная карта по предприятиям социальной программы «Вместе»'}
                     btnStyle={{ background: '#AFC904', color: '#FFF' }}
                  />
               </div>
            </div>

            <div className="mt80">
               <SpoilerContainer title={''}>
                  <a href="https://www.admhimki.ru/okrug/socialnye-programmy/socialnaya-programma-vmeste/o-socialnoj-programme-vmeste/" target="_blank" rel="noreferrer">
                     <SpoilerItem title={'О социальной программе «Вместе»'}></SpoilerItem>
                  </a>
                  <div className="mt24">
                     <a href="https://www.admhimki.ru/okrug/socialnye-programmy/socialnaya-programma-vmeste/preimushestva-uchastiya-v-socialnoj-programme-vmeste/" target="_blank" rel="noreferrer">
                        <SpoilerItem title={'Преимущества участия в социальной программе «Вместе»'}></SpoilerItem>
                     </a>
                  </div>
                  <div className="mt24">
                     <a href="https://www.admhimki.ru/okrug/socialnye-programmy/socialnaya-programma-vmeste/spisok-lgotnyh-kategorij-grazhdan/" target="_blank" rel="noreferrer">
                        <SpoilerItem title={'Список льготных категорий граждан'}></SpoilerItem>
                     </a>
                  </div>
                  <div className="mt24">
                     <a href="https://www.admhimki.ru/okrug/socialnye-programmy/socialnaya-programma-vmeste/adresa-raspolozheniya-socialnyh-obektov/" target="_blank" rel="noreferrer">
                        <SpoilerItem title={'Адреса расположения социальных объектов'}></SpoilerItem>
                     </a>
                  </div>
                  <div className="mt24">
                     <a href="https://www.admhimki.ru/okrug/socialnye-programmy/socialnaya-programma-vmeste/poryadok-vstupleniya-predprinimatelej-v-socialnuyu-programmu-vmeste/" target="_blank" rel="noreferrer">
                        <SpoilerItem title={'Порядок вступления предпринимателей в социальную программу «Вместе»'}></SpoilerItem>
                     </a>
                  </div>
                  <div className="mt24">
                     <a href="https://www.admhimki.ru/okrug/socialnye-programmy/socialnaya-programma-vmeste/perechen-produktov-pitaniya-v-socialnyh-magazinah/" target="_blank" rel="noreferrer">
                        <SpoilerItem title={'Перечень продуктов питания в социальных магазинах'}></SpoilerItem>
                     </a>
                  </div>
                  <div className="mt24">
                     <a href="https://www.admhimki.ru/okrug/socialnye-programmy/socialnaya-programma-vmeste/perechen-lekarstv-v-socialnyh-aptekah/" target="_blank" rel="noreferrer">
                        <SpoilerItem title={'Перечень лекарств в социальных аптеках'}></SpoilerItem>
                     </a>
                  </div>

               </SpoilerContainer>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default SocialPrograms;
