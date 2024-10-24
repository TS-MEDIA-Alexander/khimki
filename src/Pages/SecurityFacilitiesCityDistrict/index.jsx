import React from "react";
import s from "./SecurityFacilitiesCityDistrict.module.css";
import ContantContainerMain from "../../total/ContantContainerMain";
import { ROUTER } from "../../config";
import { NavLink } from "react-router-dom";
import Table from "../../Components/Table";
import warden_objects from "../../assets//tables/warden_objects.json";

const SecurityFacilitiesCityDistrict = (props) => {
  return (
    <div>
      <ContantContainerMain>
        <div className={`mt80 breadcrumbs`}>
          <NavLink to={ROUTER.activity.main} className="breadcrumbsFrom">
            Деятельность
          </NavLink>
          <NavLink to={ROUTER.activity.safety.main} className="breadcrumbsFrom">
            / Безопасность
          </NavLink>
          <span className="breadcrumbsTo">
            {" "}
            / Объекты безопасности городского округа
          </span>
        </div>
        <div className="mt24 pageTitle">
          <p>Объекты безопасности</p>
          городского округа
        </div>

        <div className="mt80">
          <Table table={warden_objects} style={s} />
        </div>
      </ContantContainerMain>
    </div>
  );
};
export default SecurityFacilitiesCityDistrict;
