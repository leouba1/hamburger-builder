import React, { Fragment, ReactNode } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

type Props = {
  show: boolean;
  modalClosed: () => void;
  children: ReactNode;
};

const Modal = ({ children, show, modalClosed }: Props) => {
  return (
    <Fragment>
      <Backdrop show={show} clicked={modalClosed}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default React.memo(Modal);
