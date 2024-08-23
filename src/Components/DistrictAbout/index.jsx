import React from 'react';
import s from './DistrictAbout.module.css';

/* Фото */
import person from '../../assets/img/khimkiDistrict/petrukhin-sergey-sergeevich.png';
import skhodnyaFirsanovka from '../../assets/img/khimkiDistrict/skhodnya-firsanovka.svg';
import DistrictAboutCard from '../DistrictAboutCard';

const DistrictAbout = ({ curDistrictId }) => {
   return (
      <div className={s.contain}>
         {curDistrictId === 'lunyovskoye' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Лунёвское'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               countPeaple={'30 185'}
               km={'25,37'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
            />
         )}

         {curDistrictId === 'skhodnya-firsanovka' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Сходня-Фирсановка'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               countPeaple={'30 185'}
               km={'25,37'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
            />
         )}

         {curDistrictId === 'kutuzovskoye' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Кутузовское'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               countPeaple={'30 185'}
               km={'25,37'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
            />
         )}

         {curDistrictId === 'klyazma-starbeevo' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Клязьма-Старбеево'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               countPeaple={'30 185'}
               km={'25,37'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
            />
         )}

         {curDistrictId === 'podrezkovo' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Подрезково'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               countPeaple={'30 185'}
               km={'25,37'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
            />
         )}

         {curDistrictId === 'novogorsk-planernaya' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Новогорск-Планерная'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               countPeaple={'30 185'}
               km={'25,37'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
            />
         )}

         {curDistrictId === 'levoberezhniy' && (
            <DistrictAboutCard
               districtImg={skhodnyaFirsanovka}
               title={'Левобережный'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               countPeaple={'30 185'}
               km={'25,37'}
               chairman={{
                  img: person,
                  surname: 'Петрухин',
                  name: 'Сергей Сергеевич',
               }
               }
            />
         )}

      </div>
   )
}
export default DistrictAbout;