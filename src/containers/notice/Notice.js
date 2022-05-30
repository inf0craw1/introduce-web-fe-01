import React from 'react';

import { Link } from 'react-router-dom';

import notice from 'assets/notice.jpg';
import Img1 from 'assets/news1.jpg';
import Img2 from 'assets/news2.jpg';
import Img3 from 'assets/news3.png';
import Img4 from 'assets/news4.jpg';
import Img5 from 'assets/news5.png';
import Img6 from 'assets/news6.png';

import './Notice.scss';

const Notice = () => {
  return (
    <div className='main notice'>
      <div className="video-responsive">
        <img alt='img' src={notice} />
        <div className='background-overlay'>
          <div className='background-overlay-content'>
            <h1>
              About Us
            </h1>
            <div>
              TRACK FARM has an ICT Conversion Technology in Machine-Learning, Smart farm biz, and cloud platform.
            </div>
            <Link className='notice-contact' to='/company'>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      <div className='content-divider-container'>
        <div className='content-divider'>
          <div className='content-divider-left'>
            TRACK FARM News
            <div className='news-headline' />
          </div>
        </div>
      </div>
      <div className='content-divider-container news-container'>
        <div className='content-divider'>
          <div className='content-divider-content'>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img' style={{ height: 387 }}>
                  <img alt='img1' src={Img1} />
                </div>
                <p>
                  [NEWS] (주)트랙팜, 제 26회 COMMAX 벤처창업 경진대회 우수상 수상
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img' style={{ height: 387 }}>
                  <img alt='img2' src={Img2} />
                </div>
                <p>
                  [NEWS] 한양대학교 기술지주회사 자회사 협약 체결, 초기 시드 투자 유치
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img'>
                  <img alt='img3' src={Img3} />
                </div>
                <p>
                  [NEWS] 2022년 연수구 4차산업혁명 청년창업지원 사업 선정
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
          </div>
          <div className='content-divider-content'>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img' style={{ height: 178 }}>
                  <img alt='img4' src={Img4} />
                </div>
                <p>
                  [NEWS] 중소벤처기업진흥공단 글로벌 창업사관학교 3기 최종 선정
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img'>
                  <img alt='img5' src={Img5} />
                </div>
                <p>
                  [NEWS] KOAT 한국농업기술진흥원 농식품벤처육성지원 선정 최대 5년 지원
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img'>
                  <img alt='img6' src={Img6} />
                </div>
                <p>
                  [NEWS] 세종대 캠퍼스타운 입주기업 선정
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
