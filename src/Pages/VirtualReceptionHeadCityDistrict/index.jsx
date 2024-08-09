import React from 'react';
import s from './VirtualReceptionHeadCityDistrict.module.css';

import ContantContainerMain from '../../total/ContantContainerMain';
import { ROUTER } from '../../config';
import { NavLink } from 'react-router-dom';

import virtual_reception_head_city_district from '../../assets/img/citizensAppeals/virtual_reception_head_city_district.png';
import inverted_exclamation_mark from '../../assets/icons/inverted_exclamation_mark.svg';

const VirtualReceptionHeadCityDistrict = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.citizensAppeals.main} className='breadcrumbsFrom'>Обращения граждан</NavLink>
               <span className='breadcrumbsTo'> / Виртуальная приемная Главы городского округа</span>
            </div>
            <div className="mt24 pageTitle">Виртуальная приемная Главы <br /> городского округа</div>
            <div className={`mt40 ${s.imgContainer}`}>
               <img src={virtual_reception_head_city_district} alt="" />
            </div>
            <div className="mt80 text">
               <p>
                  Вы можете задать интересующий Вас вопрос, который находится в пределах полномочий Главы городского округа Химки Московской области.
               </p>
               <div className="mt38 pageSubtitle">Заполните форму</div>
               <div className="mt40">
                  <div className={s.flexContainer}>
                     <div className={s.inputContainer}>
                        <div className={`${s.titleInput}`}>Фамилия</div>
                        <input type="text" className={`mt8 ${s.input}`} />
                     </div>
                     <div className={s.inputContainer}>
                        <div className={`${s.titleInput}`}>Имя</div>
                        <input type="text" className={`mt8 ${s.input}`} />
                     </div>
                  </div>
                  <div className={`mt32 ${s.flexContainer}`}>
                     <div className={s.inputContainer}>
                        <div className={`${s.titleInput}`}>Отчество</div>
                        <input type="text" className={`mt8 ${s.input}`} />
                     </div>
                  </div>
               </div>
               <div className={`mt48 ${s.line}`}></div>
               <div className={`mt48 ${s.flexContainer}`}>
                  <div className={s.inputContainer}>
                     <div className={`${s.titleInput}`}>Населённый пункт</div>
                     <input type="text" className={`mt8 ${s.input}`} />
                  </div>
                  <div className={s.inputContainer}>
                     <div className={`${s.titleInput}`}>Улица</div>
                     <input type="text" className={`mt8 ${s.input}`} />
                  </div>
               </div>
               <div className={`mt32 ${s.flexContainer}`}>
                  <div className={s.inputContainer}>
                     <div className={`${s.titleInput}`}>Дом</div>
                     <input type="text" className={`mt8 ${s.input}`} />
                  </div>
                  <div className={s.flexInputMin}>
                     <div className={`${s.inputContainer}`}>
                        <div className={`${s.titleInput}`}>Корпус</div>
                        <input type="text" className={`mt8 ${s.input}  ${s.input_min}`} />
                     </div>
                     <div className={`ml16 ${s.inputContainer}`}>
                        <div className={`${s.titleInput}`}>Квартира</div>
                        <input type="text" className={`mt8 ${s.input}  ${s.input_min}`} />
                     </div>
                  </div>
               </div>
               <div className={`mt48 ${s.line}`}></div>
               <div className={`mt48 ${s.flexContainer}`}>
                  <div className={s.inputContainer}>
                     <div className={`${s.titleInput}`}>Электронная почта</div>
                     <input type="text" className={`mt8 ${s.input}`} />
                  </div>
                  <div className={s.inputContainer}>
                     <div className={`${s.titleInput}`}>Телефон</div>
                     <input placeholder='+7 (___) ___-__-__' type="text" className={`mt8 ${s.input}`} />
                  </div>
               </div>
               <div className={`mt48 ${s.titleInput}`}>Текст обращения</div>
               <textarea placeholder='Введите здесь Ваше обращение, при необходимости прикрепите файлы' className={`mt8 ${s.textarea}`} name="" id=""></textarea>
               <div className={`mt48 ${s.btn}`}>Прикрепить файл (файлы)</div>
               <div className={`mt48 ${s.description}`}>Внимание! Максимальное количество файлов 7, общий объём приложенных файлов не должен превышать - 20 МбДопустимые форматы: jpg, png, gif, bmp, doc, docx, xls, xlsx, pdf, txt, zip, rar, 7z</div>
               <div className="mt48 flexContainer">
                  <input type="checkbox" />
                  <div className={`ml16 ${s.description}`}>Я даю согласие на использование персональных данных</div>
               </div>

               <div className={`mt48 ${s.submit}`}>Отправить</div>

               <div className={`mt80 borderMain flexContainer ${s.description} ${s.descriptionContainer}`}>
                  <img src={inverted_exclamation_mark} alt="" />
                  <span>В соответствии с Федеральным законом от 02.05.2006 № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации» и законом Московской области от 05.10.2006 № 164/2006-03 «О рассмотрении обращений граждан» вопросы без указания личных данных считаются анонимными и будут удалены. Не будут рассматриваться обращения, содержащие нецензурные либо оскорбительные выражения, угрозы жизни, здоровью и имуществу должностного лица и членов его семьи, а также скрытую и явную рекламу. Конфиденциальность информации о персональных данных граждан, задавших вопрос в электронном виде, гарантируется Администрацией.</span>
               </div>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default VirtualReceptionHeadCityDistrict;