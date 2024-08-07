import React from 'react';
import ContantContainerMain from '../../total/ContantContainerMain';
import s from './ProsecutorOffice.module.css';

import { NavLink } from "react-router-dom";
import { ROUTER } from '../../config';
import arrow from '../../assets/icons/arrow_btn_link.svg';
import CardHuman from '../../Components/CardHuman';

import vk from '../../assets/icons/vk.svg';
import ok from '../../assets/icons/ok.svg';
import tg from '../../assets/icons/telegram.svg';

import card_img_1 from '../../assets/img/prosecutorOffice/card_img_1.png';
import card_img_2 from '../../assets/img/prosecutorOffice/card_img_2.png';
import card_img_3 from '../../assets/img/prosecutorOffice/card_img_3.png';
import card_img_4 from '../../assets/img/prosecutorOffice/card_img_4.png';
import card_img_5 from '../../assets/img/prosecutorOffice/card_img_5.png';
import card_img_6 from '../../assets/img/prosecutorOffice/card_img_6.png';

const ProsecutorOffice = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <div className={`mt24 pageTitle`}>Прокуратура </div>
            <div className="mt80">
               <CardHuman
                  jobTitle={'Химкинский городской прокурор - старший советник юстиции'}
                  name={'Андреев'}
                  surname={'Денис Владимирович'}
                  adress={'141400, Московская область, город Химки, ул. Маяковского, дом 30'}
                  WorkingHours={'Пн-Чт 09:00 – 13:00, 14:00 – 18:00. Пт 09:00 – 13:00, 14:00 – 16:45'}
                  contactsArr={['+7 (495) 571-62-35', 'epp.genproc.gov.ru', <img src={vk} alt="" />, <img src={ok} alt="" />, <img src={tg} alt="" />]}
                  img={card_img_1}
               />
               <div className="mt40">
                  <CardHuman
                     jobTitle={'Военный прокурор гарнизона'}
                     name={'Порываев'}
                     surname={'Михаил Вячеславович'}
                     adress={'Мичуринский просп., 25, корп. 2'}
                     WorkingHours={'Пн-Пт 09:00 – 13:0014:00 – 18:00'}
                     contactsArr={['+7 (495) 734-02-74', 'gvp.gov.ru']}
                     img={card_img_2}
                  />
               </div>
               <div className="mt40">
                  <CardHuman
                     jobTitle={'Военный прокурор солнечногорского гарнизона - полковник юстиции'}
                     name={'Зарудницкий'}
                     surname={'Юрий Владимирович'}
                     adress={'Московская область, г. Химки, ул. Чапаева, д.6.'}
                     WorkingHours={'Пн-Пт 09:00 – 13:0014:00 – 18:00'}
                     contactsArr={['8-495-572-01-39']}
                     img={card_img_3}
                  />
               </div>
               <div className="mt40">
                  <CardHuman
                     jobTitle={'Московский Межрегиональный Транспортный Прокурор'}
                     name={'Букреев'}
                     surname={'Константин Николаевич'}
                     adress={'107140, г. Москва, вн.тер.г. Муниципальный Округ Красносельский, ул Краснопрудная, д. 22Б'}
                     WorkingHours={'Пн-Чт 09:00 – 13:0013:45 – 18:00, Пт 09:00 – 13:00 13:45 – 17:00'}
                     contactsArr={['+7 (495) 785-70-00', 'epp.genproc.gov.ru', <img src={vk} alt="" />, <img src={ok} alt="" />, <img src={tg} alt="" />]}
                     img={card_img_4}
                  />
               </div>
               <div className="mt40">
                  <CardHuman
                     jobTitle={'Московский прокурор по надзору за соблюдением законов в исправительных учреждениях Московской области'}
                     name={'Инсаров'}
                     surname={'Вячеслав Александрович'}
                     adress={'Ленинградская ул., 11, Химки'}
                     WorkingHours={'Пн-Чт 09:00 – 13:00 14:00 – 18:00, Пт 09:00 – 13:00 14:00 – 16:45'}
                     contactsArr={['+7 (495) 571-10-46', 'epp.genproc.gov.ru', <img src={vk} alt="" />, <img src={ok} alt="" />]}
                     img={card_img_5}
                  />
               </div>
               <div className="mt40">
                  <CardHuman
                     jobTitle={'Северный транспортный прокурор'}
                     name={'Третьяков'}
                     surname={'Илья Анатольевич'}
                     adress={'07140, г. Москва, ул. 2-я Леснорядская, д.13/15, 3 этаж'}
                     WorkingHours={'Пн-Чт 09:00 – 13:00 14:00 – 18:00, Пт 09:00 – 13:00 14:00 – 16:45'}
                     contactsArr={['+7(499) 264-49-61', 'sevt@190.mailop.ru', 'epp.genproc.gov.ru', <img src={vk} alt="" />, <img src={ok} alt="" />]}
                     img={card_img_6}
                  />
               </div>


            </div>

            <div className={`mt80 borderMain ${s.linkContainer}`}>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Химкинская городская прокуратура<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>317 военная прокуратура гарнизона<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Военная прокуратура солнечногорского гарнизона<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Московская межрегиональная транспортная прокуратура<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Московская прокуратура по надзору за соблюдением законов в исправительных учреждениях московской области<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Северная транспортная прокуратура <div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
               <NavLink /* to={ROUTER.khimkiDistrict.unionSummerResidents} */ className={`${s.link}`}>Правовое просвещение и правовое информирование<div className={`btnCircleG ${s.imgContainer}`}><img src={arrow} alt="" /></div></NavLink>
            </div>

         </ContantContainerMain>
      </div>
   )
}
export default ProsecutorOffice;