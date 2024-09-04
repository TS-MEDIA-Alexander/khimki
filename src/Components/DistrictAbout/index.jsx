import React from 'react';
import s from './DistrictAbout.module.css';

/* Фото */
import person from '../../assets/img/khimkiDistrict/petrukhin-sergey-sergeevich.png';
import mishina from '../../assets/img/khimkiDistrict/mishina-natalya-vladimirovna.png';
import skhodnyaFirsanovka from '../../assets/img/khimkiDistrict/skhodnya-firsanovka.svg';
import levoberezhniy from '../../assets/img/khimkiDistrict/levoberezhniy.svg';
import DistrictAboutCard from '../DistrictAboutCard';

const DistrictAbout = ({ curDistrictId }) => {
   return (
      <div className={s.contain}>
         {curDistrictId === 'lunyovskoye' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Лунёвское'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
               historicalMonuments={[
                  
               ]}
            />
         )}

         {curDistrictId === 'skhodnya-firsanovka' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Сходня-Фирсановка'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
               historicalBackground={'Микрорайоны Сходня и Фирсановка образованы в 2005 году и являются внутригородскими территориями городского округа Химки с населением 57 000 жителей. В настоящее время на территории мкр. Сходня площадью 762,0 га  проживают около 49 тыс. человек, а в летний период количество населения увеличивается до 51 тыс. человек.'}
               historicalMonuments={[
                  'Обелиск «Воинам-фирсановцам, погибшим в боях за Родину в годы Великой Отечественной войны» «Пушка ЗИС – 3».',
                  'Памятник «Могила погибшего солдата».',
                  'Монумент «Танк – 34» Памятник воинам-защитникам в подмосковной Сходне.',
                  'Гаубица – МЗО «Воинам артиллеристам, отстоявшим отчизну».',
                  'Обелиск «Отстоявшим Отчизну», «Скорбящая мать».',
                  'Памятник «Живым и павшим бойцам горячих точек.',
               ]}
            />
         )}

         {curDistrictId === 'kutuzovskoye' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Кутузовское'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
               historicalMonuments={[

               ]}
            />
         )}

         {curDistrictId === 'klyazma-starbeevo' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Клязьма-Старбеево'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
               historicalMonuments={[

               ]}
            />
         )}

         {curDistrictId === 'podrezkovo' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Подрезково'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
               historicalMonuments={[

               ]}
            />
         )}

         {curDistrictId === 'novogorsk-planernaya' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Новогорск-Планерная'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
               historicalMonuments={[

               ]}
            />
         )}

         {curDistrictId === 'levoberezhniy' && (
            <DistrictAboutCard
               districtImg={levoberezhniy}
               title={'Левобережный'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: mishina,
                  surname: 'Мишина',
                  name: 'Наталья Владимировна',
               }
               }
               historicalBackground={'Микрорайон Левобережный — самый восточный микрорайон в составе города Химки Московской области. Микрорайон находится на противоположном, относительно центра города Химок, левом берегу канала имени Москвы. На востоке и юге Левобережный примыкает к границе области с Москвой по МКАД. Первые упоминания о данной территории находят еще в документах XVI века, когда здесь располагалось село Киреево.'}
               historicalMonuments={[
                  'Монумент «Вечная слава защитникам Родины»',
                  'Памятник Андрею Первозванному',
                  'Монумент, посвященный военным врачам и медицинским сестрам',
                  'Памятник жертвам трагедии в Беслане'
               ]}
            />
         )}

      </div>
   )
}
export default DistrictAbout;