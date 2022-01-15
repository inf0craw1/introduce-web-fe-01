import React from 'react';

import { Link } from 'react-router-dom';

import notice from 'assets/notice.jpg';
import Img1 from 'assets/news1.jpg';
import Img2 from 'assets/news2.jpg';

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
                <div className='img'>
                  <img alt='img1' src={Img1} />
                </div>
                <p>
                  [NEWS] (주)트랙팜, 한양대학교 기술지주회사 자회사 협약 체결, 초기 시드 투자 유치
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img'>
                  <img alt='img2' src={Img2} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
