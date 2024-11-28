import React, { useState } from "react";

import MainImg from "assets/product-main-image.png";

import Img1 from "assets/product/01.png";
import Img2 from "assets/product/02.png";
import Img3 from "assets/product/03.png";
import Img4 from "assets/product/04.png";
import Img5 from "assets/product/05.png";
import Img6 from "assets/product/06.png";
import Img7 from "assets/product/07.jpg";
import Img8 from "assets/product/08.jpg";

import { ReactComponent as ArrowIcon } from "assets/arrow.svg";
import { Link } from "components";

import "./Product.scss";

const imageData = [
  { project_name: "DayFarm SW", images: [Img1, Img2, Img3, Img4] },
  { project_name: "DayFarm IoT", images: [Img5, Img6, Img7, Img8] },
  { project_name: "DayFarm ColdChain", images: null },
];

const Product = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="main product">
      <div className={isMobile ? "img-responsive-mobile" : "img-responsive"}>
        <div className="img-container">
          <img alt="MainImg" src={MainImg} />
        </div>
        <div
          className={
            isMobile ? "background-overlay-mobile" : "background-overlay"
          }
        >
          <div
            className={
              isMobile
                ? "background-overlay-content-mobile"
                : "background-overlay-content"
            }
          >
            <div
              className={
                isMobile
                  ? "background-overlay-content-top-mobile"
                  : "background-overlay-content-top"
              }
            >
              <div>
                <div
                  className={
                    isMobile
                      ? "product-title-mobile font-text-xs"
                      : "product-title font-display-xs"
                  }
                >
                  Smart Livestock Farming
                </div>
                <div
                  className={
                    isMobile
                      ? "product-description-mobile font-display-sm"
                      : "product-description font-display-lg"
                  }
                >
                  AI SMART FARM SYSTEM
                </div>
              </div>
              <div
                className={
                  isMobile
                    ? "arrow-button-mobile font-text-xs"
                    : "arrow-button font-text-md"
                }
              >
                CONTACT US
                <ArrowIcon className="arrow-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isMobile ? "tabs-container-mobile" : "tabs-container"}>
        <div
          className={
            isMobile ? "tabs-mobile font-text-sm" : "tabs font-text-md"
          }
        >
          {imageData.map((_, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {_.project_name}
            </button>
          ))}
        </div>
        {imageData[activeTab].images != null ? (
          <div
            className={
              isMobile ? "tabs-images-grid-mobile" : "tabs-images-grid"
            }
          >
            {imageData[activeTab].images.map((img, index) => (
              <div className="image-container" key={index}>
                <img
                  src={img}
                  alt={index}
                  className={isMobile ? "tab-image-mobile" : "tab-image"}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="preparing-message font-display-sm">Preparing</div>
        )}
      </div>
    </div>
  );
};

export default Product;
