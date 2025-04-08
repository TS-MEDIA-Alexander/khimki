import React from 'react';
import s from './CardContainerGovernor.module.css';

/* banner img */
import governor from "../../assets/portrains/governor_moscow_region.png";
import btnArr from '../../assets/icons/government_link_button.svg';

const CardContainerGovernor = (props) => {
   return (
      <div className={` borderMain`}>
         <div className={s.title}>Губернатор Московской области</div>
         <div className={`cardContainer ${s.mobilCardContainer}`}>
            <div className={s.textBlock}>
               <div className={s.subtitle}>Андрей Юрьевич Воробьев</div>
               <div className={s.textBody}>«Важно, что многие включились в процесс активных преобразований. Я уверен, что каждый год число тех, кто разделяет наши ценности, будет расти. Подмосковье - это наш дом, поэтому никто, кроме нас самих, не сможет сделать его лучше и краше. Уверен, мы всё делаем правильно».</div>
               <a href='https://mosreg.ru/' target='_blank' className={`btnY ${s.buttonGovernment}`}>Правительство Московской области <img src={btnArr} alt="" /></a>
            </div>
            <div className={s.imgPortrainContainer}><img src={governor} alt="" /></div>
         </div>

      </div>
   )
}
export default CardContainerGovernor;