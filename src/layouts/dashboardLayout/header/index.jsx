import ProfileSection from "../../../components/ProfileSection";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>X-Solutions</h2>
      </div>
      <div>
        <ProfileSection />
      </div>
    </div>
  );
};

export default Header;
