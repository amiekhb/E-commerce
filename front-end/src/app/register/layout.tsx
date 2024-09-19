import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
