import React from "react";
import "./index.scss";

const ServicesArea = () => {
  return (
    <div id="services-area" className="container">
      <div className="card">
        <div className="card-img">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg"
            alt=""
          />
        </div>
        <div className="card-text">
          <h3>60+ UX courses</h3>
          <p>The automated process all your website tasks.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg"
            alt=""
          />
        </div>
        <div className="card-text">
          <h3>Expert instructors</h3>
          <p>The automated process all your website tasks.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg"
            alt=""
          />
        </div>
        <div className="card-text">
          <h3>Lifetime access</h3>
          <p>The automated process all your website tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
