import React from 'react';
import planet from '../../assets/icons/planet.svg';
import s from './PoliticsCookie.module.css';

import ContantContainerMain from '../../total/ContantContainerMain';

const PoliticsCookie = (props) => {
   
   return (
      <div>
         <ContantContainerMain>
            <div className="mt24 pageTitle">
               Политика Cookie
            </div>

            <div className="text">
               <div className={`mt80 ${s.pageSubtitle}`}>Этот сайт использует сервис веб-аналитики Яндекс Метрика, предоставляемый компанией ООО «ЯНДЕКС», 119021, Россия, Москва, ул. Л. Толстого, 16 (далее — Яндекс).</div>
               <p>
                  Сервис Яндекс Метрика использует технологию «cookie» — небольшие текстовые файлы, размещаемые на компьютере пользователей с целью анализа их пользовательской активности.
               </p>
               <p>
                  Собранная при помощи cookie информация не может идентифицировать вас, однако может помочь нам улучшить работу нашего сайта. Информация об использовании вами данного сайта, собранная при помощи cookie, будет передаваться Яндексу и храниться на сервере Яндекса в ЕС и Российской Федерации. Яндекс будет обрабатывать эту информацию для оценки использования вами сайта, составления для нас отчетов о деятельности нашего сайта, и предоставления других услуг. Яндекс обрабатывает эту информацию в порядке, установленном в условиях использования сервиса Яндекс Метрика.
               </p>
               <p>
                  Вы можете отказаться от использования cookies, выбрав соответствующие настройки в браузере. Также вы можете использовать инструмент:
               </p>
               <a href={'https://yandex.ru/support/metrica/general/opt-out.html'} target="_blank" className="mt38 oval"><img src={planet} alt="" /> Блокировщик Яндекс Метрики</a>
               <p>
                  Однако это может повлиять на работу некоторых функций сайта. Используя этот сайт, вы соглашаетесь на обработку данных о вас Яндексом в порядке и целях, указанных выше.
               </p>
            </div>
         </ContantContainerMain>
      </div>
   )
}
export default PoliticsCookie;