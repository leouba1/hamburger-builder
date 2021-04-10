import React, { FC } from "react";
import classes from "./Button.module.css";

type Props = {
  clicked: () => void;
  btnType: string;
};

const Button: FC<Props> = ({ clicked, btnType, children }) => {
  return (
    <button
      onClick={clicked}
      className={[classes.Button, classes[btnType]].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
