import styles from "./dashboard.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const Dashboard = () => {
  const products = [
    { title: "Aurora", updatedDate: "21 Aug 19" },
    { title: "Cold Fusion", updatedDate: "21 Aug 19" },
    { title: "Dagwood", updatedDate: "21 Aug 19" },
    { title: "Fireball", updatedDate: "21 Aug 19" },
    { title: "Kryptonite", updatedDate: "21 Aug 19" },
    { title: "Project-X", updatedDate: "21 Aug 19" },
    { title: "omega", updatedDate: "21 Aug 19" },
    { title: "sirius", updatedDate: "21 Aug 19" },
  ];
  return (
    <div>
      <div className={styles.topSec}>
        <h1>Project List and Create</h1>
        <p>You can create and edit and delete the project here.</p>
      </div>
      <div className={styles.searchWrapper}>
        <Col xs={12}>
          <Row>
            <Col md={4} lg={3}>
              <div className={styles.left}>
                <i className="bi bi-search"></i>
                <Form.Control
                  type="text"
                  name="search"
                  placeholder="Search Project"
                />
              </div>
            </Col>
            <Col
              md={{ span: 8 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 5, offset: 4 }}
            >
              <div className={styles.right}>
                <Form.Select
                  aria-label="Default select example"
                  className="me-3"
                >
                  <option>Open this select menu</option>
                  <option value="decending">Sort A-Z decending</option>
                  <option value="ascending">Sort A-z ascending</option>
                </Form.Select>
                <button className="Btn Btn-primary">Create Project</button>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
      <div className={styles.productWrapper}>
        {products.map((product) => (
          <Card key={product.title}>
            <img src="src\assets\img\profile.jpg" alt="product profile pic" />
            <h4>{product.title}</h4>
            <p>updated {product.updatedDate}</p>
            <button>Explore</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
