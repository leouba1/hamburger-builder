import React, { FC } from "react";
import classes from "./BuildControl.module.css";

type BuildControlProps = {
  label: string;
  disabled: boolean;
  added: () => void;
  remove: () => void;
}

const BuildControl: FC<BuildControlProps> = ({ label, added, remove, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={remove} disabled={!disabled}>Less</button>
      <button className={classes.More} onClick={added}>More</button>
    </div>
  );
};

export default BuildControl;
