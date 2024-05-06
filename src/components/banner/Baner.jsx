import React from "react";
import "./Baner.scss";
import baner from "../../assets/img/baner.png"

function Baner() {
  return (
    <div className="baner">
      <div className="baner-content">
        <h2>Medical Care Now Simplified For Everyone</h2>
        <p>
          Health carely is a new way to get health insurance quotes. We offer
          tools similar to those provided by insurance companies for free and
          prices are based on donations and not restrictive health plan
          networks.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="baner-img">
        <img src={baner} alt="" />
      </div>
    </div>
  );
}

export default Baner;
