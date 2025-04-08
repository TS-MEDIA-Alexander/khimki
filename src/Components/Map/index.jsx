import React, { useState } from 'react';
import s from './Map.module.css';
import MapSVG from '../MapSVG';

const Map = ({ fnSet }) => {

   const [curId, setCurId] = useState();

   return (
      <div className={`borderMain ${s.mapBlock}`}>
         <div className={s.textBlock}>
            <div className={s.title}>Городской округ Химки</div>
            <div className={`mt8 ${s.description}`}>
               В состав городского округа входят 36 сельских поселений и 1 город.
            </div>
         </div>
         <div
            onMouseOver={(e) => e.target.id && setCurId(e.target.id)}
            className={s.mapContainer}
         >
            <MapSVG />

            <div onClick={(e) => e.target.id && fnSet(e.target.id)} className={s.popUpContainer}>
               <div className={`${s.lunyovskoye} ${s.district}`}>
                  {curId === 'lunyovskoye' && (
                     <div id='lunyovskoye' className={s.popUpDistrictKhimki}>
                        Лунёвское
                        <br />
                        подробнее
                     </div>
                  )}
               </div>

               <div id='skhodnya-firsanovka' className={`${s.skhodnyaFirsanovka} ${s.district}`}>
                  {curId === 'skhodnya-firsanovka' && (
                     <div id='skhodnya-firsanovka' className={s.popUpDistrictKhimki}>
                        Сходня-Фирсановка
                        <br />
                        подробнее
                     </div>
                  )}
               </div>

               <div id='kutuzovskoye' className={`${s.kutuzovskoye} ${s.district}`}>
                  {curId === 'kutuzovskoye' && (
                     <div id='kutuzovskoye' className={s.popUpDistrictKhimki}>
                        Кутузовское
                        <br />
                        подробнее
                     </div>
                  )}
               </div>

               <div id='klyazma-starbeevo' className={`${s.klyazmaStarbeevo} ${s.district}`}>
                  {curId === 'klyazma-starbeevo' && (
                     <div id='klyazma-starbeevo' className={s.popUpDistrictKhimki}>
                        Клязьма-Старбеево
                        <br />
                        подробнее
                     </div>
                  )}
               </div>

               <div id='podrezkovo' className={`${s.podrezkovo} ${s.district}`}>
                  {curId === 'podrezkovo' && (
                     <div id='podrezkovo' className={s.popUpDistrictKhimki}>
                        Подрезково
                        <br />
                        подробнее
                     </div>
                  )}
               </div>

               <div id='novogorsk-planernaya' className={`${s.novogorskPlanernaya} ${s.district}`}>
                  {curId === 'novogorsk-planernaya' && (
                     <div id='novogorsk-planernaya' className={s.popUpDistrictKhimki}>
                        Новогорск-Планерная
                        <br />
                        подробнее
                     </div>
                  )}
               </div>

               <div id='levoberezhniy' className={`${s.levoberezhniy} ${s.district}`}>
                  {curId === 'levoberezhniy' && (
                     <div id='levoberezhniy' className={s.popUpDistrictKhimki}>
                        Левобережный
                        <br />
                        подробнее
                     </div>
                  )}
               </div>

               {curId === 'clear' && null}

            </div>

         </div>
      </div>
   )
}
export default Map;