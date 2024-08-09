import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './Contacts.module.css';

import img_yellow from '../../assets/img/Persons/img_yellow.png';

import tg from '../../assets/icons/telegram.svg';
import vk from '../../assets/icons/vk.svg';
import MayorCard from '../../Components/MayorCard';
import ContactBanner from '../../Components/ContactBanner';

import skhodnya_firsanovka from '../../assets/img/contacts/skhodnya_firsanovka.svg';

const Contacts = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className="mt80 pageTitle">Контакты</div>
            <div className={`mt80 borderMain ${s.card}`}>
               <div className={s.imgContainer}>
                  <img src={img_yellow} alt="" />
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

                  <div className="mt20 pageSubtitle">Единый контактный номер </div>
                  <div className="mt20">Режим работы: Круглосуточно</div>

                  <div className="mt16 oval">+7 (495) 572-65-00</div>

                  <div className="mt20 line"></div>

                  <div className="mt20 pageSubtitle">«Горячая линия» </div>

                  <div className="mt20">Режим работы: Круглосуточно</div>
                  <div className="mt16 oval">+7 (495) 793-01-01</div>

                  <div className="mt20 line"></div>

                  <div className="mt20 pageSubtitle">Социальные сети</div>
                  <div className="flexContainer">
                     <div className={`mt16 oval ${s.btn}`}><img src={tg} alt="" />Телеграм</div>
                     <div className={`mt16 oval ${s.btn}`}><img src={vk} alt="" />Вконтакте</div>
                  </div>
               </div>
            </div>

            <MayorCard />

            <div className={`mt80 pageSubtitle ${s.textCenter}`}>Территориальные управления городского округа</div>

            <div className="mt40">
               <ContactBanner
                  img={skhodnya_firsanovka}
                  title={'Территориальное управлениемикрорайона Сходня - Фирсановка'}
                  name={'Петрухин'}
                  subtitle={'Сергей Сергеевич'}
                  info={'Горячая линия главы округа: '}
                  WorkingHours={'Режим работы: Пн-Пт 09:00-18:00'}
                  tel={'+7 (495) 574-72-67'}
                  mail={' sf_ta@admhimki.ru'}
               />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default Contacts;