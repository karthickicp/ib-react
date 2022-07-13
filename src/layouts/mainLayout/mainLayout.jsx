import React from "react";
import Header from "./Header";
import Topbar from "./Topbar";
import styles from "./mainLayout.module.css";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

export const MainLayout = () => {
  return (
    <div className={styles.mainLayoutWrapper}>
      <SideMenu />
      <div className={styles.mainLayout}>
        <Header />
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
