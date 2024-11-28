import React, { useRef, useCallback, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OutlineButton from "components/outlineButton";
import "./Company.scss";
import ArrowCircleIcon from "assets/arrow-circle.svg";
import CompanyBackground from "assets/company_background.png";

import partnerImg1 from "assets/partners/01.png";
import partnerImg2 from "assets/partners/02.jpg";
import partnerImg3 from "assets/partners/03.png";
import partnerImg4 from "assets/partners/04.png";
import partnerImg5 from "assets/partners/05.png";
import partnerImg6 from "assets/partners/06.png";
import partnerImg7 from "assets/partners/07.png";
import partnerImg8 from "assets/partners/08.png";
import partnerImg9 from "assets/partners/09.png";
import partnerImg10 from "assets/partners/10.png";
import partnerImg11 from "assets/partners/11.png";
import partnerImg12 from "assets/partners/12.png";
import partnerImg13 from "assets/partners/13.png";
import partnerImg14 from "assets/partners/14.png";
import partnerImg15 from "assets/partners/15.png";
import partnerImg16 from "assets/partners/16.png";

const historyData = [
  {
    year: "2024",
    content: [
      {
        month: "01",
        text: "CES 2024",
      },
      {
        month: "02",
        text: "Pangyo Research Institute Lab Establishment",
      },
      {
        month: "03",
        text: "Collabo R&D (SMES)",
      },
      {
        month: "04",
        text: "Agriculture Startup Package (KOAT)",
      },
      {
        month: "05",
        text: "Data Voucher",
      },
      {
        month: "06",
        text: "KSC Program (Vietnam)",
      },
      {
        month: "07",
        text: "Shinhan Square Bridge (Vietnam)",
      },
      {
        month: "08",
        text: "Global Didimdol R&D (SMES)",
      },
      {
        month: "09",
        text: "Vietnam Solution Launching",
      },
    ],
  },
  {
    year: "2023",
    content: [
      {
        month: "03",
        text: "Didimdol R&D (SMES)",
      },
      {
        month: "04",
        text: "Untact Startup Package (KOAT)",
      },
      {
        month: "09",
        text: "Seed Investment (HYUH)",
      },
      {
        month: "10",
        text: "TIPS R&D",
      },
      {
        month: "11",
        text: "KOICA CTS SEED 0",
      },
      {
        month: "11",
        text: "Certificate of Venture Enterprise",
      },
      {
        month: "12",
        text: "Gangwon Farm Complete",
      },
    ],
  },
  {
    year: "2022",
    content: [
      {
        month: "04",
        text: "Global Startup Academy",
      },
      {
        month: "05",
        text: "Agriculture Startup Package (KOAT)",
      },
      {
        month: "06",
        text: "Yeonsu-gu Young Tech Stratup Program (INU)",
      },
      {
        month: "07",
        text: "Seoul Campus Town",
      },
      {
        month: "11",
        text: "ISO 9001, ISO 14001",
      },
    ],
  },
  {
    year: "2021",
    content: [
      {
        month: "04",
        text: "Preliminary start-up package",
      },
      {
        month: "07",
        text: "1st K-startup Edu Program",
      },
      {
        month: "12",
        text: "Establishment of a corporation",
      },
      {
        month: "12",
        text: "Acquisition of Patent Solution",
      },
      {
        month: "12",
        text: "Incorporation of subsidiaries (HYUH)",
      },
    ],
  },
];

const partners = [
  { img: partnerImg1 },
  { img: partnerImg2 },
  { img: partnerImg3 },
  { img: partnerImg4 },
  { img: partnerImg5 },
  { img: partnerImg6 },
  { img: partnerImg7 },
  { img: partnerImg8 },
  { img: partnerImg9 },
  { img: partnerImg10 },
  { img: partnerImg11 },
  { img: partnerImg12 },
  { img: partnerImg13 },
  { img: partnerImg14 },
  { img: partnerImg15 },
  { img: partnerImg16 },
  { img: partnerImg1 },
  { img: partnerImg2 },
  { img: partnerImg3 },
  { img: partnerImg4 },
  { img: partnerImg5 },
  { img: partnerImg6 },
  { img: partnerImg7 },
  { img: partnerImg8 },
  { img: partnerImg9 },
  { img: partnerImg10 },
  { img: partnerImg11 },
  { img: partnerImg12 },
  { img: partnerImg13 },
  { img: partnerImg14 },
  { img: partnerImg15 },
  { img: partnerImg16 },
];
const SliderPrevArrow = ({ className, style, onClick, isMobile }) => (
  <div
    className={`${className}`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <img
      className={`slider-arrow-icon prev ${
        isMobile ? "slider-arrow-icon-mobile" : ""
      }`}
      src={ArrowCircleIcon}
      alt="Previous button"
    />
  </div>
);
const SliderNextArrow = ({ className, style, onClick, isMobile }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <img
      className={`slider-arrow-icon next ${
        isMobile ? "slider-arrow-icon-mobile" : ""
      }`}
      src={ArrowCircleIcon}
      alt="Next button"
    />
  </div>
);

const Company = ({ isMobile }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const solutionModalData = [
    {},
    {
      title: `Deep Learning Solution`,
      content: `Track Farm monitors the movements of all pigs (one per 132㎡) with AI cameras in the farm. With motion AI technology and sensors, you can manage pig health data within the integrated analysis service by collecting and analyzing all behavioral pattern data, such as the number of pig meals, defecation, moving distance, and where they stay.\n\nDetects all specific abnormal behaviors and suspicious symptoms, notifies the farmer when a problem is found, then makes a diagnosis according to the algorithm and suggests a countermeasure.`,
    },
    {
      title: `Improving the productivity of farms`,
      content: `Currently, smart farms in the livestock industry are mainly focusing on automation technology for facilities, such as time-dependent feed distribution and temperature control to match the standard temperature.\n\n- Track Farm provides farmers with a daily report for each pig each day so that they can respond accurately and quickly. This minimizes damage and creates a healthy and efficient farm management system. In addition, we provide a solution for improving the productivity of farms by making all these platforms a platform and using them for R&D and building an integrated management platform for each region.`,
    },
  ];

  const [modalNumber, setModalNumber] = useState(0);
  const slickRef = useRef(null);

  const handlePreviousClick = useCallback(
    () => slickRef.current.slickPrev(),
    []
  );
  const handleNextClick = useCallback(() => slickRef.current.slickNext(), []);

  const handleModalBackgroundClick = () => {
    setModalNumber(0);
  };
  return (
    <div className="main company">
      <div
        className={`elementor-container ${
          isMobile ? "elementor-container-mobile" : ""
        }`}
      >
        <div className="img-container">
          <img alt="CompanyBackground" src={CompanyBackground} />
        </div>
        <div className="elementor-title-wrapper">
          <p className={`${isMobile ? "font-text-xs" : "font-display-xs"}`}>
            TRACKFARM MISSION
          </p>
          <h2 className={`${isMobile ? "font-display-sm" : "font-display-lg"}`}>
            Change the farming system for
            <br />
            Sustainable Livestock & Environment
            <br />
            Farming solution
          </h2>
        </div>
      </div>
      <div className="company-history-container">
        <div className={`layout ${isMobile ? "layout-mobile" : ""}`}>
          <div
            className={`slider-wrapper ${
              isMobile ? "slider-wrapper-mobile" : ""
            }`}
          >
            <SliderPrevArrow
              onClick={handlePreviousClick}
              isMobile={isMobile}
            />
            <Slider
              className="slider-container"
              {...sliderSettings}
              ref={slickRef}
            >
              {historyData.map((data) => (
                <div className="slider-item">
                  <div
                    className={`content-wrapper ${
                      isMobile ? "content-wrapper-mobile" : ""
                    }`}
                  >
                    <div
                      className={`year-container ${
                        isMobile ? "year-container-mobile" : ""
                      }`}
                    >
                      <div className="text-wrapper">
                        <h4
                          className={`${
                            isMobile ? "font-text-md" : "font-display-sm"
                          }`}
                        >
                          HISTORY
                        </h4>
                        <h3
                          className={`${
                            isMobile ? "font-display-sm" : "font-display-lg"
                          }`}
                        >
                          {data.year}
                        </h3>
                      </div>
                    </div>

                    <div className="history-container">
                      <div
                        className={`history-month-line ${
                          isMobile ? "history-month-line-mobile" : ""
                        }`}
                      />
                      <div className="history-item-wrapper">
                        {data.content.map((cur) => (
                          <div
                            className={`history-item ${
                              isMobile ? "history-item-mobile" : ""
                            }`}
                          >
                            <div
                              className={`history-month ${
                                isMobile ? "history-month-mobile" : ""
                              }`}
                            >
                              <p
                                className={`${
                                  isMobile ? "font-text-xs" : "font-text-md"
                                }`}
                              >
                                {cur.month}
                              </p>
                            </div>
                            <div
                              className={`${
                                isMobile
                                  ? "font-text-xs history-text-mobile"
                                  : "font-text-md"
                              } history-text`}
                            >
                              {cur.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <SliderNextArrow onClick={handleNextClick} isMobile={isMobile} />
          </div>
        </div>
      </div>
      <div
        className={`solutions-container ${
          isMobile ? "solutions-container-mobile" : ""
        }`}
      >
        <div className={`layout ${isMobile ? "layout-mobile" : ""}`}>
          <p
            className={`solutions-subtitle ${
              isMobile ? "font-text-xs" : "font-display-xs"
            }`}
          >
            Innovation for Future Farming
          </p>
          <h3
            className={`solutions-title ${
              isMobile
                ? "font-display-sm solutions-title-mobile"
                : "font-display-lg"
            } text-center`}
          >
            We solve many problems in livestock farms and think about better
            agriculture industry
          </h3>

          <div
            className={`solution-item-wrapper ${
              isMobile ? "solution-item-wrapper-mobile" : ""
            }`}
          >
            <div
              className={`solution-item ${
                isMobile ? "solution-item-mobile" : ""
              }`}
            >
              <div className="text-wrapper">
                <p
                  className={`font-text-lg solution-item-number ${
                    isMobile ? "display" : ""
                  }`}
                >
                  01
                </p>
                <h4
                  className={`${
                    isMobile ? "font-display-xs mobile" : "font-display-sm"
                  }`}
                >
                  Serious employment reality of pig farms
                </h4>
                <p className={`font-text-md`}>
                  Livestock industry of pig farms is shrinking. The decline and
                  aging of the farm abor population, and the 3D industry have
                  led to severe reluctance among young farmers and foreign
                  workers, but they are experiencing many problems such as
                  various malignant diseases
                </p>
              </div>
            </div>
            <div
              className={`solution-item ${
                isMobile ? "solution-item-mobile" : ""
              }`}
            >
              <div className="text-wrapper">
                <p
                  className={`font-text-lg solution-item-number ${
                    isMobile ? "display" : ""
                  }`}
                >
                  02
                </p>
                <h4
                  className={`${
                    isMobile ? "font-display-xs mobile" : "font-display-sm"
                  }`}
                >
                  High mortality and low productivity of domestic pig farms
                </h4>
                <p className={`font-text-md`}>
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
            <div
              className={`solution-item ${
                isMobile ? "solution-item-mobile" : ""
              }`}
            >
              <div className="text-wrapper">
                <p
                  className={`font-text-lg solution-item-number ${
                    isMobile ? "display" : ""
                  }`}
                >
                  03
                </p>
                <h4
                  className={`${
                    isMobile ? "font-display-xs mobile" : "font-display-sm"
                  }`}
                >
                  Practical management issues in pig farms
                </h4>
                <p className={`font-text-md`}>
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
      <div
        className={`solutions-modal-background modal-${modalNumber}`}
        onClick={handleModalBackgroundClick}
      >
        <div className={`solutions-modal-container`}>
          <div className={`solutions-modal-title-container`}>
            <div
              className={`solutions-modal-title-wrapper ${
                isMobile
                  ? "font-display-xs solutions-modal-title-wrapper-mobile"
                  : "font-display-sm"
              }`}
            >
              {solutionModalData[modalNumber].title}
            </div>
          </div>
          <div
            className={`text-wrapper ${
              isMobile ? "font-text-xs text-wrapper-mobile" : "font-text-md"
            }`}
          >
            {solutionModalData[modalNumber].content}
          </div>
        </div>
      </div>
      <div className="solutions-container-2">
        <div
          className={`solutions-below-overlay ${
            isMobile ? "solutions-below-overlay-mobile" : ""
          }`}
        >
          <div className={`layout ${isMobile ? "layout-mobile" : ""}`}>
            <h3
              className={`title ${
                isMobile ? "font-display-sm title-mobile" : "font-display-lg"
              }`}
            >
              Our Solutions
            </h3>

            <div
              className={`solutions-item-wrapper ${
                isMobile ? "solutions-item-wrapper-mobile" : ""
              }`}
            >
              <div className="solutions-item">
                <div
                  className={`image-overlay ${
                    isMobile ? "image-overlay-mobile" : ""
                  }`}
                >
                  <div className="content">
                    <h3 className={`font-display-sm`}>
                      Deep Learning Solution
                    </h3>
                    <p classNmae="font-text-md">
                      Track Farm monitors the movements of all pigs (one per
                      132㎡) with AI cameras in the farm.
                    </p>

                    <OutlineButton
                      onClick={() => setModalNumber(1)}
                      label={"MORE DETAIL"}
                      isMobile={isMobile}
                    />
                  </div>
                </div>
              </div>
              <div className="solutions-item">
                <div
                  className={`image-overlay ${
                    isMobile ? "image-overlay-mobile" : ""
                  }`}
                >
                  <div className="content">
                    <h3 className={`font-display-sm`}>
                      Improving the productivity of farms
                    </h3>
                    <p classNmae="font-text-md">
                      Track Farm provides farmers with a daily report for each
                      pig each day so that they can respond accurately and
                      quickly
                    </p>

                    <OutlineButton
                      onClick={() => setModalNumber(2)}
                      label={"MORE DETAIL"}
                      isMobile={isMobile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-container">
        <div className={`layout ${isMobile ? "layout-mobile" : ""}`}>
          <div className="partners-scroll-container">
            <div className="partners-scroll-wrapper">
              {partners.map((cur) => (
                <div className="partners-slider-item">
                  <div className="partners-image-wrapper">
                    <img
                      className="partners-slider-image"
                      src={cur.img}
                      alt="partners logo"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <Slider {...partnersSliderSettings}>
            {partners.map((cur) => (
              <div className="partners-slider-item">
                <div className="partners-image-wrapper">
                  <img
                    className="partners-slider-image"
                    src={cur.img}
                    alt="partners logo"
                  />
                </div>
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default Company;
