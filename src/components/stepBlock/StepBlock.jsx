import React from "react";
import "./StepBlock.scss";
import bulk from "../../assets/img/Iconly_Bulk_Search.png";
import profile from "../../assets/img/Profile.png";
import calendar from "../../assets/img/Iconly_Bulk_Calendar.png";
import star from "../../assets/img/Star.png";

function StepBlock() {
  return (
    <div className="stepblock">
      <div className="stepblock__title">
        <h6>Fast Solutions</h6>
        <h1>step by step to get your solutions</h1>
      </div>
      <div className="stepblock__block">
        <div className="step__btn">
          <hr />
          <div className="step__btn-btn">
            <img src={bulk} alt="" />
            <div>
              <h4>Check health complaints</h4>
              <p>
                Check the disease so you can easily choose the right specialist
              </p>
            </div>
          </div>
        </div>
        <div className="step__btn">
          <hr />
          <div className="step__btn-btn">
            <img src={profile} alt="" />
            <div>
              <h4>Check health complaints</h4>
              <p>
                Check the disease so you can easily choose the right specialist
              </p>
            </div>
          </div>
        </div>
        <div className="step__btn">
          <hr />
          <div className="step__btn-btn">
            <img src={calendar} alt="" />
            <div>
              <h4>Check health complaints</h4>
              <p>
                Check the disease so you can easily choose the right specialist
              </p>
            </div>
          </div>
        </div>
        <div className="step__btn">
          <hr />
          <div className="step__btn-btn">
            <img src={star} alt="" />
            <div>
              <h4>Check health complaints</h4>
              <p>
                Check the disease so you can easily choose the right specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepBlock;
