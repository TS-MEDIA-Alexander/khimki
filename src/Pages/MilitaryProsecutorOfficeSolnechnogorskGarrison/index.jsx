import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './MilitaryProsecutorOfficeSolnechnogorskGarrison.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import CardHuman from '../../Components/CardHuman';

import vk from '../../assets/icons/vk.svg';
import ok from '../../assets/icons/ok.svg';
import tg from '../../assets/icons/telegram.svg';

import card_img_2 from '../../assets/img/prosecutorOffice/card_img_2.png';
import DocumentContainerDownload from '../../Components/DocumentContainerDownload';

const MilitaryProsecutorOfficeSolnechnogorskGarrison = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt80 breadcrumbs`}>
               <NavLink to={ROUTER.prosecutorOffice.main} className='breadcrumbsFrom'>Прокуратура</NavLink>
               <span className='breadcrumbsTo'> / Военная прокуратура солнечногорского гарнизона</span>
            </div>
            <div className={`mt24 pageTitle`}>
               <p>Военная прокуратура</p>
               солнечногорского гарнизона </div>
            <div className="mt80">
               <CardHuman
                  jobTitle={'Военный прокурор солнечногорского гарнизона - полковник юстиции'}
                  name={'Зарудницкий'}
                  surname={'Юрий Владимирович'}
                  adress={'Московская область, г. Химки, ул. Чапаева, д.6.'}
                  WorkingHours={'Пн-Пт 09:00 – 13:0014:00 – 18:00'}
                  contactsArr={['8 (495) 572-01-39']}
                  img={card_img_2}
               />
            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Статьи<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Нормативно-правовые акты<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Результаты работы военной прокуратуры гарнизона<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Новости<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>

            <div className={`mt80 borderMain ${s.border}`}>
               <DocumentContainerDownload type={'PDF'} text='Порядок актуализации документов воинского учета' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Дополнительные гарантии добровольцам' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Гарантии для отдельных категорий граждан приграничных регионов' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Гарантии для отдельных категорий граждан приграничных регионов' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Ужесточена ответственность за нарушение воинского учета' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Скорректированы некоторые вопросы деятельности войск национальной гвардии' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Эксперимент по обжалованию решений об отказе в поступлении на военную службу по контракту' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Упрощен порядок назначения выплат по ранению' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Изменения в сроках призыва на военную службу и организации общественного порядка' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Дополнительный отпуск военнослужащим, имеющим детей-инвалидов' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Двойное гражданство – основание для лишения допуска к государственной тайне' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Изменения в порядке мобилизации' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Члены семей погибших военнослужащих не будут возвращать военную ипотеку' date={'06.02.2023'}/>
               <DocumentContainerDownload type={'PDF'} text='Изменения в воинском учете' date={'06.02.2023'}/>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default MilitaryProsecutorOfficeSolnechnogorskGarrison;