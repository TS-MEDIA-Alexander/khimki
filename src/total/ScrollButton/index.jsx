import React, {useState} from 'react';
import img from '../../assets/icons/arrowBtnUp.svg';
import s from './ScrollButton.module.css';

const ScrollButton = (props) => {

   const [visible, setVisible] = useState(false)

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
         setVisible(true)
      }
      else if (scrolled <= 300) {
         setVisible(false)
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'

      });
   };

   window.addEventListener('scroll', toggleVisible);

   return (
      <div className={s.ScrollButton} onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
         Наверх <img src={img} alt="" />
      </div>
   )
}
export default ScrollButton;