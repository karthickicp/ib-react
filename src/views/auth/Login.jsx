import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styles from "./Login.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const inititalValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Enter Your Email Address"),
    password: Yup.string()
      .min(6, "Your Password must be 6 Characters")
      .required("Password is Required"),
  });
  return (
    <div className={styles.loginWrapper}>
      <Container>
        <Row>
          <Col md={6} xl={5} className={styles.leftSection}>
            <h4>Ibreakers</h4>
            <h1>Good Morning Welcome Back.</h1>
            <Formik
              initialValues={inititalValues}
              validationSchema={validationSchema}
              onSubmit={() => {
                navigate("/dashboard");
              }}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <Form className="w-100 form" onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="you@example.com"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email && (
                      <Form.Text className="text-danger">
                        {errors.email}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="w-100">
                      Password
                      <span className={styles.forgotPwd}>Forgot Password</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder="Enter 6 character or more"
                      onChange={handleChange}
                    />
                    {errors.password && touched.password && (
                      <Form.Text className="text-danger">
                        {errors.password}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <button
                    variant="primary"
                    type="submit"
                    className="Btn Btn-primary w-100 mt-2"
                  >
                    Your Email
                  </button>
                </Form>
              )}
            </Formik>

            <p className={styles.signUp}>
              Don't have an account? <span>Sign Up</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
