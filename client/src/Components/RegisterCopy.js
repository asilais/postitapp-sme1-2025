import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Row, Col, Button } from "reactstrap";
import { useState } from "react";
import { addUser, deleteUser } from "../Features/UserSlice";
const Register = () => {
  const userList = useSelector((state) => state.users.value);
  //For form validation using react-hook-form

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const {
    register,

    handleSubmit, // Submit the form when this is called

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  // Handle form submission
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      dispatch(addUser(userData));
      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation all good.");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (email) => {
    try {
      dispatch(deleteUser(email));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input
              type="text"
              name="name"
              {...register("name", {
                value: name,
                onChange: (e) => setname(e.target.value),
              })}
            ></input>
            {name}
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input
              type="email"
              name="email"
              {...register("email", {
                value: email,
                onChange: (e) => setemail(e.target.value),
              })}
            ></input>
            {email}
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password", {
                value: password,
                onChange: (e) => setpassword(e.target.value),
              })}
            ></input>
            {password}
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword", {
                value: confirmPassword,
                onChange: (e) => setconfirmPassword(e.target.value),
              })}
            ></input>
            {confirmPassword}
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </form>
      {/* <Row>
        <Col md={6}>
          <h1>List of Users</h1>
          <table className="table">
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row> */}

      <Col md={6}>
        <h2>List of Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <td>Name</td>
              <td>Password</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.password}</td>
                <td>
                  <Button>Update</Button>
                </td>

                <td>
                  <Button onClick={() => handleDelete(user.email)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Col>
    </Container>
  );
};

export default Register;
