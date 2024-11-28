import React from "react";

import Img1 from "assets/news/01.jpg";
import Img2 from "assets/news/02.jpg";
import Img3 from "assets/news/03.jpg";
import Img4 from "assets/news/04.jpg";
import Img5 from "assets/news/05.jpg";
import Img6 from "assets/news/06.jpg";
import Img7 from "assets/news/07.jpg";
import Img8 from "assets/news/08.jpg";
import Img9 from "assets/news/09.jpg";
import Img10 from "assets/news/10.jpg";
import Img11 from "assets/news/11.jpg";
import Img12 from "assets/news/12.jpg";
import Img13 from "assets/news/13.jpg";
import Img14 from "assets/news/14.jpg";
import Img15 from "assets/news/15.jpg";
import Img16 from "assets/news/16.jpg";
import Img17 from "assets/news/17.jpg";
import Img18 from "assets/news/18.jpg";
import Img19 from "assets/news/19.jpg";
import Img20 from "assets/news/20.jpg";
import Img21 from "assets/news/21.jpg";
import Img22 from "assets/news/22.jpg";
import Img23 from "assets/news/23.jpg";
import Img24 from "assets/news/24.jpg";

import "./News.scss";

const newsData = [
  {
    src: Img1,
    description: `호치민시 한국국제학교, 트랙팜 윤찬녕 대표 스타트업 베트남 진출 특강 열어`,
  },
  {
    src: Img2,
    description: `호치민 동나이성 로컬 농장 MOU공동 협약`,
  },
  {
    src: Img3,
    description: `신한스퀘어브릿지-베트남 트랙팜, Top 4 진출`,
  },
  {
    src: Img4,
    description: `베트남 진출, 호치민 동나이 한나수나 농장 솔루션 공급`,
  },
  {
    src: Img5,
    description: `동나이 도축가공장 업무 협업 진행`,
  },
  {
    src: Img6,
    description: `KSC 프로그램 - 베트남\nVSV Capital Demoday성료`,
  },
  {
    src: Img7,
    description: `AFRO 2024 스마트 농업 스타트업 전시 참가`,
  },
  {
    src: Img8,
    description: `KSC 프로그램 - 베트남\n VSV Capital Demoday성료`,
  },
  {
    src: Img9,
    description: `MEGA-US 베트남 호치민 메가어스 박람회 참여, 현지 바이어 발굴 힘써`,
  },
  {
    src: Img10,
    description: `CES 2024  K-Startup 데모데이 참가, 전세계 바이어에게 선보여`,
  },
  {
    src: Img11,
    description: `CES 2024 유레카파크관 참가, 글로벌 진출 발판 마련`,
  },
  {
    src: Img12,
    description: `호치민 로컬 농장 MOU체결`,
  },
  {
    src: Img13,
    description: `NextRise 2024 참가,\n농장 자동화 환경 관제 첨단 기술 선보여 `,
  },
  {
    src: Img14,
    description: `하노이 국립비료검증원 MOU체결`,
  },
  {
    src: Img15,
    description: `2024 Y-Farm Expo\n스마트 귀농귀촌 청년창업농업박람회, 로컬 보급화 앞당겨`,
  },
  {
    src: Img16,
    description: `AFRO 2023 참가, AI 스마트 농축산 시스템 보급화 힘써`,
  },
  {
    src: Img17,
    description: `한양대기술지주 시드투자 유치 & 중기부 팁스 선정`,
  },
  {
    src: Img18,
    description: `인덕대 캠퍼스타운, 창업경진대회 최우수상 수상`,
  },
  {
    src: Img19,
    description: `2022 DMC 이노베이션 캠프 창업경진대회 우수상 수상`,
  },
  {
    src: Img20,
    description: `세종대 캠퍼스타운, 우수 입주기업 선정`,
  },
  {
    src: Img21,
    description: `서울 중기청, 사업화 아이템 경진대회 우수상 수상`,
  },
  {
    src: Img22,
    description: `제 26회 벤처창업경진대회 우수상 수상`,
  },
  {
    src: Img23,
    description: `글로벌창업사관학교 3기\n최종 우수기업 데모데이 성료
`,
  },
  {
    src: Img24,
    description: `연수구 4차산업혁명 청년창업지원사업 선정`,
  },
];

const News = ({ isMobile }) => {
  const getImageClass = (src) => {
    const img = new Image();
    img.src = src;
    return img.width / img.height > 1.5 / 1 ? "contain-fit" : "";
  };

  return (
    <div className="main news">
      <div className="background-overlay"></div>
      <div className={isMobile ? "news-content-mobile" : "news-content"}>
        <div
          className={
            isMobile
              ? "content-title-mobile font-display-sm"
              : "content-title font-display-lg"
          }
        >
          {`TRACK FARM \nNEWS`}
        </div>
        <div
          className={
            isMobile
              ? "content-description-mobile font-text-xs"
              : "content-description font-display-xs"
          }
        >
          TRACK FARM has an ICT Conversion Technology in Machine-Learning, Smart
          farm biz, and cloud platform.
        </div>
        <div className="news-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jvIc4dijys0?si=FO_sMAwsPCkPW3nZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className={
            isMobile ? "news-image-wrapper-mobile" : "news-image-wrapper"
          }
        >
          {newsData.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-img">
                <img
                  src={item.src}
                  alt={`img${index + 1}`}
                  className={getImageClass(item.src)}
                />
              </div>
              <div
                className={
                  isMobile
                    ? "news-description-mobile font-text-xs"
                    : "news-description font-text-md"
                }
              >
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
