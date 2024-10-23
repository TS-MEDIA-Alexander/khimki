import React from "react";
import ContantContainerMain from "../../total/ContantContainerMain";
import { NavLink } from "react-router-dom";
import { ROUTER } from "../../config";
import DocumentContainerDownload from "../../Components/DocumentContainerDownload";
import s from "./LaborProtection.module.css";

const LaborProtection = (props) => {
  return (
    <div>
      <ContantContainerMain>
        <div className={`mt80 breadcrumbs`}>
          <NavLink to={ROUTER.activity.main} className="breadcrumbsFrom">
            Деятельность
          </NavLink>
          <NavLink to={ROUTER.activity.safety.main} className="breadcrumbsFrom">
            {" "}
            / Безопасность
          </NavLink>
          <span className="breadcrumbsTo"> / Охрана труда</span>
        </div>
        <div className={`mt24 pageTitle`}>Охрана труда</div>

        <div className="text">
          <div className="mt80 pageSubtitle">
            Что делать при несчастном случае на предприятии?
          </div>

          <p className="fw600">
            Если на производстве произошел несчастный случай, работодатели
            обязаны направить извещение о случившемся по следующим телефонам и
            факсам:
          </p>

          <p>
            Государственная инспекция труда в Московской области:
            <br />
            Электронная почта:{" "}
            <a href="mailto:3927678@mail.ru">3927678@mail.ru</a>
            <br />
            Факс: <a href="tel:+74995716235">+7 (499) 725-77-30</a>
          </p>

          <p>
            Химкинская городская прокуратура:
            <br />
            Электронная почта:{" "}
            <a href="mailto:himki@mosoblproc.ru">himki@mosoblproc.ru</a>
            <br />
            Телефон: <a href="tel:+74995716235">+7 (495) 571-62-35</a>
          </p>

          <p>
            Московское областное отделение Фонда социального страхования <br />
            Российской Федерации филиал №43:
            <br />
            Электронная почта:{" "}
            <a href="mailto:D_fil_43@ro50.fss.ru">D_fil_43@ro50.fss.ru</a>
            <br />
            Телефон: <a href="tel:+74955726531">+7 (495) 572-65-31</a>
          </p>

          <p>
            Московское областное объединение организаций профсоюзов:
            <br />
            Электронная почта:{" "}
            <a href="mailto:oot-mooop@mail.ru">oot-mooop@mail.ru</a>
            <br />
            Телефон: <a href="tel:+74959172871">+7 (495) 917-28-71</a>
          </p>

          <p>
            Администрация городского округа Химки Московской области:
            <br />
            Электронная почта:{" "}
            <a href="mailto:himki@mosreg.ru">himki@mosreg.ru</a>
            <br />
            Телефон: <a href="tel:+74955735465">+7 (495) 573-54-65</a>
          </p>
        </div>
        <div className={`mt80 borderMain borderDocumentContainer`}>
          <DocumentContainerDownload
            type={"PDF"}
            text="Памятка работодателю при несчастном случае на предприятии."
          />
        </div>
      </ContantContainerMain>
    </div>
  );
};

export default LaborProtection;
