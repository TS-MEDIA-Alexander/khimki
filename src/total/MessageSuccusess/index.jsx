import React from 'react';
import s from './MessageSuccusess.module.css';

const MessageSuccusess = ({set}) => {
   return (
      <div className={`mt120 ${s.successContainer}`}>
         <div className="pageSubtitle">Ваше обращение отправлено</div>
         <div className={`mt16 ${s.description}`}>Ваше обращение очень важно для нас, вам ответит первый освободившейся оператор </div>
      </div>
   )
}
export default MessageSuccusess;