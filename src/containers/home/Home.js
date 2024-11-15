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
const Home = () => {
  return (
    <div className="main home">
      <div className="img-responsive">
        <div className="img-container">
          <img alt="MainImg" src={MainImg} />
        </div>
        <div className="background-overlay">
          <div className="background-overlay-content">
            <div className="background-overlay-content-left">
              <div>
                <div className="font-display-xs">Smart Livestock Farming</div>
                <div className="font-display-lg">TRACKFARM</div>
              </div>

              <button className="arrow-button font-text-md">
                VIEW MORE
                <ArrowIcon className="arrow-icon" />
              </button>
            </div>
            <div className="background-overlay-content-right">
              <div>
                <div className="font-display-xs">Individual Pig Model Data</div>
                <div className="font-display-lg">
                  <CountUp end={8000} duration={2} />
                  <span>+</span>
                </div>
              </div>
              <div>
                <div className="font-display-xs">
                  <div>small and medium-sized</div>
                  <div>farm partnership</div>
                </div>
                <div className="font-display-lg">
                  <CountUp end={10} duration={1} />
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="content-text">
          <div className="content-text-title font-display-lg">
            <div>Deep Learning</div>
            <div>Pig Farm</div>
          </div>
          <div className="content-text-description font-text-lg">
            <div>With Track Farm, Disease prediction, Object management,</div>
            <div>and Productivity management can be efficiently performed</div>
          </div>
          <div className="content-text-location font-text-lg">
            <LocationIcon />
            <div>Seoul, Yongsan Lab. Institute</div>
          </div>
        </div>
        <div className="content-img-wrapper font-display-sm">
          {iconData.map((icon, index) => (
            <div className="content-img-item" key={index}>
              <img src={icon.src} alt={icon.alt} />
              <div>{icon.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="content-below-container">
        <div className="content-below-overlay">
          <div className="content-below-title font-display-lg">{`Why choose\nTRACK FARM?`}</div>
          {contentData.map((item, index) => (
            <div className="content-below" key={index}>
              <div className="content-below-img-container">
                <img src={item.imgSrc} alt={`img${index + 1}`} />
              </div>
              <div className="content-below-text">
                <div className="content-below-text-number">{item.number}</div>
                <div className="content-below-text-title font-display-md">
                  {item.title}
                </div>
                <div className="content-below-text-description font-text-lg">
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
