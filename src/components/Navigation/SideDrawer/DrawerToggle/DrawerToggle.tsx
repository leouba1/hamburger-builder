import React from "react";
import classes from "./DrawerToggle.module.css";

type Props = {
  clicked: () => void;
};

const DrawerToggle = ({ clicked }: Props) => {
  return (
    <div className={classes.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
