import React, { useState } from "react";

import { Link } from "components";

import MainImg from "assets/product-main-image.png";

import Img1_1 from "assets/project01-1.png";
import Img1_2 from "assets/project01-2.png";
import Img2_1 from "assets/project02-1.png";
import Img2_2 from "assets/project02-2.png";
import Img2_3 from "assets/project02-3.jpg";
import Img2_4 from "assets/project02-4.jpg";
import Img3_1 from "assets/project03-1.jpg";
import Img3_2 from "assets/project03-2.jpg";

import { ReactComponent as ArrowIcon } from "assets/arrow.svg";

import "./Product.scss";

const imageData = [
  { src: [Img1_1, Img1_2] },
  { src: [Img2_1, Img2_2, Img2_3, Img2_4] },
  { src: [Img3_1, Img3_2] },
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
              PRODUCT 0{index + 1}
            </button>
          ))}
        </div>
        <div className="tabs-images-grid">
          {imageData[activeTab].src.map((img, index) => (
            <div className="image-container">
              <img src={img} alt={index} className="tab-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
