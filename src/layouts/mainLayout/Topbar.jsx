import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "./mainLayout.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div>
        <span className={styles.basePath}>BASE BATH</span>
        <Breadcrumb>
          <Breadcrumb.Item href="#">ecommercestage</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Collections</Breadcrumb.Item>
          <Breadcrumb.Item active>default</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styles.right}>
        <div className="searchSec">
          <i className="bi bi-search"></i>
          <Form.Control
            type="text"
            name="search"
            placeholder="Search Project"
            onChange={(e) => filterProducts(e.target.value)}
          />
        </div>
        <button className="Btn Btn-primary">Add Node</button>
      </div>
    </div>
  );
};
export default Topbar;
