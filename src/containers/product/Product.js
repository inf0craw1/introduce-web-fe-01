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

import "./Product.scss";

const imageData = [
  { project_name: "DayFarm SW", images: [Img1, Img2, Img3, Img4] },
  { project_name: "DayFarm IoT", images: [Img5, Img6, Img7, Img8] },
  { project_name: "DayFarm ColdChain", images: null },
];

const Product = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="main product">
      <div className="img-responsive">
        <div className="img-container">
          <img alt="MainImg" src={MainImg} />
        </div>
        <div className="background-overlay">
          <div className="background-overlay-content">
            <div className="background-overlay-content-top">
              <div>
                <div className="font-display-xs">Smart Livestock Farming</div>
                <div className="font-display-lg">AI SMART FARM SYSTEM</div>
              </div>

              <button className="arrow-button font-text-md">
                CONTACT US
                <ArrowIcon className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs font-text-md">
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
          <div className="tabs-images-grid">
            {imageData[activeTab].images.map((img, index) => (
              <div className="image-container" key={index}>
                <img src={img} alt={index} className="tab-image" />
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
