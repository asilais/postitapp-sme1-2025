import loginimage from "../Images/loginImage.jpg";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <img src={loginimage} className="loginsmall" />

      <Container>
        <Form>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Button>login</Button>
            </Col>
          </Row>

          <Row>
            <Col md={3}></Col>
          </Row>
        </Form>
      </Container>

      <p className="smalltext">
        No Account? <Link to="/register">Sign Up now.</Link>
      </p>
    </div>
  );
};

export default Login;
