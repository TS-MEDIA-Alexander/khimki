import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './AuthorityFeldHandlingAnimalsWithoutOwners.module.css';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const AuthorityFeldHandlingAnimalsWithoutOwners = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.activity.main} className='breadcrumbsFrom'>Округ</NavLink>
               <span className='breadcrumbsTo'> / Полномочия в области обращения с животными
                  без владельцев</span>
            </div>
            <h1 className={`mt24 pageTitle`}>
               <p>Полномочия в области</p>
               <p>обращения с животными</p>
               <p>без владельцев</p>
            </h1>


            <div className={`mt80 pageSubtitle`}>Правовое регулирование</div>

            <div className={`mt40 borderMain ${s.border}`}>
               <DocumentContainerDownload type={'PDF'} text='Федеральный закон от 27.12.2018 № 498-ФЗ «Об ответственном обращении с животными и о внесении изменений в отдельные законодательные акты Российской Федерации»' date="06.02.2023 " />
               <DocumentContainerDownload type={'PDF'} text='Закон Московской области № 201/2016-ОЗ «О наделении органов местного самоуправления муниципальных образований Московской области отдельными государственными полномочиями Московской области в области обращения с животными без владельцев» ' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Распоряжение Министерства сельского хозяйства и продовольствия Московской области от 27.12.2019 № 20РВ-436 "Об утверждении Порядка осуществления деятельности по обращению с животными без владельцев на территории Московской области"' date="06.02.2023" />
               <DocumentContainerDownload type={'PDF'} text='Распоряжение Министерства сельского хозяйства и продовольствия Московской области от 27.12.2019 № 20РВ-437 "Об утверждении Порядка по организации деятельности приютов для животных и установлению норм содержания животных в них на территории Московской области"' date="06.02.2023" />

            </div>
            <div className={` text`}>
               <div className="mt40 pageSubtitle">Общие правила поведения с животными без владельцев</div>
               <div className="mt38 fw600">Уважаемые граждане! </div>
               <p className='mt38'>
                  Просим внимательно ознакомиться с правилами поведения с животными без владельцев!
               </p>

               <ol className='mt38'>
                  <li>
                     Нельзя подходить к животным без владельцев.
                  </li>
                  <li>
                     Нельзя подходить к животным с потомством, так как они могут защищать его и проявить агрессию по отношению к Вам.
                  </li>
                  <li>
                     Нельзя дразнить животных без владельцев.
                  </li>
                  <li>
                     Если собака сердится (показывает зубы, рычит), нельзя убегать. Лучше остановиться, не делать резких движений. Удаляться нужно медленно, не поворачиваясь к собаке спиной, при этом наблюдая за поведением собаки.
                  </li>
               </ol>


               <div className="mt38 fw600">Если Вас укусили, то:</div>

               <ul className='mt38'>
                  <li>
                     промойте место укуса водой с мылом;
                  </li>
                  <li>
                     если рана кровоточит, наложите повязку, чтобы остановить кровотечение;
                  </li>
                  <li>
                     по возможности быстро обратитесь в травмпункт или вызовите «Скорую помощь»
                  </li>
               </ul>

               <div className="mt38 pageSubtitle">Приюты для животных</div>

               <p>
                  Получить подробную информацию, ознакомиться со списком приютов Московской области Вы можете на сайте Министерства сельского хозяйства и продовольствия Московской области «ПРИЮТЫ МОСКОВСКОЙ ОБЛАСТИ».
               </p>

               <div className="mt38 oval">Сайт Министерства сельского хозяйства</div>

            </div>

            <div className="mt40 subTitle">Разъяснительная работа с населением</div>

            <div className={`mt40 borderMain ${s.border}`}>
               <DocumentContainerDownload text='1. Листовка  «Забери друга из приюта»' date=" 06.02.2023 " />
               <DocumentContainerDownload text='2. Листовка  «Чипирование домашних животных»' date=" 06.02.2023 " />
               <DocumentContainerDownload text='3. Листовка  «Не бросайте животных на даче»' date=" 06.02.2023 " />
               <DocumentContainerDownload text='4. Листовка  «Бешенство»' date=" 06.02.2023 " />
               <DocumentContainerDownload text='5. Листовка  «Регулирование численности животных без владельцев»' date=" 06.02.2023 " />
               <DocumentContainerDownload text='6. Листовка  «Собака с биркой - привита»' date=" 06.02.2023 " />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default AuthorityFeldHandlingAnimalsWithoutOwners;
