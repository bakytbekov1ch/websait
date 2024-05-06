import React from "react";
import "./Footer.scss";
import logo from "../../assets/img/HealhtyCarely.png";
import fesbook from "../../assets/img/brand _ facebook.png"
import inistagram from "../../assets/img/brand _ instagram.png"
import tiviter from "../../assets/img/brand _ twitter.png"


function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__blcok">
          <img src={logo} alt="" />
          <p>
            This free App provides a solution to your health needs by offering
            you a one-stop access to complete information about various medical
            checkups. This App carries simple tips and advice to help you
            maintain a healthy lifestyle.
          </p>
        </div>
        <div className="footer__block">
          <h3>Overview</h3>
          <div className="footer__blcok-boc">
            <span>Checking Health</span>
            <span>Find Docter</span>
            <span>Make a Schedule</span>
          </div>
        </div>
        <div className="footer__block">
          <h3>Company</h3>
          <div className="footer__blcok-boc">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
          </div>
        </div>
        <div className="footer__block">
          <h3>Explore</h3>
          <div className="footer__blcok-boc">
            <span>Terms & Conds</span>
            <span>Privacy Police</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="footer__block">
          <h3>Social Media</h3>
          <div className="footer__blcok-image">
            <img src={fesbook} alt="" />
            <img src={inistagram} alt="" />
            <img src={tiviter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
