import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h2>X-Solutions</h2>
      </div>
      <div>
        <div className={styles.profileSec}>
          <i className="bi bi-search searchIcon"></i>
          <img src="src/assets/img/profile.jpg" alt="" />
          <span>X-Solutions</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
