import React from "react";
import "./Steptext.scss";
import grup from "../../assets/img/Group 3.png";
import ellipe from "../../assets/img/Ellipse 5.png"
import mask from "../../assets/img/Mask group.png";
import doktor from  "../../assets/img/female-doctor_fococlipping_removed 1.png"

function StepText() {
  return (
    <div className="steptext">
      <div className="steptext__content">
        <div className="steptext__blokc">
          <h6>Find Doctor</h6>
          <h2>Find the right doctor according to your complaint</h2>
          <p>
            HealthCare.ly is a free, health app that goes beyond matching you
            with doctors. It actively helps you find the right doctor based on
            your medical and personal needs and connects you with your
            HealthCarely community for ongoing support throughout your journey
            to healthier living.
          </p>
          <div className="stepText__btn">
            <img src={grup} alt="" />
            <span>
              100% free app designed to help you find the right doctor for you.
            </span>
          </div>
          <div className="stepText__btn">
            <img src={grup} alt="" />
            <span>Available 900 doctors specialist</span>
          </div>
          <button>See the Doctors</button>
        </div>
        <div className="steptext__block2">
          <div className="steptext__btn2">
            <span className="steptext__btn2-title">Available Doctors</span>
            <span className="steptext__btn2-text">Select Doctors</span>
          </div>
          <div className="steptext__boc">
            <img src={ellipe} alt="" />
            <div className="steptext__btn2">
              <span className="steptext__btn2-title">Dr. Adinda</span>
              <span className="steptext__btn2-text">Eye Specialist</span>
            </div>
          </div>
          <div className="steptext__boc">
            <img src={mask} alt="" />
            <div className="steptext__btn2">
              <span className="steptext__btn2-title">Dr. Jackson</span>
              <span className="steptext__btn2-text">Ear Specialist</span>
            </div>
          </div>
          <button>Find Doctor</button>
        </div>
        <img className="steptext__logo" src={doktor} alt="" />
      </div>
    </div>
  );
}

export default StepText;
