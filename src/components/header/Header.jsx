import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/img/HealhtyCarely.png";

function Header() {
  const navigate = useNavigate();
  function goToPages(link) {
    navigate(link);
  }
  return (
    <header className="header">
      <div className="menu">
        <img src={logo} alt="" />
        <ul>
          <li onClick={() => goToPages("/")}>Home</li>
          <li onClick={() => goToPages("/about")}>Doctor</li>
          <li>Services</li>
          <li>Review</li>
        </ul>
      </div>
      <div className="auth">
        <button className="signin">
          Sign In
        </button>
        <button onClick={() => goToPages("/login")} className="signup">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
