import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./style.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaFastBackward } from "react-icons/fa";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      toast.success("accound create success");

      console.log(res);
    } catch (error) {
      toast.error(error.message)
      console.log(error);
    }
  }

  return (
    <div className="Register">
      <div className="newRegister">
        <Card.Body>
          <h1 className="new__title">Sign In</h1>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="newRegister__title">
                Email address
              </Form.Label>
              <div className="newRegister__block">
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="name@example.com"
                />
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="password"
                />
                <Button
                  style={{ width: 90, fontSize: 18 }}
                  variant="outline-success"
                  onClick={() => signUp()}
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

export default Register;
