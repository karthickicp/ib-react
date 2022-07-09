import Container from "react-bootstrap/Container";
import Header from "./header";
import { Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.css";
const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className={styles.bodyWrapper}>
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default DashboardLayout;
