/* Фотографии персон */
import minaev from '../../assets/img/Persons/img.png';
import zhdankina from '../../assets/img/Persons/img.png';
import madatova from '../../assets/img/Persons/madatova.png';
import khazanovich from '../../assets/img/Persons/khazanovich.jpg';
import vatutina from '../../assets/img/Persons/vatutina.png';
import kosolapov from '../../assets/img/Persons/img.png';
// import gureva from '../../assets/img/Persons/gureva.png';
import zaytsev from '../../assets/img/Persons/zaytsev.png';
import tsukanov from '../../assets/img/Persons/tsukanov.png';
import petrukhin from '../../assets/img/Persons/petrukhin.png';
import mishina from '../../assets/img/Persons/mishina.png';
import kapustina from '../../assets/img/Persons/kapustina.png';
import genter from '../../assets/img/Persons/genter.png';
import mashkovtsev from '../../assets/img/Persons/mashkovtsev.png';
import poznyakova from '../../assets/img/Persons/poznyakova.png';
import pashin from '../../assets/img/Persons/pashin.png';
import shipov from '../../assets/img/Persons/shipov.png';
import prekrasa from '../../assets/img/Persons/prekrasa.png';
import zarubina from '../../assets/img/Persons/img.png';


const persons = [
   {
      id: 1,
      url: 'minaev',
      img: minaev,
      surname: 'Минаев',
      name: 'Николай Валерьевич',
      jobTitle: 'Первый заместитель Главы городского округа',
      tel: ['+7 (495) 572-82-56'],
      mail: null,
      socialNetwork: null,
      area: 'Сфера промышленности, инвестиционной политики и транспорта',
      areaSpoler: [
         {
            id: 1,
            title: 'АУ «МФЦ городского округа Химки»',
            textBody: [
               { id: 2, text: 'Директор: Мартынов Юрий Дмитриевич' },
               { id: 3, text: 'Адрес: г. Химки, Юбилейный проспект, д. 67 А, Б' },
               { id: 4, text: 'Телефон: +7 (498) 683-63-63' },
               { id: 5, text: 'Электронная почта: mfc-himkigo@mosreg.ru' },
            ]
         },
         {
            id: 2,
            title: 'МКУ «МЦУР г.о. Химки»',
            textBody: [
               { id: 2, text: 'Руководитель: Певчева Ирина Александровна' },
               { id: 3, text: 'Адрес: г. Химки, ул.Кирова, д.30' },
            ]
         },
         {
            id: 3,
            title: 'Управление «Аппарат Администрации городского округа и кадровой политики»',
            textBody: [
               { id: 1, text: 'Начальник Управления: Познякова Ирина Александровна' },
               { id: 2, text: 'Телефон: +7 (495) 793-31-30' },
            ]
         },
         {
            id: 4,
            title: 'Управление делами и контроля',
            textBody: [
               { id: 1, text: 'Начальник Управления: Пашин Василий Вадимович' },
               { id: 2, text: 'Телефон: +7 (495) 572-32-58' },
            ]
         },
         {
            id: 5,
            title: 'Отдел контрактной службы',
            textBody: [
               { id: 1, text: 'Начальник отдела: Бернацкая Ирина Михайловна' },
               { id: 2, text: 'Адрес: г. Химки, ул. Московская, д. 28/2' },
               { id: 2, text: 'Телефон: +7 (495) 572-32-16' },
               { id: 2, text: 'Электронная почта: zakupkiadm@admhimki.ru' },
            ]
         },
         {
            id: 6,
            title: 'МКУ «Управление централизации закупок»',
            textBody: [
               { id: 2, text: 'Руководитель: Соколов Дамир Маратович' },
               { id: 3, text: 'Адрес: г. Химки, ул.Ленинградская, д.25' },
               { id: 4, text: 'Телефон: +7 (495) 572-74-15' },
               { id: 5, text: 'Электронная почта: zakupki@admhimki.ru' },
            ]
         },
         {
            id: 7,
            title: 'МКУ «Управление делами Администрации»',
            textBody: [
               { id: 2, text: 'Руководитель: Галкина Елена Николаевна' },
               { id: 3, text: 'Адрес: г.Химки, ул.Калинина, д.4' }
            ]
         },
         {
            id: 8,
            title: 'АУ «Центр аварийно-технического обслуживания и ремонта»',
            textBody: [
               { id: 1, text: 'И.о. директора: Пирожков Андрей Владимирович' },
               { id: 2, text: 'Адрес: г. Химки, ул. Молодежная, д.44' },
               { id: 3, text: 'Телефон: +7 (498) 764-27-96, +7 (495) 571-10-45' },
               { id: 4, text: 'Электронная почта: augohcato@mail.ru' },
            ]
         },
         {
            id: 9,
            title : 'Oбъединенная дирекция парков',
            textBody : [
               {id:1,text :'Адрес: г. Химки, Ленинградская ул., д.18а'}
            ]
         },
         {
            id: 10,
            title : 'Управление правового обеспечения и судебно-претензионной работы',
            textBody:[
               {id:1,text:'Начальник Управления: Прекраса Ольга Николаевна'},
               {id:2,text:'Телефон: +7 (495) 572-00-88'},
               {id:3,text:'Электронная почта: judge@admhimki.ru'},

            ]
         }
      ]
   },
   {
      id: 2,
      url: 'madatova',
      img: madatova,
      surname: 'Мадатова',
      name: 'Кристина Артуровна',
      jobTitle: 'Первый заместитель Главы городского округа',
      tel: ['+7 (495) 572-67-14'],
      mail: null,
      socialNetwork: null,
      area: 'Сфера градостроительства и архитектуры',
      areaSpoler: [
         {
            id: 1,
            title: 'Комитет имущественных и земельных отношений',
            textBody: [
               { id: 1, text: 'Председатель комитета: Князева Евгения Симоновна' },
               { id: 2, text: 'Адрес: г.Химки, ул.Ленинградская, д.25' },
               { id: 3, text: 'Телефон: +7 (495) 573-81-72' },
               { id: 4, text: 'Электронная почта: kui@admhimki.ru' },
            ]
         },
         {
            id: 2,
            title: 'Управление архитектуры и градостроительства',
            textBody: [
               { id: 1, text: 'Начальник Управления: Казакова Наталья Евгеньевна' },
               { id: 2, text: 'Адрес: г. Химки, Кирова, д.24' },
               { id: 3, text: 'Телефон: +7 (495) 572-73-70' },
               { id: 4, text: 'Электронная почта: city_arch@admhimki.ru' },
            ]
         },
         {
            id: 3,
            title: 'ООО "АПУ-Химки',
            textBody: [
               { id: 2, text: 'Заместитель директора: Рябуха Юрий Анатольевич' },
               { id: 3, text: 'Адрес: г. Химки, ул. Ватутина, д. 4 кор. 2' },
               { id: 4, text: 'Телефон: +7 (495) 572-81-88' },
               { id: 5, text: 'Электронная почта: info@apuhimki.ru' },
            ]
         },
         {
            id: 4,
            title: 'МКУ «Управление строительства»',
            textBody: [
               { id: 1, text: 'Руководитель: Глаголев Роман Александрович' },
               { id: 2, text: 'Адрес: г. Химки, ул. Кирова, вл. 24' },
               { id: 3, text: 'Адрес: г. Химки, пр-кт. Юбилейный, д. 69' },
               { id: 4, text: 'Телефон: +7 (495) 572-20-07' },
               { id: 5, text: 'Электронная почта: mkuuks@admhimki.ru' },
            ]
         },
      ]
   },
   {
      id: 3,
      url: 'khazanovich',
      img: khazanovich,
      surname: 'Хазанович',
      name: 'Станислав Викторович ',
      jobTitle: 'Заместитель Главы городского округа по вопросам жилищно-коммунального хозяйства',
      tel: ['+7 (495) 573-31-62'],
      mail: null,
      socialNetwork: null,
      area: 'Сфера жилищно-коммунального хозяйства',
      areaSpoler: [
         {
            id: 1,
            title: 'Управление жилищно-коммунального хозяйства',
            textBody: [
               { id: 1, text: 'Начальник Управления: Рябинков Роман Вячеславович' },
               { id: 2, text: 'Телефон: +7 (495) 573-31-62, доб. 457' },
               { id: 3, text: 'Электронная почта: upr.zhkh@admhimki.ru' },
            ]
         },
         {
            id: 2,
            title: 'МКУ «Дирекция жилищно-коммунального хозяйства»',
            textBody: [
               { id: 1, text: 'Начальник Управления: Арчукова Марина Александровна' },
               { id: 2, text: 'Телефон: +7 (495) 573-31-62, доб. 342' },
               { id: 3, text: 'Электронная почта: upr.zhkh@admhimki.ru' },
            ]
         },
         {
            id: 3,
            title: 'ООО «Жилищник г.о. Химки»',
            textBody: [
               { id: 1, text: 'Директор: Иванов Валерий Михайлович' },
               { id: 2, text: 'Адрес: г. Химки, ул. Ватутина, д.4, к.2' },
               { id: 3, text: 'Телефон: +7 (495) 500-24-39' },
               { id: 4, text: 'Электронная почта: himki.mup@mail.ru' },
               { id: 5, text: 'Сайт: www.жилищник-Химки.рф' },
            ]
         },
         {
            id: 4,
            title: 'МУП «Химводосток»',
            textBody: [
               { id: 1, text: 'Директор: Соловьева Елена Александровна' },
               { id: 2, text: 'Адрес: г. Химки, Нагорное шоссе д.9' },
               { id: 3, text: 'Телефон: +7 (495) 793-58-33' },
               { id: 4, text: 'Электронная почта: himvodostok@mail.ru' },
            ]
         },
         {
            id: 5,
            title: 'ОАО «Химкинский водоканал»',
            textBody: [
               { id: 1, text: 'Директор: Кожикин Артём Николаевич' },
               { id: 2, text: 'Адрес: г. Химки, Нагорное шоссе, д. 5' },
               { id: 3, text: 'Телефон: +7 (495) 575-71-13' },
               { id: 4, text: 'Электронная почта: oao@hvod.ru' },
            ]
         },
         {
            id: 6,
            title: 'Химкинский филиал ООО «ТСК Мосэнерго»',
            textBody: [
               { id: 1, text: 'Директор: Чубаров Сергей Андреевич' },
               { id: 2, text: 'Адрес: г. Химки, Нагорное шоссе, д.6' },
               { id: 3, text: 'Телефон: +7 (495) 225-14-33' },
               { id: 4, text: 'Электронная почта: info-himki@tsk-mosenergo.ru, info@tsk-mosenergo.ru' },
            ]
         },
      ]
   },
   {
      id: 4,
      url: 'vatutina',
      img: vatutina,
      surname: 'Ватутина',
      name: 'Анна Эдуардовна ',
      jobTitle: 'Заместитель Главы городского округа по вопросам социальной политики, культуры и спорта',
      tel: ['+7 (495) 573-05-02'],
      mail: 'priem_health@admhimki.ru',
      socialNetwork: null,
      area: 'Сфера социальной политики, культуры и спорта',
      areaSpoler: [
         {
            id: 1,
            title: 'Управление по образованию',
            textBody: [
               { id: 1, text: 'Начальник Управления: Кандалов Юрий Николаевич,' },
               { id: 3, text: 'Адрес: ул. Пролетарская, д. 25' },
               { id: 4, text: 'Телефон: +7 (495) 050-09-82' },
               { id: 5, text: 'Электронная почта: educate@admhimki.ru' },
            ]
         },
         {
            id: 2,
            title: 'Управление физической культуры и спорта',
            textBody: [
               { id: 1, text: 'Начальник Управления: Ерёмин Александр Сергеевич' },
               { id: 2, text: 'Адрес: г. Химки, ул. Кирова, вл.24' },
               { id: 3, text: 'Телефон: +7 (495) 573-31-92' },
               { id: 4, text: 'Электронная почта: sport@admhimki.ru' },
            ]
         },
         {
            id: 3,
            title: 'Управление культуры',
            textBody: [
               { id: 1, text: 'Начальник Управления: Тарановская Елена Валерьевна' },
               { id: 2, text: 'Адрес: г. Химки, ул. Кудрявцева, д. 3' },
               { id: 3, text: 'Телефон: +7 (495) 573-06-69' },
               { id: 4, text: 'Электронная почта: culture@admhimki.ru ' },
            ]
         },
         {
            id: 4,
            title: 'Управление социальных коммуникаций',
            textBody: [
               { id: 1, text: 'Начальник Управления: Беккер Татьяна Александровна' },
               { id: 2, text: 'Адрес: г. Химки, Кирова, д. 24' },
               { id: 3, text: 'Телефон: +7 (495) 572-30-97' },
               { id: 4, text: 'Электронная почта: yck@admhimki.ru' },
            ]
         },
         {
            id: 5,
            title: 'Управление по делам несовершеннолетних',
            textBody: [
               { id: 1, text: 'Начальник Управления: Держинская Анна Юрьевна' },
               { id: 2, text: 'Адрес: г. Химки, ул. Юбилейный пр., д. 40' },
               { id: 3, text: 'Телефон: +7 (495) 573-66-94' },
               { id: 4, text: 'Электронная почта: kids@admhimki.ru' },
            ]
         },
         {
            id: 6,
            title: 'МАУ «Комбинат питания»',
            textBody: [
               { id: 1, text: 'Адрес: г. Химки, Вашутинское ш., д.10' },
               { id: 2, text: 'Телефон: +7 (498) 764-28-94' },
               { id: 3, text: 'Электронная почта: khp-himki@ya.ru' },
            ]
         },


         {
            id: 8,
            title: 'ЦПММС “Успех”',
            textBody: []
         },
         {
            id: 9,
            title: 'ЦПР',
            textBody: []
         },
         {
            id: 10,
            title: 'ИТ-Центр',
            textBody: []
         },
         {
            id: 11,
            title: 'АУ МСК «Восход»',
            textBody: [
               { id: 1, text: 'Директор: Малютин Андрей Евгеньевич' },
            ]
         },
      ]
   },
   {
      id: 5,
      url: 'kosolapov',
      img: kosolapov,
      surname: 'Косолапов',
      name: 'Василий Михайлович',
      jobTitle: 'Заместитель Главы городского округа по вопросам благоустройства',
      tel: ['+7 (495) 572-66-38'],
      mail: null,
      socialNetwork: null,
      area: 'Сфера дорожного хозяйства и благоустройства',
      areaSpoler: [
         {
            id: 1,
            title: 'Управление дорожного хозяйства и благоустройства',
            textBody: [
               { id: 1, text: 'Начальник Управления: Хилис Сергей Николаевич' },
               { id: 2, text: 'Адрес: г. Химки, ул.Ленинградская, д.25' },
               { id: 3, text: 'Телефон: +7 (495) 573-40-97' },
               { id: 4, text: 'Электронная почта: dorhozblago@admhimki.ru' },
            ]
         },
         {
            id: 2,
            title: 'МБУ «Объединенное городское хозяйство»',
            textBody: [
               { id: 1, text: 'Начальник Управления: Евстигнеева Ольга Викторовна' },
               { id: 2, text: 'Адрес: г. Химки, ул.Ленинградская, д.25' },
            ]
         },

      ]
   },
   {
      id: 6,
      url: 'zarubina',
      img: zarubina,
      surname: 'Зарубина ',
      name: 'Татьяна Юрьевна ',
      jobTitle: 'Заместитель Главы городского округа',
      tel: ['+7 (495) 572-55-27'],
      mail: null,
      socialNetwork: null,
      area: 'Финансовые и экономические вопросы',
      areaSpoler: [
         {
            id: 1,
            title: 'Финансовое Управление',
            textBody: [
               { id: 1, text: 'Начальник Управления: Гурьева Наталия Николаевна' },
               { id: 2, text: 'Адрес: г. Химки, ул. Калинина, д.4' },
               { id: 3, text: 'Телефон: +7 (495) 572-55-27' },
               { id: 4, text: 'Электронная почта: finance@admhimki.ru' },
            ]
         },
         {
            id: 2,
            title: 'Управление экономики и планирования',
            textBody: [
               { id: 1, text: 'Начальник Управления: Прялухина Татьяна Александровна' },
               { id: 2, text: 'Адрес: г. Химки, ул. Калинина, д.4 ' },
               { id: 3, text: 'Телефон: +7 (495) 573-73-73' },
               { id: 4, text: 'Электронная почта: economics@admhimki.ru' },
            ]
         },
         {
            id: 3,
            title: 'МКУ «Центр бухгалтерского обслуживания городского округа Химки»',
            textBody: [
               { id: 2, text: 'Руководитель: Михальчук Татьяна Геннадиевна' },
               { id: 3, text: 'Адрес: г. Химки, ул. Калинина, д.4' },
               { id: 4, text: 'Телефон: +7 (495) 572-47-15' },
               { id: 5, text: 'Электронная почта: buh@admhimki.ru' },
            ]
         },
         {
            id: 4,
            title: 'МКУ «Центр бухгалтерского и кадрового сопровождения муниципальной сферы благоустройства, жилищно-коммунального и дорожного хозяйства»',
            textBody: [
               { id: 1, text: 'Руководитель: Мкртумян Кристина Самвели' },
               { id: 2, text: 'Адрес: г. Химки, ул.Калинина, д.4' },
            ]
         }
      ]
   },
   {
      id: 7,
      url: 'zaytsev',
      img: zaytsev,
      surname: 'Зайцев ',
      name: 'Андрей Валерьевич ',
      jobTitle: 'Заместитель Главы городского округа по работе со средствами массовой информации, территориальному развитию и молодежной политике',
      tel: ['+7 (495) 572-73-72'],
      mail: null,
      socialNetwork: null,
      area: 'Территориальные Управления',
      areaSpoler: [

         {
            id: 2,
            title: 'Управление по стратегическому развитию и взаимодействию с общественными организациями',
            textBody: [
               { id: 1, text: 'Начальник: Орлова Ксения Гельевна' },
            ]
         },
         {
            id: 3,
            title: 'МКУ «Управление информационной политики»',
            textBody: [
               { id: 2, text: 'Руководитель: Дроздова Екатерина Сергеевна' },
               { id: 3, text: 'Адрес: г. Химки, ул. Кирова, вл. 24' },
               { id: 4, text: 'Телефон: +7 (495) 572-73-72' },
               { id: 5, text: 'Электронная почта: media@admhimki.ru, press@admhimki.ru' },
            ]
         },
         {
            id: 4,
            title: 'МКУ “Управление молодежной политики и территориального развития”',
            textBody: [
               { id: 1, text: 'Руководитель: Громова Ирина Александровна' },
            ]
         },
         {
            id: 5,
            title: 'Территориальное управление микрорайонов Новогорск – Планерная',
            textBody: [
               { id: 1, text: 'Начальник: Понятойкин Иван Николаевич' },
            ]
         },
         {
            id: 6,
            title: 'Территориальное управление микрорайона Клязьма-Старбеево',
            textBody: [
               { id: 1, text: 'Начальник: Гентер Анна Сергеевна' },
            ]
         },
         {
            id: 7,
            title: 'Территориальное управление микрорайонов Сходня – Фирсановка',
            textBody: [
               { id: 1, text: 'Начальник: Петрухин Сергей Сергеевич' },
            ]
         },
         {
            id: 8,
            title: 'Территориальное управление микрорайона Левобережный',
            textBody: [
               { id: 1, text: 'Начальник: Капустина Людмила Юрьевна' },
            ]
         },
         {
            id: 9,
            title: 'Территориальное управление микрорайона Подрезково',
            textBody: [
               { id: 1, text: 'Начальник: Мишина Наталья Владимировна ' },
            ]
         },
         {
            id: 10,
            title: 'Территориальное управление Лунёвское',
            textBody: [
               { id: 1, text: 'Начальник: Михайлов Денис Сергеевич' },
            ]
         },
         {
            id: 11,
            title: 'Территориальное управление Кутузовское',
            textBody: [
               { id: 1, text: 'Начальник: Мазуров Дмитрий Николаевич' },
            ]
         }
      ]
   },
   {
      id: 8,
      url: 'tsukanov',
      img: tsukanov,
      surname: 'Цуканов ',
      name: 'Александр Геннадьевич ',
      jobTitle: 'Заместитель Главы городского округа по территориальной безопасности, взаимодействию с правоохранительными органами и противодействию коррупции',
      tel: ['+7 (495) 572-73-05'],
      mail: 'priem_security@admhimki.ru',
      socialNetwork: 'https://vk.com/id388025216',
      area: 'Территориальная безопасность, взаимодействие с правоохранительными органами и противодействие коррупции',
      areaSpoler: [
         {
            id: 1,
            title: 'Управление территориальной безопасности и противодействия коррупции',
            textBody: [
               { id: 1, text: 'Начальник Управления: Дзыба Игорь Валерьевич' },
               { id: 2, text: 'Адрес: г. Химки, Московская, д. 15' },
               { id: 3, text: 'Телефон: +7 (495) 572-73-00' },
               { id: 4, text: 'Электронная почта: security@admhimki.ru' },
            ]
         },
         {
            id: 2,
            title: 'Мобилизационный отдел',
            textBody: [
               { id: 1, text: 'Начальник отдела: Сахоненко Евгений Дмитриевич' },
               { id: 2, text: 'Адрес: г. Химки, ул. Московская, д.15' },
               { id: 3, text: 'Телефон: +7 (495) 572-65-81' },
               { id: 4, text: 'Электронная почта: military@admhimki.ru' },
            ]
         },
         {
            id: 3,
            title: 'Отдел защиты государственной тайны',
            textBody: [
               { id: 1, text: 'Начальник отдела: Гущина Марина Александровна' },
               { id: 2, text: 'Адрес: г. Химки, ул. Московская, д.15' },
               { id: 3, text: 'Телефон: +7 (495) 572-15-35' },
               { id: 4, text: 'Электронная почта: gov_defence@admhimki.ru' },
            ]
         },
         {
            id: 4,
            title: 'МБУ «Химспас»',
            textBody: [
               { id: 2, text: 'Директор: Каика Сергей Николаевич' },
               { id: 3, text: 'Адрес: г. Химки, ул. Кольцевая, дом 18' },
               { id: 4, text: 'Телефон: 8 (495) 575-85-85' },
               { id: 5, text: 'Электронная почта: himspas@admhimki.ru' },
            ]
         },
      ]
   },
   {
      id: 9,
      url: 'unknown',
      img: '',
      surname: 'Зарубина',
      name: 'Татьяна Юрьевна',
      jobTitle: 'Заместитель Главы городского округа по административной работе',
      tel: ['+7 (495) 572-11-62'],
      mail: 'priem_common@admhimki.ru',
      socialNetwork: null,
      area: '',
      areaSpoler: [
         /* {
            id: 1,
            title: 'Управление потребительского рынка и услуг',
            textBody: [
               { id: 1, text: 'Начальник управления – Мусинов Сергей Александрович' },
               { id: 2, text: 'Отдел рекламы: Начальник отдела – Увяткина Ирина Викторовна' },
               { id: 3, text: 'Адрес: г. Химки, ул. Пролетарская, д.6' },
               { id: 4, text: 'Телефон: +7 (495) 572-14-78' },
               { id: 5, text: 'Электронная почта: torg@admhimki.ru' },
            ]
         }, */
         /* {
            id: 2,
            title: 'МКУ «Специализированная служба в сфере погребения и похоронного дела»',
            textBody: [
               { id: 1, text: 'Муниципальное казенное учреждение «специализированная служба в сфере погребения и похоронного дела»' },
               { id: 2, text: 'Руководитель - Брунь Александр Сергеевич' },
               { id: 3, text: 'Адрес: г. Химки, пр-т Мельникова, д. 18' },
               { id: 4, text: 'Телефон: +7 (495) 123-38-80' },
               { id: 4, text: 'Электронная почта: mkuritual@admhimki.ru' },
            ]
         }, */

      ]
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
      jobTitle: 'Территориальное Управление микрорайонов Сходня - Фирсановка',
      tel: ['+7 (985) 634-43-91', '+7 (495) 574-72-67'],
      mail: 'sf_ta@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 12,
      url: 'mishina',
      img: mishina,
      surname: 'Мишина ',
      name: 'Наталья Владимировна ',
      jobTitle: 'Территориальное управление микрорайона Подрезково',
      tel: ['+7 (985) 634-47-62'],
      mail: 'pd_ta@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 13,
      url: 'kapustina',
      img: kapustina,
      surname: 'Капустина',
      name: 'Людмила Юрьевна',
      jobTitle: 'Территориальное Управление микрорайона Левобережный',
      tel: ['+7 (985) 439-18-20', '+7 (495) 570-34-98'],
      mail: 'lv_ta@admhimki.ru',
      area: null,
      areaSpoler: [
         {
            id: 1,
            title: 'МКУ “Управление молодежной политики и территориального развития”',
            textBody: [
               { id: 1, text: 'Начальник: Громова Ирина Александровна' },
            ]
         },
         {
            id: 2,
            title: 'Территориальное управление микрорайонов Новогорск – Планерная',
            textBody: [
               { id: 1, text: 'Начальник: Понятойкин Иван Николаевич' },
            ]
         },
         {
            id: 3,
            title: 'Территориальное управление микрорайона Клязьма-Старбеево',
            textBody: [
               { id: 1, text: 'Начальник: Гентер Анна Сергеевна' },
            ]
         },
         {
            id: 4,
            title: 'Территориальное управление микрорайонов Сходня – Фирсановка',
            textBody: [
               { id: 1, text: 'Начальник: Петрухин Сергей Сергеевич' },
            ]
         },
         {
            id: 5,
            title: 'Территориальное управление микрорайона Левобережный',
            textBody: [
               { id: 1, text: 'Начальник: Капустина Людмила Юрьевна' },
            ]
         },
         {
            id: 6,
            title: 'Территориальное управление микрорайона Подрезково',
            textBody: [
               { id: 1, text: 'Начальник: Мишина Наталья Владимировна ' },
            ]
         },
         {
            id: 7,
            title: 'Территориальное управление Луневское',
            textBody: [
               { id: 1, text: 'Начальник: Михайлов Денис Сергеевич' },
            ]
         },
         {
            id: 8,
            title: 'Территориальное управление Кутузовское ',
            textBody: [
               { id: 1, text: 'Начальник: Мазуров Дмитрий Николаевич' },
            ]
         }
      ]
   },
   {
      id: 14,
      url: 'kapustina',
      img: kapustina,
      surname: 'Капустина ',
      name: 'Людмила Юрьевна ',
      jobTitle: 'Территориальное Управление микрорайона Левобережный',
      tel: ['+7 (985) 439-18-20', '+7 (495) 570-34-98'],
      mail: 'lv_ta@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: [
         {
            id: 1,
            title: 'Территориальное управление микрорайонов Новогорск – Планерная',
            textBody: [
               { id: 1, text: 'Начальник: Понятойкин Иван Николаевич' },
            ]
         },
         {
            id: 2,
            title: 'Территориальное управление микрорайона Клязьма-Старбеево',
            textBody: [
               { id: 1, text: 'Начальник:  Гентер Анна Сергеевна' },
            ]
         },
         {
            id: 3,
            title: 'Территориальное управление микрорайонов Сходня – Фирсановка',
            textBody: [
               { id: 1, text: 'Начальник: Петрухин Сергей Сергеевич' },
            ]
         },
         {
            id: 4,
            title: 'Территориальное управление микрорайона Левобережный',
            textBody: [
               { id: 1, text: 'Начальник: Капустина Людмила Юрьевна' },
            ]
         },
         {
            id: 5,
            title: 'Территориальное управление микрорайона Подрезково',
            textBody: [
               { id: 1, text: 'Начальник: Мишина Наталья Владимировна ' },
            ]
         },
         {
            id: 6,
            title: 'Территориальное управление Луневское',
            textBody: [
               { id: 1, text: 'Начальник: Михайлов Денис Сергеевич' },
            ]
         },
         {
            id: 7,
            title: 'Территориальное управление Кутузовское',
            textBody: [
               { id: 1, text: 'Начальник: Мазуров Дмитрий Николаевич' },
            ]
         }
      ]
   },
   {
      id: 15,
      url: 'genter',
      img: genter,
      surname: 'Гентер ',
      name: 'Анна Сергеевна  ',
      jobTitle: 'Территориальное Управление микрорайона Клязьма - Старбеево',
      tel: ['+7 (985) 634-75-39', '+7 (495) 572-83-88'],
      mail: 'ks_ta@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 16,
      url: 'michailov',
      img: null,
      surname: 'Михайлов ',
      name: 'Денис Сергеевич.',
      jobTitle: 'Территориальное Управление Лунёвское',
      tel: ['+7 (985) 634-73-93'],
      mail: 'lunevo@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 17,
      url: 'poznyakova',
      img: poznyakova,
      surname: 'Познякова ',
      name: 'Ирина Александровна  ',
      jobTitle: 'Управление «Аппарат Администрации городского округа и кадровой политики»',
      tel: ['+7 (495) 572-65-27'],
      mail: 'hr_manager@admhimki.ru',
      socialNetwork: null,
      area: 'Структурные подразделения',
      areaSpoler: [
         {
            id: 1,
            title: 'Пресс-секретарь Главы городского округа',
            textBody: [
               { id: 1, text: 'Лукиных Кристина Николаевна' },
               { id: 2, text: 'Адрес: ул. Кирова, вл. 24' },
               { id: 3, text: 'Телефон: +7 (495) 572-73-72 (приёмная МКУ «Управление информационной политики»)' },
            ]
         },
         {
            id: 2,
            title: 'МКУ «Управление делами Администрации»',
            textBody: [
               { id: 1, text: 'Муниципальное казенное учреждение «Управление делами администрации»' },
               { id: 2, text: 'Руководитель - Галкина Елена Николаевна' },
               { id: 3, text: 'Адрес - г.Химки, ул.Калинина, д.4' },
               { id: 4, text: 'Телефон: +7 (495) 573-32-72' },
               { id: 5, text: 'Электронная почта: uprav@admhimki.ru' },
            ]
         },

      ]
   },
   {
      id: 18,
      url: 'pashin',
      img: pashin,
      surname: 'Пашин ',
      name: 'Василий Вадимович ',
      jobTitle: 'Управление делами и контроля',
      tel: null,
      mail: 'pashinvv@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 19,
      url: 'shipov',
      img: shipov,
      surname: 'Шипов ',
      name: 'Олег Николаевич ',
      jobTitle: 'Контрольно - ревизионное Управление',
      tel: ['+7 (495) 572-14-86'],
      mail: 'kro@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },

   {
      id: 20,
      url: 'ponyatoykin',
      img: null,
      surname: 'Понятойкин ',
      name: 'Иван Николаевич ',
      jobTitle: 'Территориальное управление Новогорск – Планерная',
      tel: ['+7 (985) 634-67-97', '+7 (495) 571-01-40'],
      mail: 'np_ta@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 21,
      url: 'mazurov',
      img: null,
      surname: 'Мазуров ',
      name: 'Дмитрий Николаевич ',
      jobTitle: 'Территориальное управление Кутузовское',
      tel: ['+7 (985) 634-45-08', '+7 (495) 572-32-28'],
      mail: 'kutuzovskoe@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 25,
      url: '',
      img: prekrasa,
      surname: 'Прекраса ',
      name: 'Ольга Николаевна ',
      jobTitle: 'Управление правового обеспечения и судебно-претензионной работы',
      tel: ['+7 (495) 572-00-88'],
      mail: 'judge@admhimki.ru',
      socialNetwork: null,
      area: null,
      areaSpoler: null
   },
   {
      id: 22,
      url: 'zhdankina',
      img: zhdankina,
      surname: 'Жданкина',
      name: 'Ирина Васильевна',
      jobTitle: 'Заместитель Главы городского округа по вопросам развития территорий и инвестициям',
      tel: [''],
      mail: null,
      socialNetwork: null,
      area: 'Сфера развития территорий и инвестиций',
      areaSpoler: [
         {
            id: 1,
            title: 'Управление по развитию территорий и инвестициям',
            textBody: [
               { id: 1, text: 'Начальник Управления: Янченко Евгения Юрьевна' },
               { id: 2, text: 'Адрес: г. Химки, ул. Калинина, д.4' },
               { id: 3, text: 'Телефон: +7 (495) 573-54-65, +7 (495) 572-81-70' },
               { id: 4, text: 'Электронная почта: industry@admhimki.ru' },
            ]
         },
         {
            id: 2,
            title: 'Управление потребительского рынка, услуг и рекламы',
            textBody: [
               { id: 1, text: 'Начальник управления: Золотенко Валентина Евгеньевна' },
               { id: 2, text: 'Отдел рекламы: Начальник отдела – Щептева Анастасия Алексеевна' },
               { id: 3, text: 'Адрес: г. Химки, ул. Пролетарская, д.6' },
               { id: 4, text: 'Телефон: +7 (495) 572-14-78' },
               { id: 5, text: 'Электронная почта: torg@admhimki.ru' },
            ]
         },
         {
            id: 3,
            title: 'МКУ «Специализированная служба в сфере погребения и похоронного дела»',
            textBody: [
               { id: 2, text: 'Руководитель: Брунь Александр Сергеевич' },
               { id: 3, text: 'Адрес: г. Химки, пр-т Мельникова, д. 18' },
               { id: 4, text: 'Телефон: +7 (495) 123-38-80' },
               { id: 4, text: 'Электронная почта: mkuritual@admhimki.ru' },
            ]
         },
         {
            id: 4,
            title: 'МП «ХимкиЭлектротранс»',
            textBody: [
               { id: 2, text: 'Директор: Васильев Александр Владимирович' },
               { id: 3, text: 'Адрес: г. Химки, пр-кт. Юбилейный, д. 69' },
               { id: 4, text: 'Телефон: +7 (495) 571-05-07' },
               { id: 5, text: 'Электронная почта: himtrol@himki.net' },
               { id: 6, text: 'Сайт: www.Химкиэлектротранс.рф' },
            ]
         },
         {
            id: 5,
            title: 'МКУ «Малый бизнес Химки»',
            textBody: [
               { id: 2, text: 'И.о. руководителя: Феляева Ольга Юрьевна' },
               { id: 3, text: 'Адрес: г. Химки, пр-т Мельникова, д. 12' },
               { id: 4, text: 'Телефон: +7 (495) 573-31-62, доб. 726, +7 (985) 684- 94-92' },
               { id: 5, text: 'Электронная почта: info.mbh@admhimki.ru' },
            ]
         },
      ]
   },
]

export default persons;
