import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Contacts.module.css';

import img_yellow from '../../assets/img/Persons/img_yellow.png';
import img_yellow_mobil from '../../assets/img/Persons/img_yellow_mobil.png';

import tg from '../../assets/icons/telegram.svg';
import vk from '../../assets/icons/vk.svg';
import MayorCard from '../../Components/MayorCard';
import ContactBanner from '../../Components/ContactBanner';

import skhodnya_firsanovka from '../../assets/img/contacts/skhodnya_firsanovka.svg';
import podrezkovo from '../../assets/img/contacts/podrezkovo.svg';
import klyazma_starbeevo from '../../assets/img/contacts/klyazma_starbeevo.svg';
import kutuzovskoe from '../../assets/img/contacts/kutuzovskoe.svg';
import lunevskoe from '../../assets/img/contacts/lunevskoe.svg';
import CardHuman from '../../Components/CardHuman';

import governor from "../../assets/img/Persons/vorobiev.png";

const Contacts = (props) => {

   const isMobil = window.innerWidth < 746;

   return (
      <div>
         <ContantContainerMain>
            <div className="mt80 pageTitle">Контакты</div>
            <div className={`mt80 borderMain ${s.card}`}>
               <div className={s.imgContainer}>
                  <img src={isMobil ? img_yellow_mobil : img_yellow} alt="" />
               </div>
               <div className={s.textBlock}>
                  <div className={`pageSubtitle ${s.pageSubtitile}`}>Администрация городского округа Химки </div>
                  <div className={`mt20 ${s.description}`}>Московская обл., г.о. Химки, ул. Московская, д.15, ул. Калинина, д. 4</div>
                  <div className={`mt20 ${s.description}`}>График работы:</div>
                  <div className={`mt8 ${s.scheduleItem}`}>понедельник <div className={`ml20 ${s.timeItem}`}>09:00 – 18:00, <span className={s.description}>перерыв</span> 13:00 – 13:45 </div></div>
                  <div className={`mt8 ${s.scheduleItem}`}>вторник <div className={`ml20 ${s.timeItem}`}>09:00 – 18:00, <span className={s.description}>перерыв</span> 13:00 – 13:45 </div></div>
                  <div className={`mt8 ${s.scheduleItem}`}>среда <div className={`ml20 ${s.timeItem}`}>09:00 – 18:00, <span className={s.description}>перерыв</span> 13:00 – 13:45 </div></div>
                  <div className={`mt8 ${s.scheduleItem}`}>четверг <div className={`ml20 ${s.timeItem}`}>09:00 – 18:00, <span className={s.description}>перерыв</span> 13:00 – 13:45 </div></div>
                  <div className={`mt8 ${s.scheduleItem}`}>пятница <div className={`ml20 ${s.timeItem}`}>09:00 – 18:00, <span className={s.description}>перерыв</span> 13:00 – 13:45 </div></div>
                  <div className={`mt8 ${s.scheduleItem}`}><span className={s.description}>суббота</span> <div className={`ml20 ${s.timeItem}`}><span className={s.description}>выходной</span></div></div>
                  <div className={`mt8 ${s.scheduleItem}`}><span className={s.description}>воскресенье</span> <div className={`ml20 ${s.timeItem}`}><span className={s.description}>выходной</span></div></div>

                  <div className="mt20 line"></div>

                  {/* <div className="mt20 pageSubtitle">Единый контактный номер </div>
                  <div className="mt20">Режим работы: Круглосуточно</div>

                  <a href={`tel: +7 (495) 572-65-00`} className={`mt16 oval ${s.tel}`}>+7 (495) 572-65-00</a>

                  <div className="mt20 line"></div> */}

                  <div className="mt20 pageSubtitle">«Горячая линия» </div>

                  <div className="mt20">Режим работы: Круглосуточно</div>
                  <a href="tel:+74957930101" className={`mt16 oval ${s.tel}`}>
                     +7 (495) 793-01-01
                  </a>

                  <div className="mt20 line"></div>

                  <div className="mt20 pageSubtitle">Социальные сети</div>
                  <div className="flexContainer">
                     <a href='https://t.me/adm_himki' target='_blank' className={`mt16 oval ${s.btn}`} rel="noreferrer"><img src={tg} alt="" />Телеграм</a>
                     <a href='https://vk.com/gohimkiadm' target='_blank' className={`mt16 oval ${s.btn}`} rel="noreferrer"><img src={vk} alt="" />Вконтакте</a>
                  </div>
               </div>
            </div>

            <MayorCard />

            <div className={`mt80 pageSubtitle ${s.textCenter}`}>Территориальные управления городского округа</div>

            <div className={`mt40 ${s.cardBannerContainer}`}>
               <ContactBanner
                  img={skhodnya_firsanovka}
                  title={'Территориальное управление микрорайона Сходня - Фирсановка'}
                  name={'Петрухин'}
                  subtitle={'Сергей Сергеевич'}
                  WorkingHours={'Пн-Пт 09:00-18:00'}
                  tel={['+7 (985) 634-43-91', '+7 (495) 574-72-67']}
                  mail={'sf_ta@admhimki.ru'}
                  url={'petrukhin'}
               />
               {/* <ContactBanner
                  title={'Территориальное управление микрорайонов Новогорск-Планерная'}
                  name={'Шпендик'}
                  subtitle={'Ярослав Олегович'}
                  WorkingHours={'Пн-Пт 09:00-18:00'}
                  tel={'+7 (495) 571-01-40'}
                  mail={'np_ta@admhimki.ru'}
               /> */}
               <ContactBanner
                  title={'Территориальное управление микрорайонов Новогорск – Планерная'}
                  name={'Понятойкин'}
                  subtitle={'Иван Николаевич'}
                  WorkingHours={'Пн-Пт 09:00-18:00'}
                  tel={['+7 (985) 634-67-97', '+7 (495) 571-01-40']}
                  mail={'np_ta@admhimki.ru'}
                  url={'mishina'}
               />

               <ContactBanner
                  title={'Территориальное управление микрорайона Левобережный'}
                  name={'Капустина'}
                  subtitle={'Людмила Юрьевна'}
                  WorkingHours={'Пн-Пт 09:00-18:00'}
                  tel={['+7 (985) 439-18-20', '+7 (495) 570-34-98']}
                  mail={'lv_ta@admhimki.ru'}
                  url={'kapustina'}
               />
               <ContactBanner
                  img={klyazma_starbeevo}
                  title={'Территориальное управление микрорайона Клязьма - Старбеево'}
                  name={'Гентер'}
                  subtitle={'Анна Сергеевна'}
                  WorkingHours={'Пн-Пт 09:00-18:00'}
                  tel={['+7 (985) 634-75-39', '+7 (495) 572-83-88']}
                  mail={'ks_ta@admhimki.ru'}
                  url={'genter'}
               />
               <ContactBanner
                  img={kutuzovskoe}
                  title={'Территориальное управление Кутузовское'}
                  name={'Мазуров'}
                  subtitle={'Дмитрий Николаевич'}
                  WorkingHours={'Пн-Пт 09:00-18:00'}
                  tel={['+7 (985) 634-45-08', '+7 (495) 572-32-28']}
                  mail={'kutuzovskoe@admhimki.ru'}
               />
               <ContactBanner
                  img={lunevskoe}
                  title={'Территориальное управление Лунёвское'}
                  name={'Конова'}
                  subtitle={'Вера Николаевна'}
                  WorkingHours={'Пн-Пт 09:00-18:00'}
                  tel={['+7 (985) 634-73-93']}
                  mail={'lunevo@admhimki.ru'}
               />
               <ContactBanner
                  img={podrezkovo}
                  title={'Территориальное управление микрорайона Подрезково'}
                  name={'Мишина'}
                  subtitle={'Наталья Владимировна'}
                  WorkingHours={'Пн-Пт 09:00-18:00'}
                  tel={['+7 (985) 634-47-62']}
                  mail={'pd_ta@admhimki.ru'}
               />
            </div>

            {/* <div className={`mt80 pageSubtitle ${s.textCenter}`}>Горячие линии ведомств</div>
            <div className={`mt40 ${s.cardBannerContainer}`}>
               <div className={`borderMain ${s.cardHotline}`}>
                  <div className={s.title}>«Горячая линия» по вопросам незаконной торговли алкоголем, фактам незаконного игорного бизнеса, незаконной торговли</div>
                  <div className={`mt40 ${s.description}`}>Режим работы: <span className={s.date}>Пн-Чт 09:00-18:00, Пт 09:00-16:45</span></div>
                  <div className={`mt16 flexContainer ${s.mobilFlexContainer}`}>
                     <a href={`tel: +7 (495) 572-65-00`} className={`oval ${s.tel}`}>+7 (495) 572-65-00</a>
                     <div className="ml16 oval">hotline@admhimki.ru</div>
                  </div>
               </div>
               <div className={`borderMain ${s.cardHotline}`}>
                  <div className={s.title}>«Горячая линия» по вопросам незаконной торговли алкоголем, фактам незаконного игорного бизнеса, незаконной торговли</div>
                  <div className={`mt40 ${s.description}`}>Режим работы: <span className={s.date}>Пн-Чт 09:00-18:00, Пт 09:00-16:45</span></div>
                  <div className={`mt16 flexContainer ${s.mobilFlexContainer}`}>
                     <a href={`tel: +7 (495) 572-65-00`} className={`oval ${s.tel}`}>+7 (495) 572-65-00</a>
                     <div className="ml16 oval">hotline@admhimki.ru</div>
                  </div>
               </div>
            </div>
            <div className={`mt20 ${s.cardBannerContainer}`}>
               <div className={`borderMain ${s.cardHotline}`}>
                  <div className={s.title}>«Горячая линия» по вопросам незаконной торговли алкоголем, фактам незаконного игорного бизнеса, незаконной торговли</div>
                  <div className={`mt40 ${s.description}`}>Режим работы: <span className={s.date}>Пн-Чт 09:00-18:00, Пт 09:00-16:45</span></div>
                  <div className={`mt16 flexContainer ${s.mobilFlexContainer}`}>
                     <a href={`tel: +7 (495) 572-65-00`} className={`oval ${s.tel}`}>+7 (495) 572-65-00</a>
                     <div className="ml16 oval">hotline@admhimki.ru</div>
                  </div>
               </div>
               <div className={`borderMain ${s.cardHotline}`}>
                  <div className={s.title}>«Горячая линия» по вопросам незаконной торговли алкоголем, фактам незаконного игорного бизнеса, незаконной торговли</div>
                  <div className={`mt40 ${s.description}`}>Режим работы: <span className={s.date}>Пн-Чт 09:00-18:00, Пт 09:00-16:45</span></div>
                  <div className={`mt16 flexContainer ${s.mobilFlexContainer}`}>
                     <a href={`tel: +7 (495) 572-65-00`} className={`oval ${s.tel}`}>+7 (495) 572-65-00</a>
                     <div className="ml16 oval">hotline@admhimki.ru</div>
                  </div>
               </div>
            </div> */}

            <div className={`mt80 pageSubtitle ${s.textCenter}`}>Правительство Московской области</div>
            <CardHuman
               jobTitle='Губернатор Московской области'
               name='Воробьев'
               surname='Андрей Юрьевич'
               info='Контакты для обращения граждан:'
               adress='Московская область, г. Красногорск, бульвар Строителей, д.1'
               contactsArr={['+7 (800) 550-50-30', 'andreyvorobiev@mosreg.ru', 'amo@mosreg.ru', 'mosreg.ru']}
               img={governor}
            />
         </ContantContainerMain>
      </div>
   )
}
export default Contacts;