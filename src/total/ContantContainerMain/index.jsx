import React, { Children } from "react";
import s from "./ContantContainerMain.module.css";

const ContantContainerMain = ({ children }) => {
  return <div className={s.contantContainer}>{children}</div>;
};

export default ContantContainerMain;
