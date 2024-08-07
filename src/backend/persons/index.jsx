/* Фотографии персон */
import lyovochka from '../../assets/img/Persons/lyovochka.png';
import madatova from '../../assets/img/Persons/madatova.png';
import yurkov from '../../assets/img/Persons/yurkov.png';
import vatutina from '../../assets/img/Persons/vatutina.png';
import batyshev from '../../assets/img/Persons/batyshev.png';
import gureva from '../../assets/img/Persons/gureva.png';
import zaytsev from '../../assets/img/Persons/zaytsev.png';
import tsukanov from '../../assets/img/Persons/tsukanov.png';
import petrukhin from '../../assets/img/Persons/petrukhin.png';
import shpendik from '../../assets/img/Persons/shpendik.png';
import mishina from '../../assets/img/Persons/mishina.png';
import kapustina from '../../assets/img/Persons/kapustina.png';
import genter from '../../assets/img/Persons/genter.png';
import voronov from '../../assets/img/Persons/voronov.png';
import mashkovtsev from '../../assets/img/Persons/mashkovtsev.png';
import poznyakova from '../../assets/img/Persons/poznyakova.png';
import pashin from '../../assets/img/Persons/pashin.png';
import shipov from '../../assets/img/Persons/shipov.png';
import prekrasa from '../../assets/img/Persons/prekrasa.png';

const persons = [
   {
      id: 1,
      url: 'lyovochka',
      img: lyovochka,
      surname: 'Лёвочка',
      name: 'Родион Сергеевич',
      jobTitle: 'Первый заместитель Главы городского округа ',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 2,
      url: 'madatova',
      img: madatova,
      surname: 'Мадатова',
      name: 'Кристина Артуровна',
      jobTitle: 'Первый заместитель Главы городского округа',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 3,
      url: 'yurkov',
      img: yurkov,
      surname: 'Юрков',
      name: 'Денис Анатольевич ',
      jobTitle: 'Заместитель Главы городского округа по вопросам жилищно-коммунального хозяйства',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 4,
      url: 'vatutina',
      img: vatutina,
      surname: 'Ватутина',
      name: 'Анна Эдуардовна ',
      jobTitle: 'Заместитель Главы городского округа по вопросам социальной политики, культуры и спорта',
      tel: '+7 (495) 573-05-02',
      mail: 'priem_health@admhimki.ru',
      area: 'Сфера социальной политики, культуры и спорта',
      areaSpoler: [
         {
            id: 1,
            title: 'Управление по образованию',
            textBody: [
               {id: 1, text: 'Начальник управления – Болгова Ирина Владимировна'},
               {id: 2, text: 'Адрес: ул. Пролетарская, д. 25'},
               {id: 3, text: 'Телефон: 8 (495) 050-09-82'},
               {id: 4, text: 'Электронная почта: educate@admhimki.ru'},
            ]
         },
         {
            id: 2,
            title: 'Управление физической культуры и спорта',
            textBody: []
         },
         {
            id: 3,
            title: 'Управление культуры',
            textBody: []
         },
         {
            id: 4,
            title: 'Управление социальных коммуникаций',
            textBody: []
         },
         {
            id: 5,
            title: 'Управление по делам несовершеннолетних',
            textBody: []
         },
         {
            id: 6,
            title: 'Образовательные учреждения- 29',
            textBody: []
         },
         {
            id: 7,
            title: 'Дошкольные образовательные учреждения- 6',
            textBody: []
         },
         {
            id: 8,
            title: 'Учреждения дополнительного образования- 2',
            textBody: []
         },
         {
            id: 9,
            title: 'Учреждения культуры- 10',
            textBody: []
         },
         {
            id: 10,
            title: 'Учреждения спортивной направленности- 15',
            textBody: []
         },
      ]
   },
   {
      id: 5,
      url: 'batyshev',
      img: batyshev,
      surname: 'Батышев',
      name: 'Николай Николаевич',
      jobTitle: 'Заместитель Главы городского округа по вопросам благоустройства',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 7,
      url: 'gureva',
      img: gureva,
      surname: 'Гурьева ',
      name: 'Наталия Николаевна ',
      jobTitle: 'Заместитель Главы городского округа – начальник Финансового управления',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 8,
      url: 'zaytsev',
      img: zaytsev,
      surname: 'Зайцев ',
      name: 'Андрей Валерьевич ',
      jobTitle: 'Заместитель Главы городского округа – начальник Финансового управления',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 9,
      url: 'tsukanov',
      img: tsukanov,
      surname: 'Цуканов ',
      name: 'Александр Геннадьевич ',
      jobTitle: 'Заместитель Главы городского округа по территориальной безопасности, взаимодействию с правоохранительными органами и противодействию коррупции',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 10,
      url: 'bagdiyan',
      img: null,
      surname: 'Багдиян ',
      name: 'Юлия Эдуардовна ',
      jobTitle: null,
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 11,
      url: 'petrukhin',
      img: petrukhin,
      surname: 'Петрухин ',
      name: 'Сергей Сергеевич ',
      jobTitle: "Территориальное управление микрорайонов Сходня - Фирсановка",
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 12,
      url: 'shpendik',
      img: shpendik,
      surname: 'Шпендик ',
      name: 'Ярослав Олегович ',
      jobTitle: "Территориальное управление микрорайонов Новогорск-Планерная",
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 13,
      url: 'mishina',
      img: mishina,
      surname: 'Мишина ',
      name: 'Наталья Владимировна ',
      jobTitle: "Территориальное управление микрорайона Левобережный",
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 14,
      url: 'kapustina',
      img: kapustina,
      surname: 'Капустина ',
      name: 'Людмила Юрьевна ',
      jobTitle: "Территориальное управление микрорайона Подрезково",
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 15,
      url: 'genter',
      img: genter,
      surname: 'Гентер ',
      name: 'Анна Сергеевна  ',
      jobTitle: "Территориальное управление микрорайона Клязьма - Старбеево",
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 16,
      url: 'voronov',
      img: voronov,
      surname: 'Воронов ',
      name: 'Дмитрий Александрович ',
      jobTitle: "Территориальное управление Кутузовское",
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 17,
      url: 'mashkovtsev',
      img: mashkovtsev,
      surname: 'Машковцев ',
      name: 'Эдуард Александрович ',
      jobTitle: "Территориальное управление Лунёвское",
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 18,
      url: 'poznyakova',
      img: poznyakova,
      surname: 'Познякова ',
      name: 'Ирина Александровна  ',
      jobTitle: 'Управление "Аппарат Администрации городского округа и кадровой политики"',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 19,
      url: 'pashin',
      img: pashin,
      surname: 'Пашин ',
      name: 'Василий Вадимович ',
      jobTitle: 'Управление делами и контроля',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 20,
      url: 'shipov',
      img: shipov,
      surname: 'Шипов ',
      name: 'Олег Николаевич ',
      jobTitle: 'Контрольно - ревизионное управление',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 20,
      url: 'prekrasa',
      img: prekrasa,
      surname: 'Прекраса ',
      name: 'Ольга Николаевна ',
      jobTitle: 'Управление правового обеспечения и судебно-претензионной работы',
      tel: null,
      mail: null,
      area: null,
      areaSpoler: null
   },
]

export default persons;