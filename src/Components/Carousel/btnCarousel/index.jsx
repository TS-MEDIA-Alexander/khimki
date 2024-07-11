import React from 'react';
import s from './BtnCarousel.module.css';

const BtnCarousel = ({current, set, text, distance}) => {
   return (
      <button className={`btnY ${s.btn} ${current === distance && s.btnActive}`} onClick={() => set(distance)}>{text}</button>
   )
}
export default BtnCarousel;