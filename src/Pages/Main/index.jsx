import React from 'react';
import ContantContainerMain from '../../utils/ContantContainerMain';
import s from './Main.module.css';
import slider1 from '../../assets/img/sliders/main/1.png'
import Carousel from '../../Components/Carousel';
import governor from"../../assets/portrains/governor_moscow_region.png";

const Main = (props) => {
   return (
      <div>
         <ContantContainerMain>
            <Carousel
               btnArrText={
                  ['Круглосуточная горячая линия', 'Горячая линия строительного комплеса', 'Сведения о земельном участке', 'Оценка деятельности местной власти']
               }>
               <img src={slider1} alt="" className={s.item} />
               <img src={slider1} alt="" className={s.item} />
               <img src={slider1} alt="" className={s.item} />
               <img src={slider1} alt="" className={s.item} />
            </Carousel>

            
            <div className="mt32 columnContainer">
               <div className="columnLarge">
                  <div className="cardContainer">
                     <div className={s.textBlock}>
                        <div className={s.title}>Губернатор московской области</div>
                        <div className={s.subtitle}>Андрей Юрьевич Воробьев</div>
                        <div className={s.textBody}>«Важно, что многие включились в процесс активных преобразований. Я уверен, что каждый год число тех, кто разделяет наши ценности, будет расти. Подмосковье - это наш дом, поэтому никто, кроме нас самих, не сможет сделать его лучше и краше. Уверен, мы всё делаем правильно».</div>
                        <button className={s.buttonGovernment}>Правительство Московской области</button>
                     </div>
                     <div className={s.imgPortrainContainer}><img src={governor} alt="" /></div>
                  </div>
               </div>
               <div className="columnSmal">222</div>
            </div>

         </ContantContainerMain>

      </div>
   )
}
export default Main;