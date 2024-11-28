import React from "react";

import CountUp from "react-countup";

import MainImg from "assets/main-image.jpg";

import Img1 from "assets/11.jpg";
import Img2 from "assets/12.jpg";
import Img3 from "assets/13.jpg";

import Icon1 from "assets/icon-01.svg";
import Icon2 from "assets/icon-02.svg";
import Icon3 from "assets/icon-03.svg";

import { ReactComponent as ArrowIcon } from "assets/arrow.svg";
import { ReactComponent as LocationIcon } from "assets/location.svg";

import "./Home.scss";

const contentData = [
  {
    number: "01",
    title: "Deep tech",
    description: `With Track Farm, Disease prediction, Object management, and Productivity management can be efficiently performed`,
    imgSrc: Img1,
  },
  {
    number: "02",
    title: "Innovative Solutions",
    description: `Track Farm offers innovative tools\nthat drive efficiency\nand improve yield.`,
    imgSrc: Img2,
  },
  {
    number: "03",
    title: "Sustainability",
    description: `Our platform helps farms\nmaintain sustainable practices\nand ensure long-term productivity.`,
    imgSrc: Img3,
  },
];
const iconData = [
  { src: Icon1, alt: "icon1", text: "Disease\nprediction" },
  { src: Icon2, alt: "icon2", text: "Object\nmanagement" },
  { src: Icon3, alt: "icon3", text: "Productivity\nmanagement" },
];
const Home = ({ isMobile }) => {
  console.log(isMobile);
  return (
    <div className="main home">
      <div className={isMobile ? "img-responsive-mobile" : "img-responsive"}>
        <div className="img-container">
          <img alt="MainImg" src={MainImg} />
        </div>
        <div className="background-overlay">
          <div className={isMobile ? "home-content-mobile" : "home-content"}>
            <div
              className={
                isMobile ? "home-content-left-mobile" : "home-content-left"
              }
            >
              <div>
                <div className={isMobile ? "font-text-sm" : `font-display-xs`}>
                  Smart Livestock Farming
                </div>
                <div
                  className={isMobile ? "font-display-sm" : "font-display-lg"}
                >
                  TRACKFARM
                </div>
              </div>
              {!isMobile && (
                <button className={`arrow-button font-text-md `}>
                  VIEW MORE
                  <ArrowIcon className="arrow-icon" />
                </button>
              )}
            </div>
            <div
              className={
                isMobile ? `home-content-right-mobile` : `home-content-right`
              }
            >
              <div>
                <div className={isMobile ? "font-text-xs" : "font-display-xs"}>
                  Individual Pig Model Data
                </div>
                <div
                  className={isMobile ? "font-display-sm" : "font-display-lg"}
                >
                  <CountUp end={8000} duration={2} />
                  <span>+</span>
                </div>
              </div>
              <div>
                <div className={isMobile ? "font-text-xs" : "font-display-xs"}>
                  <div>small and medium-sized</div>
                  <div>farm partnership</div>
                </div>
                <div
                  className={isMobile ? "font-display-sm" : "font-display-lg"}
                >
                  <CountUp end={10} duration={1} />
                  <span>+</span>
                </div>
              </div>
            </div>

            {isMobile && (
              <button
                className={`arrow-button arrow-button-mobile font-text-md`}
              >
                VIEW MORE
                <ArrowIcon className="arrow-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`content-container ${
          isMobile ? "content-container-mobile" : ""
        }`}
      >
        <div className="content-text">
          <div
            className={
              isMobile
                ? "content-text-title-mobile font-display-sm"
                : "content-text-title font-display-lg"
            }
          >
            <div>Deep Learning</div>
            <div>Pig Farm Healthcare</div>
          </div>
          <div
            className={
              isMobile
                ? "content-text-description-mobile font-text-xs"
                : "content-text-description font-text-lg"
            }
          >
            <div>{`With Track Farm, Disease prediction, Object management,\nand Productivity management can be efficiently performed`}</div>
          </div>
          <div
            className={
              isMobile
                ? "content-text-location-mobile font-text-xs"
                : "content-text-location font-text-lg"
            }
          >
            <div className="icon">
              <LocationIcon />
            </div>
            <div>Seoul, Yongsan Lab. Institute</div>
          </div>
        </div>
        <div
          className={
            isMobile
              ? "content-img-wrapper-mobile font-text-md"
              : "content-img-wrapper font-display-sm"
          }
        >
          {iconData.map((icon, index) => (
            <div
              className={
                isMobile ? "content-img-item-mobile" : "content-img-item"
              }
              key={index}
            >
              <img src={icon.src} alt={icon.alt} />
              <div>{icon.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="content-below-container">
        <div
          className={`content-below-overlay ${
            isMobile ? "content-below-overlay-mobile" : ""
          }`}
        >
          <div
            className={
              isMobile
                ? "content-below-title-mobile font-display-sm"
                : "content-below-title font-display-lg"
            }
          >{`Why choose\nTRACK FARM?`}</div>
          {contentData.map((item, index) => (
            <div
              className={isMobile ? "content-below-mobile" : "content-below"}
              key={index}
            >
              <div
                className={
                  isMobile
                    ? "content-below-img-container-mobile"
                    : "content-below-img-container"
                }
              >
                <img src={item.imgSrc} alt={`img${index + 1}`} />
              </div>
              <div
                className={
                  isMobile ? "content-below-text-mobile" : "content-below-text"
                }
              >
                <div
                  className={
                    isMobile
                      ? "content-below-text-number-mobile"
                      : "content-below-text-number"
                  }
                >
                  {item.number}
                </div>
                <div
                  className={
                    isMobile
                      ? "content-below-text-title-mobile font-display-xs"
                      : "content-below-text-title font-display-md"
                  }
                >
                  {item.title}
                </div>
                <div
                  className={
                    isMobile
                      ? "content-below-text-description font-text-xs"
                      : "content-below-text-description font-text-lg"
                  }
                >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
