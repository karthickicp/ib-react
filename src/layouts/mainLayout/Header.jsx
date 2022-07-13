import React from "react";
import ProfileSection from "./../../components/ProfileSection";
import styles from "./mainLayout.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Collections</h1>
      <ProfileSection />
    </div>
  );
};
export default Header;
