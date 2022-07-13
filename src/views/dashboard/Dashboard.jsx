import styles from "./dashboard.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import profilePic from "/src/assets/img/profile.jpg";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const productList = [
    { title: "Aurora", updatedDate: "21 Aug 19" },
    { title: "Cold Fusion", updatedDate: "21 Aug 19" },
    { title: "Dagwood", updatedDate: "21 Aug 19" },
    { title: "Fireball", updatedDate: "21 Aug 19" },
    { title: "Kryptonite", updatedDate: "21 Aug 19" },
    { title: "sirius", updatedDate: "21 Aug 19" },
    { title: "Project-X", updatedDate: "21 Aug 19" },
    { title: "omega", updatedDate: "21 Aug 19" },
  ];
  const [products, setProducts] = useState({});
  const [sortOption, setSortOption] = useState("decending");

  const filterProducts = (search) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    if (search) {
      setProducts(filteredProducts);
    } else {
      setProducts(productList);
    }
  };
  useEffect(() => {
    switch (sortOption) {
      case "ascending":
        const ascendingList = productList.sort(
          (prev, next) => prev.title.toLowerCase() < next.title.toLowerCase()
        );
        setProducts(ascendingList);
        break;
      case "decending":
        const descendingList = productList.sort(
          (prev, next) => next.title.toLowerCase() < prev.title.toLowerCase()
        );
        setProducts(descendingList);
        break;
      default:
        setProducts(productList);
    }
  }, [sortOption]);
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
              <div className="searchSec">
                <i className="bi bi-search"></i>
                <Form.Control
                  type="text"
                  name="search"
                  placeholder="Search Project"
                  onChange={(e) => filterProducts(e.target.value)}
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
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="decending">Sort A-Z decending</option>
                  <option value="ascending">Sort Z-A ascending</option>
                </Form.Select>
                <button className="Btn Btn-primary">Create Project</button>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
      <div className={styles.productWrapper}>
        {products.length > 0 &&
          products.map((product) => (
            <Card key={product.title}>
              <img src={profilePic} alt="product profile pic" />
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
