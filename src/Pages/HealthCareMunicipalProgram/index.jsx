import React from "react";
import s from "./HealthCareMunicipalProgram.module.css";
import ContantContainerMain from "../../total/ContantContainerMain";
import { NavLink } from "react-router-dom";
import { ROUTER } from "../../config";
import LinkContainer from "../../Components/LinkContainer";
import CardHuman from "../../Components/CardHuman";
import vatutina from "../../assets/img/Persons/vatutina.png";
import emblem from "../../assets/img/khimkiDistrict/Symbolism/gerb.png";

const HealthCareMunicipalProgram = (props) => {
  return (
    <div>
      <ContantContainerMain>
        <div className={`mt80 breadcrumbs`}>
          <NavLink to={ROUTER.activity.main} className="breadcrumbsFrom">
            Деятельность
          </NavLink>
          <NavLink
            to={ROUTER.activity.municipalPrograms.main}
            className="breadcrumbsFrom"
          >
            {" "}
            / Муниципальные программы
          </NavLink>
          <span className="breadcrumbsTo"> / Здравоохранение</span>
        </div>
        <div className={`mt24 pageTitle`}>Здравоохранение</div>

        <div className={`mt80 borderMain ${s.linkContainer}`}>
          <LinkContainer
            link="https://old.admhimki.ru/dokumenty/zdravoohranenie-2023/"
            text={"Правовое обеспечение и полная версия программы"}
          />
          <div className="mt24">
            <LinkContainer
              link="https://old.admhimki.ru/dokumenty/zdravoohranenie2020-2024_213_arhiv/"
              text="Здравоохранение 2020-2024 (архив)"
            />
          </div>
        </div>

        <div className="mt80 pageSubtitle">
          Координатор муниципальной программы
        </div>

        <CardHuman
          jobTitle="Заместитель Главы Администрации по вопросам социальной политики, культуры и спорта"
          name="Ватутина"
          surname="Анна Эдуардовна"
          info="Контакты для обращения граждан:"
          contactsArr={["+7 (495) 573-05-02", "priem_health@admhimki.ru"]}
          img={vatutina}
          style={{ marginTop: "40px" }}
        />

        <div className="mt80 pageSubtitle">
          Ответственные ОМСУ администрации за разработку и реализацию
          муниципальной программы
        </div>

        <CardHuman
          jobTitle="Управление социальных коммуникаций Администрации"
          name="Беккер"
          surname="Татьяна Александровна"
          info="Контакты для обращения граждан:"
          adress={"г. Химки, Кирова, д. 24"}
          contactsArr={["+7 (495) 572-30-97", "yck@admhimki.ru"]}
          img={emblem}
          style={{ marginTop: "40px" }}
        />

        <div className="text">
          <div className="mt80 pageSubtitle">
            Подпрограммы муниципальной программы
          </div>
          <ul>
            <li>
              Профилактика заболеваний и формирование здорового образа жизни.
              Развитие первичной медико-санитарной помощи
            </li>
            <li>
              Финансовое обеспечение системы организации медицинской помощи
            </li>
          </ul>
          <div className="mt38 pageSubtitle">Краткое описание программы</div>
          <p>
            Главной задачей системы здравоохранения городского округа Химки
            является организация доступной и качественной медицинской помощи
            населению городского округа.
          </p>
          <p>
            Муниципальная программа принята с целью улучшения состояния здоровья
            населения, обеспечения доступности и улучшения качества оказания
            медицинской помощи жителям городского округа, а также повышения
            эффективности медицинских услуг.
          </p>
          <p>
            Одним из важнейших направлений деятельности учреждений
            здравоохранения городского округа Химки является реализация мер
            государственной политики, направленных на снижение смертности
            населения, прежде всего от основных причин смерти, профилактику,
            своевременное выявление на ранних стадиях и лечение заболеваний,
            которые дают высокий процент смертности среди населения, снижение
            материнской и младенческой смертности, повышение рождаемости и
            увеличение продолжительности жизни.
          </p>
          <p>Цели муниципальной программы «Здравоохранение»:</p>
          <ul>
            <li>
              улучшение состояния здоровья населения и увеличение ожидаемой
              продолжительности жизни. Развитие первичной медико-санитарной
              помощи, путем развития системы раннего выявления заболеваний,
              патологических состояний и факторов риска их развития, включая
              проведение профилактических осмотров и диспансеризации населения
              трудоспособного возраста.
            </li>
            <li>
              привлечение и закрепление медицинских кадров в государственных
              учреждениях здравоохранения Московской области.
            </li>
          </ul>
          <p>
            Основные мероприятия направлены на достижение целей и решение задач
            каждой подпрограммы. Реализация мероприятий позволит достичь
            показателей результативности, характеризующих государственную
            программу в целом и каждую подпрограмму в частности, в том числе
            будут достигнуты показатели, предусмотренные в указах Президента
            Российской Федерации и обращениях Губернатора Московской области.
          </p>
          <p>
            Муниципальной программой предусмотрена реализация следующих основных
            мероприятий:
          </p>
          <p>
            В рамках подпрограммы «Профилактика заболеваний и формирование
            здорового образа жизни. Развитие первичной медико-санитарной
            помощи»:
          </p>
          <ul>
            <li>
              Развитие первичной медико-санитарной помощи, а также системы
              раннего выявления заболеваний, патологических состояний и факторов
              риска их развития, включая проведение медицинских осмотров
            </li>
            <li>и диспансеризации населения;</li>
          </ul>
          <p>
            Одним из ключевых факторов, влияющих на эффективность реализации
            мероприятий Подпрограммы I, является формирование в обществе
            понимания и принятия обществом культуры взаимных обязательств. Это
            понимание должно включать наличие не только обязательств со стороны
            государства по обеспечению охраны здоровья и государственных
            гарантий, но и обязательств граждан заботиться о собственном
            здоровье, соблюдать определенные нормы. Такая культура в
            значительной мере должна повлиять на улучшение здоровья населения,
            обеспечив недопущение вреда здоровью или его коррекцию на самых
            ранних стадиях, что одновременно снизит темпы увеличения нагрузки на
            звено стационарной медицинской помощи и позволит направить
            дополнительные финансовые ресурсы на увеличение объема
            государственных гарантий оказания медицинской помощи в сложных
            медицинских случаях.
          </p>
          <p>
            В этой связи формирование здорового образа жизни у граждан, в том
            числе у детей и подростков, должно быть существенным образом
            поддержано мероприятиями, направленными на информирование граждан о
            факторах риска для их здоровья, формирование мотивации к ведению
            здорового образа жизни и создание условий для ведения здорового
            образа жизни, снижения уровней факторов риска неинфекционных
            заболеваний. Здоровый образ жизни предполагает отказ от потребления
            табака и наркотиков, злоупотребления алкоголем, а также рациональное
            питание и наличие достаточного уровня физической активности,
            предотвращающих развитие ожирения. Помимо отказа от активного
            потребления табака важно быть защищенным от пассивного курения,
            оказывающего патологическое действие на организм человека. Ведение
            здорового образа жизни, то есть отсутствие поведенческих факторов
            риска неинфекционных заболеваний, является важнейшим условием
            снижения вероятности развития или уменьшения степени выраженности
            биологических факторов риска - артериальной гипертонии, повышения
            уровня холестерина и глюкозы в крови. В свою очередь, это будет
            способствовать снижению вероятности развития или уменьшению степени
            выраженности заболеваний, связанных с атеросклерозом, являющихся
            основными причинами сверхвысокой смертности населения, особенно
            трудоспособного возраста (инсульт, инфаркт миокарда, хронические
            формы болезней).
          </p>
          <p>
            В рамках реализации Подпрограммы 1 предусмотрено проведение
            профилактических медицинских осмотров и диспансеризации взрослого
            населения в соответствии с федеральными нормативно-правовыми актами,
            проведение профилактического консультирования в ходе диспансеризации
            населения и плановых профилактических осмотров. Одними из наиболее
            важных задач в рамках развития медицинской профилактики и
            диспансеризации населения являются задачи по выявлению
            злокачественных новообразований на I-II стадии заболевания, а также
            организации дифференцированных скрининговых исследований в
            Московской области в зависимости от уровня распространенности
            туберкулеза.
          </p>
          <p>
            В рамках подпрограммы «Финансовое обеспечение системы организации
            медицинской помощи»:
          </p>
          <ul>
            <li>Развитие мер социальной поддержки медицинских работников.</li>
          </ul>
          <p>
            В рамках мероприятий подпрограммы «Финансовое обеспечение системы
            организации медицинской помощи» предусмотрено стимулирование
            привлечения медицинских и фармацевтических работников для работы в
            медицинских учреждениях, установление медицинским и фармацевтическим
            работникам медицинских организаций дополнительных гарантий и мер
            социальной поддержки.
          </p>
          <p>
            На сегодняшний день в России сложилась сложная демографическая
            ситуация, обусловленная старением и высоким уровнем смертности
            населения, ростом распространенности хронических заболеваний,
            сохранением социально-экономического неравенства в доступе к услугам
            здравоохранения.
          </p>
          <p>
            Адекватное лекарственное обеспечение критически важно для сохранения
            и укрепления здоровья населения как главной социально-экономической
            ценности государства.
          </p>
          <p>
            Среди факторов, обусловливающих недостаточную удовлетворенность
            граждан лекарственным обеспечением в настоящее время, следует
            отметить:
          </p>
          <ul>
            <li>
              рост стоимости медикаментозной составляющей лечения, связанной с
              появлением дорогостоящих инновационных препаратов для диагностики,
              лечения и профилактики широко распространённых заболеваний;
            </li>
            <li>
              слабую систему профилактики (управления рисками) и ранней
              диагностики заболеваний, достаточной для предотвращения развития
              тяжелых осложнений или лечения заболеваний на ранней стадии, что
              ведет к постоянному удорожанию стоимости лечения;
            </li>
            <li>
              неравномерность лекарственного обеспечения на федеральном и
              региональном уровнях различных категорий граждан, включая
              льготные, необходимыми для их лечения лекарственными средствами.
            </li>
          </ul>
          <p>
            Повышение доступности лекарственных средств для населения возможно
            за счет расширения объемов государственных гарантий и внедрения
            солидарных страховых механизмов лекарственного обеспечения.
          </p>
          <p>
            С целью создания условий для получения населением качественной
            медицинской помощи, а также для обеспечения мер социальной поддержки
            и улучшения демографических показателей, в городском округе Химки в
            рамках муниципальной программы «Здравоохранение» ведется работа по
            обеспечению полноценным питанием беременных женщин, кормящих
            матерей, а также детей до 3-х лет, по совершенствованию системы
            лекарственного обеспечения декретированных групп населения. Кроме
            того, медицинским работникам производится частичная компенсация
            выплат за аренду жилых помещений и проезд до места работы.
          </p>
        </div>
      </ContantContainerMain>
    </div>
  );
};
export default HealthCareMunicipalProgram;