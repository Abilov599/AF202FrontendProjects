import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./index.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        background: "#d0d0d0",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        background: "#d0d0d0",
      }}
      onClick={onClick}
    />
  );
}

export default class CoursesCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <div style={{ padding: "15px" }}>
              <Link to="/details/id">
                <div className="features-card">
                  <div className="features-card-img">
                    <img
                      src="https://preview.colorlib.com/theme/courses/assets/img/gallery/featured1.png"
                      alt=""
                    />
                  </div>
                  <div className="features-card-caption">
                    <p className="ux">User Experience</p>
                    <h3>Fundamental of UX for Application design</h3>
                    <p className="txt">
                      The automated process all your website tasks. Discover
                      tools and techniques to engage effectively with vulnerable
                      children and young people.
                    </p>
                    <div class="card-footer">
                      <div>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p>
                          <span>(4.5)</span> based on 120
                        </p>
                      </div>
                      <div className="price">
                        <span>$135</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div style={{ padding: "15px" }}>
              <Link to="/details/id">
                <div className="features-card">
                  <div className="features-card-img">
                    <img
                      src="https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png"
                      alt=""
                    />
                  </div>
                  <div className="features-card-caption">
                    <p className="ux">User Experience</p>
                    <h3>Fundamental of UX for Application design</h3>
                    <p className="txt">
                      The automated process all your website tasks. Discover
                      tools and techniques to engage effectively with vulnerable
                      children and young people.
                    </p>
                    <div class="card-footer">
                      <div>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p>
                          <span>(4.5)</span> based on 120
                        </p>
                      </div>
                      <div className="price">
                        <span>$135</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div style={{ padding: "15px" }}>
              <Link to="/details/id">
                <div className="features-card">
                  <div className="features-card-img">
                    <img
                      src="https://preview.colorlib.com/theme/courses/assets/img/gallery/featured3.png"
                      alt=""
                    />
                  </div>
                  <div className="features-card-caption">
                    <p className="ux">User Experience</p>
                    <h3>Fundamental of UX for Application design</h3>
                    <p className="txt">
                      The automated process all your website tasks. Discover
                      tools and techniques to engage effectively with vulnerable
                      children and young people.
                    </p>
                    <div class="card-footer">
                      <div>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p>
                          <span>(4.5)</span> based on 120
                        </p>
                      </div>
                      <div className="price">
                        <span>$135</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div style={{ padding: "15px" }}>
              <Link to="/details/id">
                <div className="features-card">
                  <div className="features-card-img">
                    <img
                      src="https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png"
                      alt=""
                    />
                  </div>
                  <div className="features-card-caption">
                    <p className="ux">User Experience</p>
                    <h3>Fundamental of UX for Application design</h3>
                    <p className="txt">
                      The automated process all your website tasks. Discover
                      tools and techniques to engage effectively with vulnerable
                      children and young people.
                    </p>
                    <div class="card-footer">
                      <div>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p>
                          <span>(4.5)</span> based on 120
                        </p>
                      </div>
                      <div className="price">
                        <span>$135</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
