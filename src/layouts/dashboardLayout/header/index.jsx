import styles from "./header.module.css";
import profilePic from "/src/assets/img/profile.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h2>X-Solutions</h2>
      </div>
      <div>
        <div className={styles.profileSec}>
          <i className="bi bi-search searchIcon"></i>
          <img src={profilePic} alt="" />
          <span>X-Solutions</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
