import React, { Fragment, FC, ReactElement } from "react";
import classes from "./Layout.module.css";

type Props = {};

const Layout: FC<Props> = ({ children }): ReactElement => {
  return (
    <Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{children}</main>
    </Fragment>
  );
};

export default Layout;
