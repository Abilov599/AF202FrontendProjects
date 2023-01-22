import React from "react";
import "./index.scss";
import ServicesArea from "../../components/services-area/index";
import CoursesCarousel from "../../components/carousel-of-cards";

const HomePage = () => {
  return (
    <main>
      <ServicesArea />
      <section id="featued-courses" className="conrainer">
        <div className="section-name">
          <h2>Our featured courses</h2>
        </div>
        <CoursesCarousel />
      </section>
      <section id="about">
        <div className="left-area">
          <div className="content">
            <div id="about-icon">
              <img
                src="https://preview.colorlib.com/theme/courses/assets/img/icon/about.svg"
                alt=""
              />
            </div>
            <h2>Learn new skills online with top educators</h2>
            <p>
              The automated process all your website tasks. Discover tools and
              techniques to engage effectively with vulnerable children and
              young people.
            </p>
          </div>
          <div className="features">
            <div className="single-feature">
              <div className="feature-icon">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                  alt=""
                />
              </div>
              <div className="feature-caption">
                <p>
                  Techniques to engage effectively with vulnerable children and
                  young people.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="feature-icon">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                  alt=""
                />
              </div>
              <div className="feature-caption">
                <p>
                  Join millions of people from around the world learning
                  together.
                </p>
              </div>
            </div>
            <div className="single-feature">
              <div className="feature-icon">
                <img
                  src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
                  alt=""
                />
              </div>
              <div className="feature-caption">
                <p>
                  Join millions of people from around the world learning
                  together. Online learning is as easy and natural.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-area">
          <div id="play-btn">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=up68UAfH0d0"
            >
              <i className="fas fa-play fa-2x"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="explore-top-subjects"></section>
    </main>
  );
};

export default HomePage;
