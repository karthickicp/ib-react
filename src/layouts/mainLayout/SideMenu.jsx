import React, { useState } from "react";
import styles from "./mainLayout.module.css";
const SideMenu = () => {
  const sideMenuIcons = [
    "bi bi-speedometer2",
    "bi bi-folder2-open",
    "bi bi-reply-fill",
    "bi bi-gear-fill",
  ];

  const [isNavActive, setIsNavActive] = useState(false);
  return (
    <div className={styles.sideMenuWrapper}>
      <div className={styles.sideMenu}>
        <ul>
          {sideMenuIcons.map((sideMenuIcon, index) => (
            <li key={`sidemenuIcon-${index}`}>
              <i
                className={sideMenuIcon}
                onClick={() => setIsNavActive(!isNavActive)}
              ></i>
            </li>
          ))}
        </ul>
        <div>
          <i className="bi bi-question-circle"></i>
        </div>
      </div>

      <div
        className={styles.navMenu}
        style={{ width: isNavActive ? "220px" : 0 }}
      ></div>
    </div>
  );
};

export default SideMenu;
