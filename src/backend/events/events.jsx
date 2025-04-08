import { ROUTER } from '../../config';

import khimkiCityDay from '../../assets/img/events/khimki_city_day_mobil.png';
import savePast from '../../assets/img/events/save_past.png';
import SchoolMuseumFestival from '../../assets/img/events/SchoolMuseumFestival/bg/school-museum-festival.png';

const events = [
   {
      id: 1,
      imgPreview: SchoolMuseumFestival,
      url: ROUTER.events.schoolMuseumFestival,
      title: 'В Химках стартовал масштабный фестиваль школьных музеев',
   },
   {
      id: 2,
      imgPreview: savePast,
      url: ROUTER.events.savePast,
      title: 'В День города в Химках открыли мемориал героям-защитникам Отечества. Это первый подобный монумент в округе.',
   },
   {
      id: 3,
      imgPreview: khimkiCityDay,
      url: ROUTER.events.khimkiCityDay,
      title: 'Программа празднования мероприятий на август, посвященных Дню города',
   }
]

export default events