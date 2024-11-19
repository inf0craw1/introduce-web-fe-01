import React, { useRef, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Company.scss";
import ArrowCircleIcon from "assets/arrow-circle.svg";
import CompanyBackground from "assets/company_background.png";

const historyData = [
  {
    year: "2022",
    content: [
      {
        month: "01",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
      {
        month: "02",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
      {
        month: "03",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
    ],
  },
  {
    year: "2023",
    content: [
      {
        month: "01",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
      {
        month: "02",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
      {
        month: "03",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
    ],
  },
  {
    year: "2024",
    content: [
      {
        month: "01",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
      {
        month: "02",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
      {
        month: "03",
        text: "Track Farm monitors the movements of all pigs with AI cameras in the farm",
      },
    ],
  },
];

const SliderPrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <img
      className="slider-arrow-icon prev"
      src={ArrowCircleIcon}
      alt="Previous button"
    />
  </div>
);
const SliderNextArrow = ({ className, style, onClick }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <img
      className="slider-arrow-icon next"
      src={ArrowCircleIcon}
      alt="Next button"
    />
  </div>
);
const Company = () => {
  const slickRef = useRef(null);

  const handlePreviousClick = useCallback(
    () => slickRef.current.slickPrev(),
    []
  );
  const handleNextClick = useCallback(() => slickRef.current.slickNext(), []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="main company">
      <div className="elementor-container">
        <div className="img-container">
          <img alt="CompanyBackground" src={CompanyBackground} />
        </div>
        <div className="elementor-title-wrapper">
          <p className="font-display-xs">TRACKFARM LAB</p>
          <h2 className="font-display-lg">
            Join the Innovative & sustainable
            <br />
            Farming solution
          </h2>
        </div>
      </div>
      <div className="company-history-container">
        <div className="layout">
          <div className="slider-wrapper">
            <SliderPrevArrow onClick={handlePreviousClick} />
            <Slider
              className="slider-container"
              {...sliderSettings}
              ref={slickRef}
            >
              {historyData.map((data) => (
                <div className="slider-item">
                  <div className="content-wrapper">
                    <div className="year-container">
                      <div className="text-wrapper">
                        <h4 className="font-display-sm">HISTORY</h4>
                        <h3 className="font-display-lg">{data.year}</h3>
                      </div>
                    </div>

                    <div className="history-container">
                      <div className="history-month-line" />
                      <div className="history-item-wrapper">
                        {data.content.map((cur) => (
                          <div className="history-item">
                            <div className="history-month">
                              <p className="font-text-md">{cur.month}</p>
                            </div>
                            <div className="history-text">{cur.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <SliderNextArrow onClick={handleNextClick} />
          </div>
        </div>
      </div>
      {/* <div className="discription-container">
        <div className="discription-wrapper">
          <div className="discription-left">
            <h3 className="discription-heading">
              Innovation for future Livestock
            </h3>
            <h2 className="discription-heading-2">
              Innovative & sustainable
              <br />
              Farming solution Provider
            </h2>
            <img className="logo" src={Logo} alt="logo" />
            <br />
            <Link className="about-btn" to="/notice">
              About Us
            </Link>
          </div>
          <div className="discription-right">
            <p className="bold">Serious employment reality of pig farms</p>
            <p>
              Livestock industry of pig farms is shrinking. The decline and
              aging of the farm labor population, and the 3D industry have led
              to severe reluctance among young farmers and foreign workers, but
              they are experiencing many problems such as various malignant
              diseases
            </p>
            <p className="bold">
              High mortality and low productivity of domestic pig farms
            </p>
            <p>
              The mortality rate of pigs in Korean pig farms is close to 20%.
              Compared to farms in major overseas countries, the situation is
              two to four times more serious. Compared to overseas pig farms,
              Korean pig farms have lower recovery costs, so the quality of pig
              house management and facilities is relatively low. The
              productivity of Korea is 60% of that of overseas, and the input
              cost of feed is 1.5 times.
            </p>
            <p className="bold">Practical management issues in pig farms</p>
            <p>
              Due to the shortage of farm workers, there are difficulties in
              managing sows due to insufficient management of sows, lack of a
              respiratory disease (PRRS) management health status monitoring
              system, and early weaning piglets management. For example, during
              an outbreak of African swine fever in one region, more than
              430,000 pigs on 261 farms are culled per day.
            </p>
          </div> 
        </div>
      </div> */}
      <div className="solutions-container">
        <div className="layout">
          <p className="solutions-subtitle font-display-xs">
            Innovation for future Livestock
          </p>
          <h3 className="solutions-title font-display-lg">
            We solve many problems of pig farms
          </h3>

          <div className="solution-item-wrapper">
            <div className="solution-item">
              <div className="text-wrapper">
                <h4 className="font-display-sm">
                  Serious employment reality of pig farms
                </h4>
                <p className="font-text-md">
                  Livestock industry of pig farms is shrinking. The decline and
                  aging of the farm abor population, and the 3D industry have
                  led to severe reluctance among young farmers and foreign
                  workers, but they are experiencing many problems such as
                  various malignant diseases
                </p>
              </div>
            </div>
            <div className="solution-item">
              <div className="text-wrapper">
                <h4 className="font-display-sm">
                  High mortality and low productivity of domestic pig farms
                </h4>
                <p className="font-text-md">
                  The mortality rate of pigs in Korean pig farms is close to
                  20%. Compared to farms in major overseas countries, the
                  situation is two to four times more serious. Compared to
                  overseas pig farms, Korean pig farms have lower recovery
                  costs, so the quality of pig house management and facilities
                  is relatively low. The productivity of Korea is 60% of that of
                  overseas, and the input cost of feed is 1.5 times.
                </p>
              </div>
            </div>
            <div className="solution-item">
              <div className="text-wrapper">
                <h4 className="font-display-sm">
                  Practical management issues in pig farms
                </h4>
                <p className="font-text-md">
                  Due to the shortage of farm workers, there are difficulties in
                  managing sows due to insufficient management of sows, lack of
                  a respiratory disease (PRRS) management health status
                  monitoring system, and early weaning piglets management. For
                  example, during an outbreak of African swine fever in one
                  region, more than 430,000 pigs on 261 farms are culled per
                  day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="solutions-container-2">
        <div className="solutions-below-overlay">
          <div className="layout">
            <h3 className="title font-display-lg">Our Solutions</h3>

            <div className="solutions-item-wrapper">
              <div className="solutions-item">
                <div className="image-overlay">
                  <div className="content">
                    <h3 className="font-display-sm">Deep Learning Solution</h3>
                    <p classNmae="font-text-md">
                      Track Farm monitors the movements of all pigs (one per
                      132㎡) with AI cameras in the farm.
                    </p>
                  </div>
                </div>
              </div>
              <div className="solutions-item">
                <div className="image-overlay">
                  <div className="content">
                    <h3 className="font-display-sm">
                      Improving the productivity of farms
                    </h3>
                    <p classNmae="font-text-md">
                      Track Farm provides farmers with a daily report for each
                      pig each day so that they can respond accurately and
                      quickly
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
