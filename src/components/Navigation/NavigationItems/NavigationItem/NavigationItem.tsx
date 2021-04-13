import classes from "./NavigationItem.module.css";
import React, { FC } from "react";

type Props = {
  link: string;
  active?: boolean;
};

const NavigationItem: FC<Props> = ({ link, active, children }) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={link} className={active ? classes.active : undefined}>
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
