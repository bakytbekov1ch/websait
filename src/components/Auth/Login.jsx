import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaFastBackward } from "react-icons/fa";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

function Login() {
  // const [data, setData] = useState({email:"",password:""})

  const [user, setUser] = useState({ email: "", password: "" });
  async function serviceHandler() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.name,
        user.email,
        user.password
      );
      console.log(res);

      setUser({ email: "", password: "" });
      toast.success("email is succes");
    } catch (error) {
      if (error) {
        toast.error("email is error");
      }
    }
  }
  function onchangeHandler(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div className="Login">
      <div className="newRegister">
        <Card.Body>
          <h1 className="new__title">Sign Up</h1>
          <ToastContainer />
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="newRegister__title">
                Name, Email, address, Password
              </Form.Label>
              <div className="newRegister__block">
                <Form.Control
                  name="name"
                  onChange={onchangeHandler}
                  type="name"
                  placeholder="name"
                />
                <Form.Control
                  name="email"
                  onChange={onchangeHandler}
                  type="email"
                  placeholder="name@example.com"
                />
                <Form.Control
                  name="pasaword"
                  onChange={onchangeHandler}
                  type="password"
                  placeholder="password"
                />
                <Form.Control
                  name="pasaword"
                  onChange={onchangeHandler}
                  type="password"
                  placeholder="password"
                />
                <Button
                  style={{ width: 90, fontSize: 18 }}
                  variant="outline-success"
                  onClick={() => serviceHandler()}
                >
                  add
                </Button>
              </div>
              <div className="newPegiste__button">
                <Link to="/">
                  <button className="new__btn3">
                    <FaFastBackward />
                  </button>
                </Link>
                <Link to="/register">
                  <button className="new__btn">Sign In</button>
                </Link>
                <Link to="/login">
                  <button className="new__btn2">Sign Up</button>
                </Link>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </div>
    </div>
  );
}
export default Login;
