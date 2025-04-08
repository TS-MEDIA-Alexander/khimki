import React, { useEffect } from 'react';
import s from './BtnCarousel.module.css';

const BtnCarousel = ({ current, set, text, distance }) => {
   return (
      <button className={`btnY ${s.btn} ${current === distance && s.btnActive}`} onClick={() => set(distance < -1400 ? (distance + 1400) : distance)}>{text}</button>
   )
}
export default BtnCarousel;