import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./style.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaFastBackward } from "react-icons/fa";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [user, setUser] = useState({ email: "", password: "" });
  async function serviceHandler() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
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
    <div className="Register">
      <div className="newRegister">
        <Card.Body>
          <h1 className="new__title">Sign In</h1>
          <ToastContainer />
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="newRegister__title">
                Email address
              </Form.Label>
              <div className="newRegister__block">
                <Form.Control
                  value={user.email}
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  onChange={onchangeHandler}
                />
                <Form.Control
                  value={user.password}
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={onchangeHandler}
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
                  <button className="new__btn2">Sign up</button>
                </Link>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </div>
    </div>
  );
}

export default Register;
