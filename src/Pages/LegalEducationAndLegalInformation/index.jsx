import React from "react";
import s from "./LegalEducationAndLegalInformation.module.css";
import ContantContainerMain from "../../total/ContantContainerMain";
import arrow from "../../assets/icons/arrowYellow.svg";
import { NavLink } from "react-router-dom";
import { ROUTER } from "../../config";
import DocumentContainerDownload from "../../Components/DocumentContainerDownload";

const LegalEducationAndLegalInformation = (props) => {
  return (
    <div>
      <ContantContainerMain>
        <div className={`mt80 breadcrumbs`}>
          <NavLink
            to={ROUTER.prosecutorOffice.main}
            className="breadcrumbsFrom"
          >
            Прокуратура
          </NavLink>
          <span className="breadcrumbsTo">
            {" "}
            / Правовое просвещение и правовое информирование
          </span>
        </div>
        <div className={`mt24 pageTitle`}>
          <p>Правовое просвещение</p>и правовое информирование
        </div>

        <div className="text">
          <div className="mt80 pageSubtitle">
            Раздел создан во исполнение требований
          </div>
        </div>
        <div className={`mt40 borderMain borderDocumentContainer`}>
          <DocumentContainerDownload
            type={"PDF"}
            text="Приказа Генеральной прокуратуры Российской Федерации от 2 августа 2018 г. № 471 «Об организации в органах прокуратуры Российской Федерации работы по правовому просвещению и правовому информированию»"
          />
        </div>
        <div className="text">
          <div className="mt80 pageSubtitle">
            О прокуратуре российской федерации
          </div>
          <div className={s.box}>
            <div className="mt38 oval">Конституция Российской Федерации</div>
            <div className="mt38 oval">Статья 129</div>
          </div>

          <ol>
            <li>
              Прокуратура Российской Федерации - единая федеральная
              централизованная система органов, осуществляющих надзор за
              соблюдением Конституции Российской Федерации и исполнением
              законов, надзор за соблюдением прав и свобод человека и
              гражданина, уголовное преследование в соответствии со своими
              полномочиями, а также выполняющих иные функции. полномочия и
              функции прокуратуры Российской Федерации, ее организация и порядок
              деятельности определяются федеральным законом.
            </li>
            <li>
              Прокурорами могут быть граждане Российской Федерации, не имеющие
              гражданства иностранного государства либо вида на жительство или
              иного документа, подтверждающего право на постоянное проживание
              гражданина Российской Федерации на территории иностранного
              государства. прокурорам в порядке, установленном федеральным
              законом, запрещается открывать и иметь счета (вклады), хранить
              наличные денежные средства и ценности в иностранных банках,
              расположенных за пределами территории Российской Федерации.
            </li>
            <li>
              Генеральный прокурор Российской Федерации, заместители
              Генерального прокурора Российской Федерации назначаются на
              должность после консультаций с Советом Федерации и освобождаются
              от должности Президентом Российской Федерации.
            </li>
            <li>
              Прокуроры субъектов Российской Федерации, прокуроры военных и
              других специализированных прокуратур, приравненные к прокурорам
              субъектов Российской Федерации, назначаются на должность после
              консультаций с Советом Федерации и освобождаются от должности
              Президентом Российской Федерации.
            </li>
            <li>
              Иные прокуроры могут назначаться на должность и освобождаться от
              должности Президентом Российской Федерации, если такой порядок
              назначения на должность и освобождения от должности установлен
              федеральным законом.
            </li>
            <li>
              Если иное не предусмотрено федеральным законом, прокуроры городов,
              районов и приравненные к ним прокуроры назначаются на должность и
              освобождаются от должности Генеральным прокурором Российской
              Федерации.
            </li>
          </ol>
          <div className="mt80 pageSubtitle">
            Федеральный закон от 17 января 1992 г. № 2202-1 <br />
            «О ПРОКУРАТУРЕ РОССИЙСКОЙ ФЕДЕРАЦИИ»
          </div>

          <p>
            Прокуратура Российской Федерации - единая федеральная
            централизованная система органов, осуществляющих надзор за
            соблюдениемКонституции Российской Федерации и исполнением законов,
            надзор за соблюдением прав и свобод человека и гражданина, уголовное
            преследование в соответствии со своими полномочиями, а также
            выполняющих иные функции.
          </p>
          <div className="mt38 fw600">
            В целях обеспечения верховенства закона, единства и укрепления
            законности, защиты прав и свобод человека и гражданина, а также
            охраняемых законом интересов общества и государства прокуратура
            Российской Федерации осуществляет:
          </div>

          <ul>
            <li>
              Надзор за исполнением законов федеральными органами исполнительной
              власти, Следственным комитетом Российской Федерации,
              представительными (законодательными) и исполнительными органами
              субъектов Российской Федерации, органами местного самоуправления,
              органами военного управления, органами контроля, их должностными
              лицами, субъектами осуществления общественного контроля за
              обеспечением прав человека в местах принудительного содержания и
              содействия лицам, находящимся в местах принудительного содержания,
              органами управления и руководителями коммерческих и некоммерческих
              организаций, а также за соответствием законам издаваемых ими
              правовых актов;
            </li>
            <li>
              Надзор за соблюдением прав и свобод человека и гражданина
              федеральными органами исполнительной власти, Следственным
              комитетом Российской Федерации, представительными
              (законодательными) и исполнительными органами субъектов Российской
              Федерации, органами местного самоуправления, органами военного
              управления, органами контроля, их должностными лицами, субъектами
              осуществления общественного контроля за обеспечением прав человека
              в местах принудительного содержания и содействия лицам,
              находящимся в местах принудительного содержания, а также органами
              управления и руководителями коммерческих и некоммерческих
              организаций;
            </li>
            <li>
              Надзор за исполнением законов органами, осуществляющими
              оперативно-розыскную деятельность, дознание и предварительное
              следствие;
            </li>
            <li>Надзор за исполнением законов судебными приставами;</li>
            <li>
              Надзор за исполнением законов администрациями органов и
              учреждений, исполняющих наказание и применяющих назначаемые судом
              меры принудительного характера, администрациями мест содержания
              задержанных и заключенных под стражу;
            </li>
            <li>
              Уголовное преследование в соответствии с полномочиями,
              установленными уголовно-процессуальным законодательством
              Российской Федерации;
            </li>
            <li>
              Координацию деятельности правоохранительных органов по борьбе с
              преступностью;
            </li>
            <li>
              Возбуждение дел об административных правонарушениях и проведение
              административного расследования в соответствии с полномочиями,
              установленными Кодексом Российской Федерации об административных
              правонарушениях и другими федеральными законами.
            </li>
          </ul>

          <p>
            Прокуроры в соответствии с процессуальным законодательством
            Российской Федерации участвуют в рассмотрении дел судами,
            арбитражными судами (далее - суды), опротестовывают противоречащие
            закону решения, приговоры, определения и постановления судов.
            Прокуратура Российской Федерации принимает участие в правотворческой
            деятельности. Генеральная прокуратура Российской Федерации выпускает
            специальные издания.
          </p>
        </div>
        <div className="mt38">
          <div style={{ display: "flex" }}>
            <a
              href="http://pravo.gov.ru/proxy/ips/?docbody=&nd=102014157"
              className={`btnY ${s.virtualBtn}`}
            >
              Читать полный текст Закона <img src={arrow} alt="" />
            </a>
          </div>
        </div>
      </ContantContainerMain>
    </div>
  );
};

export default LegalEducationAndLegalInformation;