import React from 'react';
import s from './EventAnnouncements.module.css';
import Event from '../../Components/Event';

/* События */
import events from '../../backend/events/events';

const EventAnnouncements = (props) => {
   return (
      <div className='mt80'>
         <div className="subTitle">Анонсы мероприятий</div>
         <div className={`mt40 ${s.eventsContainer}`}>
            {events.map(el => <Event key={el.id} img={el.imgPreview} title={el.title} />)}
         </div>
      </div>
   )
}
export default EventAnnouncements;