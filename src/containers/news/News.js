import React from "react";

import { Link } from "react-router-dom";

import Img1 from "assets/news1.jpg";
import Img2 from "assets/news2.jpg";
import Img3 from "assets/news3.jpg";
import Img4 from "assets/news4.jpg";
import Img5 from "assets/news5.jpg";
import Img6 from "assets/news6.jpg";

import "./News.scss";

const newsData = [
  {
    src: Img1,
    description: `[NEWS] (주)트랙팜, 제 26회 COMMAX 벤처창업 경진대회 우수상 수상`,
  },
  {
    src: Img2,
    description: `[NEWS] 한양대학교 기술지주회사 자회사 협약 체결, 초기 시드 투자 유치`,
  },
  {
    src: Img3,
    description: `[NEWS] 2022년 연수구 4차산업혁명 청년창업지원 사업 선정`,
  },
  {
    src: Img4,
    description: `[NEWS] 중소벤처기업진흥공단 글로벌 창업사관학교 3기 최종 선정`,
  },
  {
    src: Img5,
    description: `[NEWS] KOAT 한국농업기술진흥원 농식품벤처육성지원 선정 최대 5년 지원`,
  },
  {
    src: Img6,
    description: `[NEWS] 세종대 캠퍼스타운 입주기업 선정`,
  },
];

const News = () => {
  const getImageClass = (src) => {
    const img = new Image();
    img.src = src;
    return img.width / img.height > 1.5 / 1 ? "contain-fit" : "";
  };

  return (
    <div className="main news">
      <div className="background-overlay"></div>
      <div className="news-content">
        <div className="content-title font-display-lg">TRACK FARM NEWS</div>
        <div className="content-description font-display-xs">
          TRACK FARM has an ICT Conversion Technology in Machine-Learning, Smart
          farm biz, and cloud platform.
        </div>
        <div className="news-image-wrapper">
          {newsData.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-img">
                <img
                  src={item.src}
                  alt={`img${index + 1}`}
                  className={getImageClass(item.src)}
                />
              </div>
              <div className="news-description font-text-md">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
