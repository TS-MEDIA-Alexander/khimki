import React from 'react';
import s from './CityDay.module.css';
import { NavLink } from 'react-router-dom';
import {ROUTER} from '../../config';

import gosuslugi from '../../assets/iconsBanners/CityDay/gosuslugi.svg';

const CityDay = (props) => {
   return (
      <div className={`borderMain ${s.banner_pb_wrapper}`}>
        <div className={s.banner_pb_container}>
            <div className={s.banner_pb_image}></div>
            <div className={s.banner_pb_content}>
                <div className={s.banner_pb_content__info}>
                    <p className={s.banner_pb_content__title}>
                        Возникли трудности при ведении бизнеса в регионе?
                    </p>
                    <p className={s.banner_pb_content__subtitle}>
                        Напишите, чтобы быстро получить ответ
                    </p>
                </div>
                <div className={s.banner_pb_content__link}>
                    <a rel="noopener" href="https://www.gosuslugi.ru/help/obratitsya_business" target="_blank">
                        <div className={`${s.banner_pb_button} btnGosBanner`}>
                            Написать
                        </div>
                    </a>
                    <img className={s.banner_pb_icon} src={gosuslugi}/>
                </div>
            </div>
        </div>
    </div>
   )
}
export default CityDay;


{/* <NavLink to={ROUTER.events.khimkiCityDay} className={s.bannerVirtual}>
         <div className={s.title}>День города!</div>
         <div className={s.textBody}>
            <div>В этом году Химки отмечают 85_</div>
            <div>летие. Для жителей и гостей</div>
            <div>округа подготовили масштабную</div>
            <div>развлекательную программу.</div>
         </div>
         <div className={`btnWBanner ${s.button}`}>Программа празднования</div>
      </NavLink> */}