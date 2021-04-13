import React, { Fragment, FC, ReactElement, useState } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

type Props = {};

const Layout: FC<Props> = ({ children }): ReactElement => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
      <main className={classes.Content}>{children}</main>
    </Fragment>
  );
};

export default Layout;
