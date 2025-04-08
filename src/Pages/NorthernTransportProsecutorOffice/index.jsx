import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './NorthernTransportProsecutorOffice.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import CardHuman from '../../Components/CardHuman';

import vk from '../../assets/icons/vk.svg';
import ok from '../../assets/icons/ok.svg';
import tg from '../../assets/icons/telegram.svg';

import card_img_1 from '../../assets/img/prosecutorOffice/card_img_1.png';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const NorthernTransportProsecutorOffice = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.prosecutorOffice.main} className='breadcrumbsFrom'>Прокуратура</NavLink>
               <span className='breadcrumbsTo'> / Северная транспортная прокуратура</span>
            </div>
            <h1 className={`mt24 pageTitle`}>
               <p>Северная транспортная</p>
               прокуратура
            </h1>
            <div className="mt80">
               <CardHuman
                  jobTitle={'Северный транспортный прокурор'}
                  name={'Третьяков'}
                  surname={'Илья Анатольевич'}
                  adress={'07140, г. Москва, ул. 2-я Леснорядская, д.13/15, 3 этаж'}
                  WorkingHours={'Пн-Чт 09:00 – 13:00 14:00 – 18:00, Пт 09:00 – 13:00 14:00 – 16:45'}
                  contactsArr={['+7(499) 264-49-61', 'sevt@190.mailop.ru', 'epp.genproc.gov.ru']}
                  img={card_img_1}
               />
            </div>

            <div className={`mt80 borderMain ${s.border}`}>
               <DocumentContainerDownload type={'PDF'} text='Предметы, запрещенные к перевозке на борту воздушного судна' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Требования к предоставлению услуг перевозки воздушным транспортом инвалидам и другим лицам с ограничениями жизнедеятельности' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='График приема граждан в Московской прокуратуре по надзору за исполнением законов на воздушном и водном транспорте' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Порядок рассмотрения обращений граждан' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Северной транспортной прокуратурой приняты меры, направленные на устранение нарушений законодательства в сфере социальной поддержки инвалидов' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Собственник жилого помещения не должен нарушать права и законные интересы соседей' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Основания для проверки субъекта предпринимательской деятельности' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Положена ли выплата выходного пособия или среднего заработка работнику при увольнении в связи с прекращением деятельности индивидуального предпринимателя' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='С 8 декабря 2017 г. слово «проступок», которое использовалось в статьях 242 и 243 Трудового кодекса Российской Федерации Федеральным законом от 27.11.2017 № 359-ФЗ заменено словом «административное правонарушение»' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Конституционный суд РФ о праве на уплату административного штрафа в размере половины от назначенной суммы' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Порядок обжалования прокурором вступивших в законную силу судебных постановлений по делам об административных правонарушениях' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Ответственность, предусмотренная за неуплату административного штрафа' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='С 1 января 2018 г. в Уголовный кодекс Российской Федерации вводится новая статья – «Статья 274.1. Неправомерное воздействие на критическую информационную инфраструктуру Российской Федерации»' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='С 31 декабря 2017 года вступает в силу федеральный конституционный закон от 20.12.2017 N 4-ФКЗ, которым внесены изменения в ст. 7 Федерального конституционного закона «О Государственном гербе Российской Федерации»' date={'06.02.2023'} />
               <DocumentContainerDownload type={'PDF'} text='Выборы Президента РФ в 2018 году пройдут по новым правилам' date={'06.02.2023'} />
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default NorthernTransportProsecutorOffice;
