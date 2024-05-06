import React from "react";
import "./StepImage.scss";
import image from "../../assets/img/image 3 (4).png";
import group from "../../assets/img/Group 3.png";

function StepImage() {
  return (
    <div className="stepiamge">
      <div className="stepimage__content">
        <img className="stepimage__logo" src={image} alt="" />
        <div className="stepimage__block">
          <h6>Make a Shedule</h6>
          <h2>Make a schedule in advance with the available doctor</h2>
          <p>
            Healthcare is a very painful process, especially if you’re not
            taking care of your health and having regular check-ups.
            HealhtyCarely makes it easier for everyone to schedule a doctor’s
            appointment.
          </p>
          <div className="stepimage__btn">
            <img src={group} alt="" />
            <span>Make a schedule online is easy</span>
          </div>
          <div className="stepimage__btn">
            <img src={group} alt="" />
            <span>Easy to connect with doctor</span>
          </div>
          <button>Make Schedule Now!</button>
        </div>
      </div>
    </div>
  );
}

export default StepImage;
