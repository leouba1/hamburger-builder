import React from "react";
import classes from "./Backdrop.module.css";

type Props = {
  show: boolean;
  clicked: () => void;
};

const Backdrop = ({ show, clicked }: Props) => {
  const result = show ? <div className={classes.Backdrop} onClick={clicked}></div> : null;
  return result;
};

export default Backdrop;
