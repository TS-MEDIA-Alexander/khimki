import React from 'react';
import s from './DistrictAbout.module.css';

/* Фото */
import person from '../../assets/img/Persons/petrukhin-sergey-sergeevich.png';
import mishina from '../../assets/img/Persons/mishina-natalya-vladimirovna.png';
import genter from '../../assets/img/Persons/genter.png';
import kapustina from '../../assets/img/Persons/kapustina.png';
import skhodnyaFirsanovka from '../../assets/img/khimkiDistrict/skhodnya-firsanovka.svg';
import novogorskPlanernaya from '../../assets/img/khimkiDistrict/novogorskPlanernaya.svg';
import kutuzovskoye from '../../assets/img/khimkiDistrict/kutuzovskoye.svg';
import klyazmaStarbeevo from '../../assets/img/khimkiDistrict/klyazmaStarbeevo.svg';
import lunyovskoye from '../../assets/img/khimkiDistrict/lunyovskoye.svg';
import podrezkovo from '../../assets/img/khimkiDistrict/podrezkovo.svg';
import levoberezhniy from '../../assets/img/khimkiDistrict/levoberezhniy.svg';
import DistrictAboutCard from '../DistrictAboutCard';

const DistrictAbout = ({ curDistrictId }) => {
   return (
      <div className={s.contain}>
         {curDistrictId === 'lunyovskoye' && (
            <DistrictAboutCard
               districtImg={lunyovskoye}
               title={'Лунёвское'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  surname: 'Конова',
                  name: 'Вера Николаевна',
               }
               }
               historicalBackground={'Территориальное Управление Лунёвское (далее – ТУ Лунёвское) является самой северной территорией городского округа Химки, это бывшая территория городского округа Солнечногорск, в которую входят 19 населённых пунктов:  посёлок Подсобное хозяйство санатория имени Артёма, деревня Веревское, село Жилино, деревня Елино, деревня Чёрная Грязь, деревня Пикино, деревня Поярково, деревня Владычино, деревня Мышецкое, деревня Клушино, посёлок Лунёво (административный центр ТУ), деревня Жигалово, деревня Лунёво, деревня Шемякино, деревня Перепечино, деревня Носово, село Чашниково, деревня Исаково, деревня Паршино.'}
               historicalMonuments={[
                  'Братская могила Мышецкое деревня;',
                  'Братская могила Владычино деревня;',
                  'Памятник защитникам Отечества,Пикино деревня',
                  'Памятник братская могила Носово деревня, Новая улица;',
                  'Памятник защитникам Отечества Поярково деревня;'
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
               districtImg={kutuzovskoye}
               title={'Кутузовское'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  surname: 'Мазуров',
                  name: 'Дмитрий Николаевич',
               }
               }
               historicalBackground={'Территориальное управление Кутузовское городского округа Химки, это бывшая территория городского округа Солнечногорск, исторически сложившаяся из территорий Сельского поселения Кутузовское образованного 21 января 2005 года. В  состав территориального управления входит 16 населённых пунктов: деревня Благовещенка, деревня Большаково, деревня Брёхово (административный центр ТУ), деревня Голиково, деревня Жаворонки, деревня Лигачёво, деревня Лугинино, деревня Николо-Черкизово, деревня Подолино, деревня Рузино, посёлок санатория «Энергия», деревня 5-е Горки, посёлок санатория «Мцыри», деревня Середниково, деревня Фёдоровка, деревня Юрлово.'}
               historicalMonuments={[
                  'Братская могила советских воинов в д. Большаково ',
                  'Братская могила советских воинов в д. Подолино ',
                  'Братская могила советских воинов (выявленный памятник истории) в д. Рузино'
               ]}
            />
         )}

         {curDistrictId === 'klyazma-starbeevo' && (
            <DistrictAboutCard
               districtImg={klyazmaStarbeevo}
               title={'Клязьма-Старбеево'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: genter,
                  surname: 'Гентер',
                  name: 'Анна Сергеевна',
               }
               }
               historicalBackground={'В начале ХIХ века  территория мкр. Клязьма-Старбеево  были  окрестностями Химок  и  популярным дачным местом, где в разные годы бывали А. И. Герцен, Н. А. Некрасов, А. И. Куприн, П. И. Чайковский, М. И. Щепкин. Статус города получен в 1939 году. Химки называют «вековыми воротами Москвы». Через город проходят важнейшие транспортные магистрали России: автодорога Москва Санкт-Петербург, скоростная магистраль М-11,Октябрьская железная дорога, канал им. Москвы.'}
               historicalMonuments={[
                  'Памятник  В.И. Ленину',
                  'Памятник В.П. Чкалову',
                  'Обелиск «Отстоявшим Отчизну», Вечный Огонь',
                  'Памятник Почетный знак «60 лет ВЛКСМ»',
                  'Обелиск «Вечная слава».'
               ]}
            />
         )}

         {curDistrictId === 'podrezkovo' && (
            <DistrictAboutCard
               districtImg={podrezkovo}
               title={'Подрезково'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: mishina,
                  surname: 'Мишина',
                  name: 'Наталья Владимировна',
               }
               }
               historicalBackground={'Микрорайон Подрезково является внутригородской территорией городского округа Химки с  населением  25000 жителей. Территория микрорайона составляет 750 гектаров. Микрорайон включает кварталы: Кирилловка, Филино, Форелевое хозяйство, Черкизово, Первомайский. В летний период количество жителей  возрастает до 30000 человек за счет дачников.'}
               historicalMonuments={[
                  '« В память воинам – жителям деревни Новокирилловка, погибшим в годы Великой Отечественной войны 1941-1945гг.»',
                  'Стела Памяти, посвященная воину-интернационалисту Игорю Жаринову'
               ]}
            />
         )}

         {curDistrictId === 'novogorsk-planernaya' && (
            <DistrictAboutCard
               districtImg={novogorskPlanernaya}
               title={'Новогорск-Планерная'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  /* img: mishina, */
                  surname: 'Понятойкин',
                  name: 'Иван Николаевич',
               }
               }
               historicalBackground={'Новогорская земля имеет очень давнюю историю. На месте нынешнего микрорайона в старину располагались деревня Ивановская и село Соколово, известное еще с XVI века. После Октябрьской революции в Соколове был организован совхоз. В середине 30-х годов на месте бывшей усадьбы открыли два дома отдыха - «Нагорное» и «Новогорск», находившиеся в ведении НКВД, а затем ЦК и Госплана СССР. А в конце 30-х возник поселок Новогорск, только в 2005 году преобразованный в микрорайон Новогорск городского округа Химки.'}
               historicalMonuments={[
                  'Слава химчанам, участникам Великой отечественной войны 1941 - 1945 годов Танк -34-85',
                  'Мемориал «Подвиг милосердие» (1941 - 1945)',
                  'Мемориальный ансамбль «Противотанковые ежи»',
                  'Мемориал «Труженикам тыла, ковавшим Великую победу» - Самолет - ЛА-7'
               ]}
            />
         )}

         {curDistrictId === 'levoberezhniy' && (
            <DistrictAboutCard
               districtImg={levoberezhniy}
               title={'Левобережный'}
               description={'В состав городского округа входят 37 населённых пунктов, в том числе 1 город и 36 сельских населённых пунктов'}
               chairman={{
                  img: kapustina,
                  surname: 'Капустина',
                  name: 'Людмила Юрьевна',
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