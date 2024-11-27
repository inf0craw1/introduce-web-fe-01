import React from "react";

import { ArrowRightAlt as ArrowIcon } from "@material-ui/icons";

import Img1 from "assets/5.png";
import Img2 from "assets/6.png";
import Img3 from "assets/7.png";
import Img4 from "assets/8.png";
import Img5 from "assets/9.jpg";
import Img6 from "assets/10.jpg";
import Img7 from "assets/14.jpg";
import Img8 from "assets/15.jpg";

import { Link } from "components";

import "./Project.scss";

const Project = () => {
  return (
    <div className="main project">
      <div className="video-responsive">
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/Ehx6_nnnw0k?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&start=65&end=660&playlist=Ehx6_nnnw0k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className="background-overlay">
          <div className="background-overlay-content">
            AI SMART FARM SYSTEM
            <br />
            <Link to="/company">
              CONTACT US
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="content-divider-container">
        <div className="content-divider">
          <div className="content-divider-title">OUR PROJECT</div>
          <div className="content-divider-content">
            <div>
              <img alt="img1" src={Img1} />
              <p>PROJECT 01</p>
            </div>
            <div>
              <img alt="img2" src={Img2} />
              <p>PROJECT 02_1</p>
            </div>
            <div>
              <img alt="img3" src={Img3} />
              <p>PROJECT 02_2</p>
            </div>
          </div>
          <div className="content-divider-content">
            <div>
              <img alt="img4" src={Img4} />
              <p>PROJECT 01</p>
            </div>
            <div>
              <img alt="img5" src={Img5} />
              <p>PROJECT 02_1</p>
            </div>
            <div>
              <img alt="img6" src={Img6} />
              <p>PROJECT 02_2</p>
            </div>
          </div>
          <div
            className="content-divider-content"
            style={{ justifyContent: "flex-start" }}
          >
            <div style={{ flex: 0 }}>
              <img alt="img7" src={Img7} style={{ height: 200, width: 300 }} />
              <p>PROJECT 03</p>
            </div>
            <div style={{ flex: 0 }}>
              <img alt="img8" src={Img8} style={{ height: 200, width: 210 }} />
              <p>PROJECT 03_1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
