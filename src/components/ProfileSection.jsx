import React from "react";
import styles from "./components.module.css";
import profilePic from "/src/assets/img/profile.jpg";

const ProfileSection = () => {
  return (
    <div className={styles.profileSec}>
      <i className="bi bi-search searchIcon"></i>
      <img src={profilePic} alt="" />
      <span>X-Solutions</span>
      <i className="bi bi-chevron-down"></i>
    </div>
  );
};
export default ProfileSection;
