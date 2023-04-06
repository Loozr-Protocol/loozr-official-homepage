import React from "react";
import Nav from "../Nav";

const AppLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default AppLayout;
